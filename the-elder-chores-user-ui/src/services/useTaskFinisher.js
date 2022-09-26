import {usePocketbase} from "../components/Pocketbase";
import {useMutation, useQueryClient} from "react-query";
import {tasksForUsersKey} from "./useTasks";

const useTaskFinisher = () => {
    const client = usePocketbase();
    const queryClient = useQueryClient();
    const key = tasksForUsersKey(client);

    return useMutation(async (taskId) => {
        return await client.records.update('tasks', taskId, {
            complete: true
        });
    }, {
        onMutate: async (taskId) => {
            await queryClient.cancelQueries(key);
            const previousTasks = queryClient.getQueriesData(key);

            queryClient.setQueryData(key, old => {
                const index = old.items.findIndex(t => t.id === taskId);
                if (index !== -1) {
                    const updatedTasks = {...old};
                    updatedTasks.items = [ ...old.items];

                    updatedTasks.items[index] = {
                        ...old.items[index],
                        complete: true
                    };

                    return updatedTasks;
                }

                return old;
            });
            return {
                previousTasks
            };
        },
        onError: (_err, _taskId, context) => {
            queryClient.setQueryData(key, context.previousTasks)
        },
        onSettled: () => queryClient.invalidateQueries(key)
    });
};

export default useTaskFinisher;

import {usePocketbase} from "../components/Pocketbase";
import {useMutation, useQueryClient} from "react-query";

const getTaskKey = (client) => `tasks-for-${client.authStore.model.id}`;

const useTaskFinisher = () => {
    const client = usePocketbase();
    const queryClient = useQueryClient();

    return useMutation(async (taskId) => {
        return await client.records.update('tasks', taskId, {
            complete: true
        });
    }, {
        onMutate: async (taskId) => {
            await queryClient.cancelQueries(['todos']);
            const previousTasks = queryClient.getQueriesData(getTaskKey(client));

            queryClient.setQueryData(getTaskKey(client), old => {
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
            queryClient.setQueryData(getTaskKey(client), context.previousTasks)
        },
        onSettled: () => queryClient.invalidateQueries()
    });
};

export default useTaskFinisher;

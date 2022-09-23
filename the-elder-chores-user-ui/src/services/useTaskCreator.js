import {usePocketbase} from "../components/Pocketbase";
import {useMutation, useQueryClient} from "react-query";
import {tasksForManagersKey} from "./useTasks";

const useTaskCreator = () => {
    const client = usePocketbase();
    const queryClient = useQueryClient();
    const key = tasksForManagersKey(client);

    return useMutation(async (task) => {
        return await client.records.create('tasks', {
            user: task.user,
            manager: client.authStore.model.id,
            title: task.title,
            description: task.description,
            xp: task.exp,
            currency: task.money,
            duedate: task.dueDate,
            damage: task.damage,
            complete: false
        })
    }, {
        onMutate: async (newTask) => {
            await queryClient.cancelQueries(key);
            const previousTasks = queryClient.getQueriesData(key);
            queryClient.setQueryData(key, old => {
                const newTaskList = {...old};
                newTaskList.totalItems = newTaskList.totalItems + 1;
                newTaskList.items = [newTask, ...newTaskList.items];
                return newTaskList;
            });

            return {
                previousTasks
            };
        },
        onError: (_err, _newTask, context) => {
            queryClient.setQueryData(key, context.previousTasks);
        },
        onSettled: () => queryClient.invalidateQueries(key)
    });
}

export default useTaskCreator;

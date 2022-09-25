import {useQuery} from "react-query";
import {usePocketbase} from "../components/Pocketbase";

const useTasks = (forUsers = true) => {
    const client = usePocketbase();

    const queryKey = forUsers ? tasksForUsersKey(client) : tasksForManagersKey(client);
    const filter = forUsers ? `user='${client.authStore.model.id}'` : `manager='${client.authStore.model.id}'`;
    const sort = forUsers ? 'complete,-created' : '-created';

    return useInternalTasks(client, queryKey, filter, sort);
};

export const tasksForUsersKey = (client) => ['tasks', 'user', client.authStore.model.id];
export const tasksForManagersKey = (client) => ['tasks', 'manager', client.authStore.model.id];

const useInternalTasks = (client, queryKey, filter, sort) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
            return await client.records.getList('tasks', undefined, undefined, {
                sort,
                filter
            });
        }
    });
}

export default useTasks;

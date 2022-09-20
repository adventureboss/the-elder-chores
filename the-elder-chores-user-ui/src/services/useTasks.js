import {useQuery} from "react-query";
import PocketBase from 'pocketbase';

const useTasks = () => {
    return useQuery({
        queryKey: [ 'tasks' ],
        queryFn: async() => {
            const client = new PocketBase('/');

            // not required here, we should ensure we don't use this api unless we are logged in as users
            if (!client.authStore.isValid) {
                // This needs to be called on login
                const user = await client.users.authViaEmail('your-user', '123456789');
            }

            return await client.records.getList('tasks');
        }
    });
};

export default useTasks;

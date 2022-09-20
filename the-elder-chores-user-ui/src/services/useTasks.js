import {useQuery} from "react-query";
import {usePocketbase} from "../components/Pocketbase";

const useTasks = () => {
    const client = usePocketbase();

    return useQuery({
        queryKey: [ `tasks-for-${client.authStore.model.id}` ],
        queryFn: async() => {
            return await client.records.getList('tasks');
        }
    });
};

export default useTasks;

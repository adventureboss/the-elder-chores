import {usePocketbase} from "../components/Pocketbase";
import {useMutation} from "react-query";

const useTaskFinisher = () => {
    const client = usePocketbase();
    return useMutation(async (taskId) => {
        return await client.records.update('tasks', taskId, {
            complete: true
        });
    });
};

export default useTaskFinisher;

import {usePocketbase} from "../components/Pocketbase";
import {useQuery} from "react-query";

const useManagedUsers = (enabled, filter) => {
    const client = usePocketbase();

    let fullFilter = `manager='${client.authStore.model.id}'`;
    if (filter) {
        fullFilter += ` && (userId~'${filter}' || name~'${filter}')`;
    }

    return useQuery({
        enabled,
        keepPreviousData: true,
        queryKey: ['managed-list', client.authStore.model.id, fullFilter],
        queryFn: async () => {
            return await client.records.getList('profiles', undefined, undefined, {
                filter: fullFilter
            });
        }
    })
};

export default useManagedUsers;

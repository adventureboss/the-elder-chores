import {usePocketbase} from "../components/Pocketbase";
import {useQuery} from "react-query";

const useManagers = (enabled, filter) => {
    const client = usePocketbase();

    const notMeFilter = `userId!='${client.authStore.model.id}'`;

    return useQuery({
        enabled,
        keepPreviousData: true,
        queryKey: ['manager-list', filter],
        queryFn: async () => {
            return await client.records.getList('profiles', undefined, undefined, {
                filter: filter ? `(userId~'${filter}' || name~'${filter}') && ${notMeFilter}` : notMeFilter
            });
        }
    })
};

export default useManagers;

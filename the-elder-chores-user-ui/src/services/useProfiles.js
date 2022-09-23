import {useQueries} from "react-query";
import {usePocketbase} from "../components/Pocketbase";

const useProfiles = (userIds) => {
    const client = usePocketbase();

    return useQueries(userIds ?  userIds.map(u => ({
        queryKey: [ 'profile', u ],
        queryFn: async () => {
            const profiles = await client.records.getList('profiles', undefined, undefined, {
                filter: `userId='${u}'`
            });
            if (profiles.items.length > 0) {
                return profiles.items[0];
            }

            return undefined;
        }
    })) : []);
};

export default useProfiles;

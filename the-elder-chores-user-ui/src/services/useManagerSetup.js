import {usePocketbase} from "../components/Pocketbase";
import {useMutation, useQueryClient} from "react-query";
import {getCharacterManagerKey} from "./useManager";

const useManagerSetup = () => {
    const client = usePocketbase();
    const queryClient = useQueryClient();

    return useMutation(async ({managerId}) => {
        return await client.records.update('profiles', client.authStore.model.profile.id, {
            manager: managerId
        });
    }, {
        onMutate: async ({managerId, managerName}) => {
            const key = getCharacterManagerKey(client);

            await queryClient.cancelQueries(key);
            const previousManager = queryClient.getQueriesData(key);

            queryClient.setQueryData(key, old => {
                return {
                    userId: managerId,
                    name: managerName
                };
            });

            return {
                previousManager
            };
        },
        onError: (_err, _newName, context) => {
            queryClient.setQueryData(getCharacterManagerKey(client), context.previousSheet);
        },
        onSettled: () => {
            queryClient.invalidateQueries(getCharacterManagerKey(client));
            // Updating the user data requires a reload
            client.users.refresh();
        }
    });
};

export default useManagerSetup;

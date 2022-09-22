import {usePocketbase} from "../components/Pocketbase";
import {useMutation, useQueryClient} from "react-query";
import {getCharacterSheetKey} from "./useCharacterSheet";

const useNameChanger = () => {
    const client = usePocketbase();
    const queryClient = useQueryClient();

    return useMutation(async (newName) => {
        return await client.records.update('sheets', client.authStore.model.profile.character_sheet, {
            hero_name: newName
        });
    }, {
        onMutate: async (newName) => {
            const key = getCharacterSheetKey(client);

            await queryClient.cancelQueries(key);
            const previousSheet = queryClient.getQueriesData(key);

            queryClient.setQueryData(key, old => {
                const newSheet = {...old};
                newSheet.hero_name = newName;
                return newSheet;
            });

            return {
                previousSheet
            };
        },
        onError: (_err, _newName, context) => {
            queryClient.setQueryData(getCharacterSheetKey(client), context.previousSheet);
        },
        onSettled: () => queryClient.invalidateQueries(getCharacterSheetKey(client))
    });
}

export default useNameChanger;

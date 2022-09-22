import {usePocketbase} from "../components/Pocketbase";
import {useQuery} from "react-query";

const useCharacterSheet = () => {
    const client = usePocketbase();

    return useQuery({
        queryKey: getCharacterSheetKey(client),
        queryFn: async () => {
            return await client.records.getOne('sheets', client.authStore.model.profile.character_sheet);
        }
    });
};

export const getCharacterSheetKey = (client) => {
    return `character-${client.authStore.model.id}`;
}

export default useCharacterSheet;

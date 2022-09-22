import SetupManagerModal from "../components/SetupManagerModal";
import useManagers from "../services/useManagers";
import {useState} from "react";
import useManagerSetup from "../services/useManagerSetup";

const SetupManagerModalPage = ({isOpen, currentManagerId, onClose}) => {

    const [filter, setFilter] = useState();
    const managerList = useManagers(isOpen, filter);
    const managerSetup = useManagerSetup();

    return <SetupManagerModal
        isOpen={isOpen}
        isSaving={managerSetup.isLoading}
        currentManagerId={currentManagerId}
        onClose={onClose}
        onSave={async (manager) => {
            await managerSetup.mutateAsync({
                managerId: manager.userId,
                managerName: manager.name
            });
        }}
        managerList={managerList?.data}
        onSetFilter={setFilter}
    />;
};

export default SetupManagerModalPage;

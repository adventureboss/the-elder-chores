import {
    Button,
    ButtonVariant,
    Form,
    FormGroup,
    Modal,
    ModalVariant,
    Spinner
} from "@patternfly/react-core";
import {useEffect, useState} from "react";
import UserSelector from "./UserSelector";

const SetupManagerModal = ({isOpen, isSaving, currentManagerId, onClose, onSave, managerList, onSetFilter}) => {

    const [manager, setManager] = useState({
        userId: currentManagerId
    });

    useEffect(() => {
        setManager({
            userId: currentManagerId
        });
    }, [currentManagerId]);

    useEffect(() => {
        if (managerList) {
            const matchedManager = managerList.items.find(m => m.userId === manager.userId);
            if (matchedManager) {
                setManager(matchedManager);
            }
        }
    }, [managerList, manager.userId]);

    const isLoading = !managerList;

    const onFilter = (_, input) => {
        onSetFilter(input);
        return undefined;
    }

    const onSelect = (matched) => {
        setManager(matched);
    }

    return (
        <Modal
            isOpen={isOpen}
            variant={ModalVariant.medium}
            title="Setup a manager"
            onClose={onClose}
            actions={[
                <Button
                    key="save"
                    variant={ButtonVariant.primary}
                    onClick={async () => {
                        await onSave(manager);
                        onClose();
                    }}
                    isDisabled={isSaving || isLoading}
                >
                    {isSaving ? <Spinner size="sm"/> : 'Save'}
                </Button>,
                <Button
                    key="no"
                    variant={ButtonVariant.link}
                    onClick={onClose}
                    isDisabled={isSaving || isLoading}
                >
                    Cancel
                </Button>
            ]}
        >
            <Form>
                <FormGroup
                    label="Manager"
                    isRequired
                    helperText="Select your manager."
                >
                    <UserSelector
                        userList={managerList}
                        selectedUserId={manager.userId}
                        placeholderText="Select your manager"
                        isDisabled={isSaving}
                        onFilter={onFilter}
                        onSelect={onSelect}
                    />
                </FormGroup>
            </Form>
        </Modal>
    );
};

export default SetupManagerModal;

import {
    Button,
    ButtonVariant,
    Form,
    FormGroup,
    Modal,
    ModalVariant, Select,
    SelectOption, SelectVariant, Skeleton,
    Spinner,
    TextInput
} from "@patternfly/react-core";
import {useEffect, useState} from "react";

const SetupManagerModal = ({isOpen, isSaving, currentManagerId, onClose, onSave, managerList, onSetFilter}) => {

    const [manager, setManager] = useState({
        userId: currentManagerId
    });
    const [isSelectOpen, setSelectOpen] = useState(false);

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
    }, [managerList]);

    const options = managerList ? managerList.items.map(m => {
        return <SelectOption
            key={ m.userId }
            id={ m.userId }
            value={m.userId}
        >
            <>{m.name ? m.name : `Unknown (id: ${m.userId})`}</>
        </SelectOption>;
    }) : undefined;
    const isLoading = !managerList;

    const onFilter = (_, input) => {
        onSetFilter(input);
        return undefined;
    }

    const onSelect = (_, selected) => {
        const matchedManager = managerList.items.find(m => m.userId === selected);
        if (matchedManager) {
            setManager(matchedManager);
            setSelectOpen(false);
        }
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
                    isDisabled={isSaving}
                >
                    {isLoading ? <Spinner size="sm"/> : 'Save'}
                </Button>,
                <Button
                    key="no"
                    variant={ButtonVariant.link}
                    onClick={onClose}
                    isDisabled={isLoading}
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
                    { !options ? <Skeleton width="40%" /> : (
                        <Select
                            variant={SelectVariant.single}
                            selections={manager.userId}
                            placeholderText="Select your manager"
                            hasInlineFilter
                            onToggle={() => setSelectOpen(prev => !prev)}
                            isOpen={isSelectOpen}
                            menuAppendTo={document.body}
                            isDisabled={isSaving}
                            onFilter={onFilter}
                            onSelect={onSelect}
                        >
                            { options }
                        </Select>
                    ) }
                </FormGroup>
            </Form>
        </Modal>
    );
};

export default SetupManagerModal;

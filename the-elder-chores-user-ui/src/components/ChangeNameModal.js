import {Button, ButtonVariant, Form, FormGroup, Modal, ModalVariant, Spinner, TextInput} from "@patternfly/react-core";
import {useEffect, useState} from "react";

const ChangeNameModal = ({isOpen, isLoading, currentName, onClose, onSave}) => {

    const [name, setName] = useState(currentName);

    useEffect(() => {
        setName(currentName);
    }, [currentName]);

    return (
        <Modal
            isOpen={isOpen}
            variant={ModalVariant.medium}
            title="Change your hero name"
            onClose={onClose}
            actions={[
                <Button
                    key="save"
                    variant={ButtonVariant.primary}
                    onClick={async () => {
                        await onSave(name);
                        onClose();
                    }}
                    isDisabled={isLoading}
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
                    label="Name"
                    isRequired
                    helperText="Set your desired hero name."
                >
                    <TextInput
                        aria-label="New hero name"
                        isRequired
                        type="text"
                        value={name}
                        onChange={value => setName(value)}
                    />
                </FormGroup>
            </Form>
        </Modal>
    );
};

export default ChangeNameModal;

import {Button, ButtonVariant, Modal, ModalVariant, Spinner} from "@patternfly/react-core";

const FinishTaskModal = ({isOpen, title, onFinish, onClose, isLoading}) => {
    if (isOpen) {
        return (
            <Modal
                isOpen={true}
                variant={ModalVariant.medium}
                title="Finish the task"
                onClose={onClose}
                actions={[
                    <Button
                        key="yes"
                        variant={ButtonVariant.primary}
                        onClick={onFinish}
                        isDisabled={isLoading}
                    >
                        {isLoading ? <Spinner size="sm"/> : 'Yes'}
                    </Button>,
                    <Button
                        key="no"
                        variant={ButtonVariant.link}
                        onClick={onClose}
                        isDisabled={isLoading}
                    >
                        No
                    </Button>
                ]}
            >
                Did you finish the task <strong>{title}</strong>?
            </Modal>
        );
    }

    return null;
};

export default FinishTaskModal;

import {
    Button,
    ButtonVariant, DatePicker,
    Form,
    FormGroup,
    Modal,
    ModalVariant, NumberInput,
    Spinner,
    TextArea,
    TextInput
} from "@patternfly/react-core";

const CreateTaskModal = () => (
    <Modal
        isOpen={isOpen}
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
        <Form>
            <FormGroup
                label="Title"
                isRequired
            >
                <TextInput
                    isRequired
                    type="text"
                />
            </FormGroup>
            <FormGroup
                label="Description"
                isRequired
            >
                <TextArea
                    isRequired
                />
            </FormGroup>
            <FormGroup
                label="coins"
            >
                <NumberInput
                    min={0}
                />
            </FormGroup>
            <FormGroup
                label="Experience points"
            >
                <NumberInput
                    min={1}
                />
            </FormGroup>
            <FormGroup
                label="Due date"
            >
                <DatePicker/>
            </FormGroup>
        </Form>
    </Modal>
);

export default CreateTaskModal;

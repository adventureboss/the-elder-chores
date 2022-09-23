import {
    Button,
    ButtonVariant, DatePicker,
    Form,
    FormGroup, Grid, GridItem,
    Modal,
    ModalVariant, NumberInput,
    Spinner, Split, SplitItem, Switch, Text,
    TextArea, TextContent,
    TextInput, TextVariants
} from "@patternfly/react-core";
import {useState} from "react";
import UserSelector from "./UserSelector";

const CreateTaskModal = ({isOpen, onClose, onSave, isSaving, userList, onFilter}) => {
    const [useDueDate, setUseDueDate] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        user: null,
        coins: 0,
        exp: 0,
        dueDate: undefined,
        damage: 0
    });

    return (
        <Modal
            isOpen={isOpen}
            variant={ModalVariant.medium}
            title="Create a new task"
            onClose={onClose}
            actions={[
                <Button
                    key="save"
                    variant={ButtonVariant.primary}
                    onClick={async () => {
                        const localTask = {...task};
                        if (!useDueDate) {
                            delete localTask['dueDate'];
                            delete localTask['damage'];
                        }
                        await onSave(localTask);
                    }}
                    isDisabled={isSaving}
                >
                    {isSaving ? <Spinner size="sm"/> : 'Save'}
                </Button>,
                <Button
                    key="no"
                    variant={ButtonVariant.link}
                    onClick={onClose}
                    isDisabled={isSaving}
                >
                    Cancel
                </Button>
            ]}
        >
            <Form>
                <FormGroup
                    label="Assign to"
                    isRequired
                >
                    <UserSelector
                        userList={userList}
                        selectedUserId={task.user}
                        placeholderText="Select your user"
                        isDisabled={false}
                        onFilter={onFilter}
                        onSelect={u => setTask(prev => ({...prev, user: u.userId}))}
                    />
                </FormGroup>
                <FormGroup
                    label="Title"
                    isRequired
                >
                    <TextInput
                        isRequired
                        type="text"
                        aria-label="task-title"
                        value={task.title}
                        onChange={v => setTask(prev => ({...prev, title: v}))}
                    />
                </FormGroup>
                <FormGroup
                    label="Description"
                    isRequired
                >
                    <TextArea
                        isRequired
                        aria-label="task-description"
                        value={task.description}
                        onChange={v => setTask(prev => ({...prev, description: v}))}
                    />
                </FormGroup>
                <Grid hasGutter>
                    <GridItem span={6}>
                        <FormGroup
                            label="Coins"
                        >
                            <NumberInput
                                min={0}
                                onMinus={() => setTask(prev => ({...prev, coins: prev.coins - 1}))}
                                onPlus={() => setTask(prev => ({...prev, coins: prev.coins + 1}))}
                                onChange={event => setTask(prev => ({...prev, coins: Number(event.target.value)}))}
                                value={task.coins}
                            />
                        </FormGroup>
                    </GridItem>
                    <GridItem span={6}>
                        <FormGroup
                            label="Experience points"
                        >
                            <NumberInput
                                min={1}
                                onMinus={() => setTask(prev => ({...prev, exp: prev.exp - 1}))}
                                onPlus={() => setTask(prev => ({...prev, exp: prev.exp + 1}))}
                                onChange={event => setTask(prev => ({...prev, exp: Number(event.target.value)}))}
                                value={task.exp}
                            />
                        </FormGroup>
                    </GridItem>
                </Grid>
                <Split>
                    <SplitItem>
                        <TextContent>
                            <Text style={{marginBottom: 5}}>Would you like to set a due date?</Text>
                            <Text component={TextVariants.small}>Setting a due date inflicts damage if it's not completed on time</Text>
                        </TextContent>
                    </SplitItem>
                    <SplitItem isFilled/>
                    <SplitItem>
                        <Switch
                            aria-label="enable-due-date"
                            isChecked={useDueDate}
                            onChange={checked => setUseDueDate(checked)}
                        />
                    </SplitItem>
                </Split>
                {useDueDate && (
                    <Grid hasGutter>
                        <GridItem span={6}>
                            <FormGroup
                                label="Damage"
                            >
                                <NumberInput
                                    min={1}
                                    onMinus={() => setTask(prev => ({...prev, damage: prev.damage - 1}))}
                                    onPlus={() => setTask(prev => ({...prev, damage: prev.damage + 1}))}
                                    onChange={event => setTask(prev => ({...prev, damage: Number(event.target.value)}))}
                                    value={task.damage}
                                />
                            </FormGroup>
                        </GridItem>
                        <GridItem span={6}>
                            <FormGroup
                                label="Due date"
                                isRequired={true}
                            >
                                <DatePicker
                                    onChange={val => setTask(prev => ({...prev, dueDate: val}))}
                                    value={task.dueDate}
                                    appendTo={document.body}
                                />
                            </FormGroup>
                        </GridItem>
                    </Grid>
                )}
            </Form>
        </Modal>
    );
}

export default CreateTaskModal;

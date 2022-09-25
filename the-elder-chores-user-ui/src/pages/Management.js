import {
    ActionList,
    ActionListItem,
    Button, ButtonVariant,
    PageSection,
    Stack,
    StackItem
} from "@patternfly/react-core";
import useTasks from "../services/useTasks";
import * as React from "react";
import Task from "../components/Task";
import useProfiles from "../services/useProfiles";
import {AddCircleOIcon} from "@patternfly/react-icons";
import {useState} from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import useManagedUsers from "../services/useManagedUsers";
import useTaskCreator from "../services/useTaskCreator";

const TaskSection = (props) => (
    <StackItem className="task">
        <PageSection>
            <Task {...props} />
        </PageSection>
    </StackItem>
);

const Management = () => {
    const tasks = useTasks(false);
    const profiles = useProfiles(tasks.data?.items.map(t => t.user));
    const [addingTask, setAddingTask] = useState(false);
    const [filter, setFilter] = useState('');
    const userList = useManagedUsers(addingTask, filter);
    const taskCreator = useTaskCreator();

    return (
        <>
            <Stack hasGutter>
                <StackItem>
                    <ActionList>
                        <ActionListItem>
                            <Button
                                variant={ButtonVariant.primary}
                                icon={<AddCircleOIcon/>}
                                onClick={() => setAddingTask(true)}
                            >
                                Add task
                            </Button>
                        </ActionListItem>
                    </ActionList>
                </StackItem>
                <Stack className="tasks-wrapper">
                    { tasks.isLoading === false ? (
                        tasks.data.items.map((t, index) => (
                            <TaskSection
                                key={t.id}
                                taskId={t.id}
                                title={t.title}
                                description={t.description}
                                coins={t.currency}
                                exp={t.xp}
                                damage={t.damage}
                                complete={t.complete}
                                assignedTo={profiles[index].data?.name}
                            />
                        ))
                    ) : (
                        (Array.from(new Array(5))).map((_, index) => <TaskSection key={index} />)
                    ) }
                </Stack>
            </Stack>
            {<CreateTaskModal
                isOpen={addingTask}
                onFilter={(_, input) => setFilter(input)}
                userList={userList.data}
                onClose={() => setAddingTask(false)}
                onSave={async task => {
                    await taskCreator.mutateAsync(task);
                    setAddingTask(false);
                }}
                isSaving={taskCreator.isLoading}
            />}
        </>
    );
};

export default Management;

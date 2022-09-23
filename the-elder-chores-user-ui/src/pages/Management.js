import {
    ActionList,
    ActionListItem,
    Button, ButtonVariant,
    PageSection,
    PageSectionVariants,
    Stack,
    StackItem
} from "@patternfly/react-core";
import useTasks from "../services/useTasks";
import * as React from "react";
import Task from "../components/Task";
import useProfiles from "../services/useProfiles";
import {AddCircleOIcon} from "@patternfly/react-icons";

const TaskSection = (props) => (
    <StackItem>
        <PageSection variant={ PageSectionVariants.darker }>
            <Task {...props} />
        </PageSection>
    </StackItem>
);

const Management = () => {
    const tasks = useTasks(false);
    const profiles = useProfiles(tasks.data?.items.map(t => t.user));

    return (
        <Stack hasGutter>
            <StackItem>
                <ActionList>
                    <ActionListItem>
                        <Button
                            variant={ButtonVariant.primary}
                            icon={<AddCircleOIcon/>}
                            onClick={() => console.log('hey')}
                        >
                            Add task
                        </Button>
                    </ActionListItem>
                </ActionList>
            </StackItem>
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
    );
};

export default Management;

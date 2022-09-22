import {
    Button,
    ButtonVariant,
    Flex,
    FlexItem,
    PageSection,
    PageSectionVariants,
    Skeleton, Stack, StackItem
} from "@patternfly/react-core";
import StatsSection from "../components/StatsSection";
import Level from "../components/Level";
import Task from "../components/Task";
import useTasks from "../services/useTasks";
import useCharacterSheet from "../services/useCharacterSheet";
import useTaskFinisher from "../services/useTaskFinisher";
import FinishTaskModal from "../components/FinishTaskModal";
import * as React from 'react';
import ChangeNameModal from "../components/ChangeNameModal";
import {PencilAltIcon} from "@patternfly/react-icons";
import useNameChanger from "../services/useNameChanger";
import useManager from "../services/useManager";
import SetupManagerModalPage from "./SetupManagerModalPage";

const TaskSection = (props) => (
    <FlexItem>
        <PageSection variant={ PageSectionVariants.darker }>
            <Task {...props} />
        </PageSection>
    </FlexItem>
);

const RenderManager = ({isLoading, manager, onSetupManager}) => {
    const managerName = manager?.name && manager.name.trim() !== '' ? manager.name : 'Unknown';

    return (
        <>
            {isLoading && <Skeleton/>}
            {manager ? (
                <span>
                    <strong>Manager:</strong> {managerName}
                    <Button variant={ButtonVariant.plain} onClick={onSetupManager}><PencilAltIcon /></Button>
                </span>
            ) : (
                <Button variant={ButtonVariant.link} onClick={onSetupManager}>Setup manager</Button>
            )}
        </>
    )
};

const Home = () => {

    const tasks = useTasks();
    const sheet = useCharacterSheet();
    const manager = useManager();

    const taskFinisher = useTaskFinisher();
    const nameChanger = useNameChanger();

    const [taskToFinish, setTaskToFinish] = React.useState(undefined);
    const [changeNameIsOpen, setChangeNameIsOpen] = React.useState(false);
    const [setupManager, setSetupManager] = React.useState(false);

    return (
        <>
            <Flex alignItems={{default: "alignItemsFlexStart"} }>
                <Flex style={{minWidth: 150}} direction={{ default: 'column' }}>
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            <Stack>
                                <StackItem>
                                    { sheet.data?.hero_name ? <>
                                        {sheet.data?.hero_name}
                                        <Button onClick={() => setChangeNameIsOpen(true)} isInline variant={ButtonVariant.plain}>
                                            <PencilAltIcon />
                                        </Button>
                                    </> : <Skeleton /> }
                                </StackItem>
                                <StackItem>
                                    <RenderManager
                                        isLoading={manager.isLoading}
                                        manager={manager.data}
                                        onSetupManager={() => setSetupManager(true)}
                                    />
                                </StackItem>
                            </Stack>
                        </PageSection>
                    </FlexItem>
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            <Level
                                classname={ sheet.data?.class}
                                level={sheet.data?.lvl}
                                experience={sheet.data?.xp}
                                coins={sheet.data?.currency}
                            />
                        </PageSection>
                    </FlexItem>
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            <StatsSection
                                str={ sheet.data?.str }
                                dex={ sheet.data?.dex }
                                con={ sheet.data?.con }
                                wis={ sheet.data?.wis }
                                int={ sheet.data?.int }
                                cha={ sheet.data?.cha }
                            />
                        </PageSection>
                    </FlexItem>
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            Inventory
                        </PageSection>
                    </FlexItem>
                </Flex>
                <Flex direction={{ default: 'column' }} style={{ minWidth: 300, width: 500 }}>
                    { tasks.isLoading === false ? (
                        tasks.data.items.map(t => (
                            <TaskSection
                                key={t.id}
                                taskId={t.id}
                                title={t.title}
                                description={t.description}
                                coins={t.currency}
                                exp={t.xp}
                                damage={t.damage}
                                complete={t.complete}
                                onFinishing={async () => setTaskToFinish(t)}
                            />
                        ))
                    ) : (
                        (Array.from(new Array(5))).map((_, index) => <TaskSection key={index} />)
                    ) }
                </Flex>
            </Flex>
            <FinishTaskModal
                isOpen={ taskToFinish !== undefined }
                title={ taskToFinish?.title }
                isLoading={ taskFinisher.isLoading }
                onFinish={async () => {
                    await taskFinisher.mutateAsync(taskToFinish.id);
                    setTaskToFinish(undefined);
                }}
                onClose={() => setTaskToFinish(undefined)}
            />
            <ChangeNameModal
                isOpen={changeNameIsOpen}
                isLoading={false}
                currentName={sheet.data?.hero_name}
                onClose={() => setChangeNameIsOpen(false)}
                onSave={newName => nameChanger.mutateAsync(newName)}
            />
            <SetupManagerModalPage
                isOpen={setupManager}
                currentManagerId={manager.data?.userId}
                onClose={() => setSetupManager(false)}
            />
        </>
    );
};

export default Home;

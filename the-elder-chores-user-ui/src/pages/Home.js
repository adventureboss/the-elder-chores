import {Flex, FlexItem, PageSection, PageSectionVariants, Skeleton} from "@patternfly/react-core";
import StatsSection from "../components/StatsSection";
import Level from "../components/Level";
import Task from "../components/Task";
import useTasks from "../services/useTasks";
import useCharacterSheet from "../services/useCharacterSheet";
import useTaskFinisher from "../services/useTaskFinisher";
import FinishTaskModal from "./FinishTaskModal";
import * as React from 'react';

const TaskSection = (props) => (
    <FlexItem>
        <PageSection variant={ PageSectionVariants.darker }>
            <Task {...props} />
        </PageSection>
    </FlexItem>
);

const Home = () => {

    const tasks = useTasks();
    const sheet = useCharacterSheet();
    const taskFinisher = useTaskFinisher();
    const [taskToFinish, setTaskToFinish] = React.useState(undefined);

    return (
        <>
            <Flex alignItems={{default: "alignItemsFlexStart"} }>
                <Flex style={{minWidth: 150}} direction={{ default: 'column' }}>
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            { sheet.data?.hero_name ?? <Skeleton /> }
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
        </>
    );
};

export default Home;

import {Flex, FlexItem, PageSection, PageSectionVariants} from "@patternfly/react-core";
import StatsSection from "../components/StatsSection";
import Level from "../components/Level";
import Task from "../components/Task";
import useTasks from "../services/useTasks";

const TaskSection = (props) => (
    <FlexItem>
        <PageSection variant={ PageSectionVariants.darker }>
            <Task {...props} />
        </PageSection>
    </FlexItem>
);

const Home = () => {

    const { isLoading, data: tasks } = useTasks();

    return (
        <Flex alignItems={{default: "alignItemsFlexStart"} }>
            <Flex style={{minWidth: 150}} direction={{ default: 'column' }}>
                <FlexItem>
                    <PageSection variant={ PageSectionVariants.darker }>
                        Avatar
                    </PageSection>
                </FlexItem>
                <FlexItem>
                    <PageSection variant={ PageSectionVariants.darker }>
                        <Level />
                    </PageSection>
                </FlexItem>
                <FlexItem>
                    <PageSection variant={ PageSectionVariants.darker }>
                        <StatsSection />
                    </PageSection>
                </FlexItem>
                <FlexItem>
                    <PageSection variant={ PageSectionVariants.darker }>
                        Inventory
                    </PageSection>
                </FlexItem>
            </Flex>
            <Flex direction={{ default: 'column' }} style={{ minWidth: 300, width: 500 }}>
                { isLoading === false ? (
                    tasks.items.map(t => (
                        <TaskSection
                            taskId={t.id}
                            title={t.title}
                            description={t.description}
                            coins={t.currency}
                            exp={t.xp}
                            damage={t.damage}
                            complete={t.complete}
                        />
                    ))
                ) : (
                    (Array.from(new Array(5))).map(() => <TaskSection />)
                ) }


            </Flex>
        </Flex>
    );
};

export default Home;

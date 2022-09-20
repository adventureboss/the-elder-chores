import {Flex, FlexItem, PageSection, PageSectionVariants} from "@patternfly/react-core";
import StatsSection from "../components/StatsSection";
import Level from "../components/Level";
import Task from "../components/Task";

const tasks = [
    {
        id: 'task-id-001',
        description: 'A legion of young thieves did attack the command center (your room) and left all the place upside down.\n' +
            'Your mission is to clean it to be able to retrieve the trust to use your entertainment mirror again.',
        coins: 7,
        exp: 15,
        custom: [ 'iPad', 'iPhone' ]
    },
    {
        id: 'take-out-trash',
        description: 'Trash is smelly - take it out',
        coins: 2,
        exp: 5
    }
];

const Home = () => {
    return (
        <Flex>
            <Flex style={{minWidth: 150, marginTop: 'auto'}} direction={{ default: 'column' }}>
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
                { tasks.map(t => (
                    <FlexItem>
                        <PageSection variant={ PageSectionVariants.darker }>
                            <Task
                                taskId={t.id}
                                description={t.description}
                                exp={t.exp}
                                coins={t.coins}
                                custom={t.custom}
                            />
                        </PageSection>
                    </FlexItem>
                )) }
            </Flex>
        </Flex>
    );
};

export default Home;

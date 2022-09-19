import {Flex, FlexItem, PageSection, PageSectionVariants} from "@patternfly/react-core";
import ProgressBar from "../components/ProgressBar";
import StatsSection from "../components/StatsSection";
import Level from "../components/Level";

const Box = ({ children }) => (
    <div>
        { children }
    </div>
);

const Home = () => {
    return (
        <Flex>
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
            <Flex direction={{ default: 'column' }}>
                <PageSection variant={ PageSectionVariants.darker }>
                    List of tasks
                </PageSection>
            </Flex>
        </Flex>
    );
};

export default Home;

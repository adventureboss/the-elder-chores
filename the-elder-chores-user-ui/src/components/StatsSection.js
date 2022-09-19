import {Stack, StackItem, Text, TextContent, TextVariants} from "@patternfly/react-core";
import Stats from "./Stats";

const StatsSection = () => (
    <Stack>
        <StackItem style={{marginLeft: 'auto', marginRight: 'auto'} }>
            <TextContent>
                <Text component={ TextVariants.h2 }>
                    Stats
                </Text>
            </TextContent>
        </StackItem>
        <StackItem>
            <Stats stat="STR" value={ 12 } />
            <Stats stat="DEX" value={ 8 } />
            <Stats stat="CON" value={ 9 } />
            <Stats stat="WIS" value={ 6 } />
            <Stats stat="INT" value={ 11 } />
            <Stats stat="CHA" value={ 15 } />
        </StackItem>
    </Stack>
);

export default StatsSection;

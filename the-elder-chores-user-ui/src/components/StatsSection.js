import {Stack, StackItem, Text, TextContent, TextVariants} from "@patternfly/react-core";
import Stats from "./Stats";

const StatsSection = ({str, dex, con, wis, int, cha}) => (
    <Stack hasGutter>
        <StackItem style={{marginLeft: 'auto', marginRight: 'auto'} }>
            <TextContent>
                <Text component={ TextVariants.h2 }>
                    Stats
                </Text>
            </TextContent>
        </StackItem>
        <StackItem>
            <Stats stat="STR" value={ str } />
            <Stats stat="DEX" value={ dex } />
            <Stats stat="CON" value={ con } />
            <Stats stat="WIS" value={ wis } />
            <Stats stat="INT" value={ int } />
            <Stats stat="CHA" value={ cha } />
        </StackItem>
    </Stack>
);

export default StatsSection;

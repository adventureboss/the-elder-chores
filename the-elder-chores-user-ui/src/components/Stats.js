import {Split, SplitItem} from "@patternfly/react-core";

const Stats = ({stat, value}) => (
    <Split hasGutter>
        <SplitItem>
            { stat }
        </SplitItem>
        <SplitItem style={{ marginRight: 5, marginLeft: 'auto'}}>
            { value }
        </SplitItem>
    </Split>
);

export default Stats;

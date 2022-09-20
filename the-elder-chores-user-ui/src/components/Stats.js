import {Skeleton, Split, SplitItem} from "@patternfly/react-core";

const Stats = ({stat, value}) => (
    <Split hasGutter>
        <SplitItem>
            { stat }
        </SplitItem>
        <SplitItem style={{ marginRight: 5, marginLeft: 'auto'}}>
            { value ?? <Skeleton width="40px" height="20px" /> }
        </SplitItem>
    </Split>
);

export default Stats;

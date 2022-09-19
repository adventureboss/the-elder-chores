import {
    Progress, ProgressMeasureLocation
} from "@patternfly/react-core";

const ProgressBar = ({ base, next, current }) => (
    <Progress min={ base } max={ next } value={ current } measureLocation={ ProgressMeasureLocation.outside } />
);

export default ProgressBar;

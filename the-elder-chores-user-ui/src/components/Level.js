import {
    Grid, GridItem,
    Skeleton,
} from "@patternfly/react-core";
import {CoinsIcon} from "@patternfly/react-icons";

const LevelLayout = ({classname, level, experience, coins}) => (
    <Grid>
        <GridItem span={6}>Class:</GridItem>
        <GridItem offset={7}>{classname ?? <Skeleton height="20px" />}</GridItem>

        <GridItem span={6}>Level:</GridItem>
        <GridItem offset={7}>{level ?? <Skeleton height="20px" />}</GridItem>

        <GridItem span={6}>Experience:</GridItem>
        <GridItem offset={7}>{experience ?? <Skeleton height="20px" />}</GridItem>

        <GridItem span={6}>Coins:</GridItem>
        <GridItem offset={7}>{coins ?? <Skeleton height="20px" />}</GridItem>
    </Grid>
);

const Level = ({classname, level, experience, coins}) => (
    <LevelLayout
        classname={classname}
        level={level}
        experience={experience && <>{experience} <strong>XP</strong></>}
        coins={coins && <>{coins} <CoinsIcon /></>}
    />
);

export default Level;

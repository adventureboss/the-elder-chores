import * as React from 'react';
import {
    Flex, FlexItem, Skeleton,
    Split, SplitItem, Stack, StackItem
} from "@patternfly/react-core";
import CheckboxButton from "./CheckboxButton";
import {ArchiveIcon, CoinsIcon} from "@patternfly/react-icons";

const TaskLayout = ({title, description, complete, onFinishing, children}) => (
    <Stack hasGutter>
        <StackItem>
            <Split>
                <SplitItem style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <CheckboxButton isChecked={complete} onCheck={ onFinishing }/>
                </SplitItem>
                <SplitItem isFilled>
                    <Stack hasGutter>
                        <StackItem>{ title }</StackItem>
                        <StackItem>{ description }</StackItem>
                    </Stack>
                </SplitItem>
            </Split>
        </StackItem>
        <StackItem>
            <Flex direction={{default: "rowReverse"}}>
                { children }
            </Flex>
        </StackItem>
    </Stack>
);

const emptyFn = () => {};

const Task = ({taskId, title, description, complete, exp, coins, custom, damage, onFinishing}) => {

    const [ isFinishing, setFinishing ] = React.useState(false);

    const onFinishingInternal = async () => {
        setFinishing(true);
        await onFinishing(taskId);
        setFinishing(false);
    }

    if (!taskId) {
        return (
            <TaskLayout
                title={<Skeleton width="180px" />}
                description={<Skeleton height="60px" />}
                complete={false}
                onFinishing={emptyFn}
            >
                <Skeleton width="40%" />
            </TaskLayout>
        );
    }

    return (
        <TaskLayout title={title} description={description} complete={complete} onFinishing={onFinishingInternal}>
            { custom && (
                (Array.isArray(custom) ? custom : [ custom ]).map(c => (
                    <FlexItem>
                        {c} <ArchiveIcon/>
                    </FlexItem>)).reverse()
            )}
            { damage && (
                <FlexItem>
                    { damage } <i style={{verticalAlign: -1}} className="ra ra-crossed-swords" />
                </FlexItem>
            )}
            { exp && (
                <FlexItem>
                    {exp} <strong>XP</strong>
                </FlexItem>
            ) }
            { coins && (
                <FlexItem>
                    { coins } <CoinsIcon/>
                </FlexItem>
            ) }
        </TaskLayout>
    )
};

export default Task;

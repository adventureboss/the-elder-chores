import * as React from 'react';
import {
    Flex, FlexItem,
    Split, SplitItem, Stack, StackItem
} from "@patternfly/react-core";
import CheckboxButton from "./CheckboxButton";
import {ArchiveIcon, CoinsIcon} from "@patternfly/react-icons";

const Task = ({taskId, description, exp, coins, custom, onFinishing}) => {

    const [ isFinishing, setFinishing ] = React.useState(false);

    const onFinishingInternal = async () => {
        setFinishing(true);
        await onFinishing(taskId);
        setFinishing(false);
    }

    return (
        <Stack>
            <StackItem>
                <Split>
                    <SplitItem style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <CheckboxButton isChecked={false} onCheck={ onFinishingInternal }/>
                    </SplitItem>
                    <SplitItem isFilled>
                        { description }
                    </SplitItem>
                </Split>
            </StackItem>
            <StackItem>
                <Flex direction={{default: "rowReverse"}}>
                    { custom && (
                        (Array.isArray(custom) ? custom : [ custom ]).map(c => (
                            <FlexItem>
                                {c} <ArchiveIcon/>
                            </FlexItem>)).reverse()
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
                </Flex>
            </StackItem>
        </Stack>
    )
};

export default Task;

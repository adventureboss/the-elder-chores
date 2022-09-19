import {
    Stack, StackItem
} from "@patternfly/react-core";
import ProgressBar from "./ProgressBar";

const Level = () => (
    <Stack>
        <StackItem>
            Level 1
        </StackItem>
        <StackItem>
            <ProgressBar
                base={ 0 }
                current={ 10 }
                next={ 100 }
            />
        </StackItem>
    </Stack>
);

export default Level;

import {Button, ButtonVariant} from "@patternfly/react-core";
import {IconSize, OutlinedSquareIcon, OutlinedCheckSquareIcon} from "@patternfly/react-icons";

const CheckboxButton = ({isChecked, onCheck}) => (
    <Button variant={ ButtonVariant.plain } onClick={ onCheck }>
        { isChecked ? <OutlinedCheckSquareIcon size={ IconSize.lg } /> : <OutlinedSquareIcon size={ IconSize.lg } /> }
    </Button>
);

export default CheckboxButton;

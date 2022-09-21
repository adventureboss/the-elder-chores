import {Button, ButtonVariant} from "@patternfly/react-core";
import {IconSize, OutlinedSquareIcon, OutlinedCheckSquareIcon} from "@patternfly/react-icons";

const CheckboxButton = ({isChecked, onCheck, isDisabled}) => (
    <Button isDisabled={isDisabled} variant={ ButtonVariant.plain } onClick={ onCheck }>
        { isChecked ? <OutlinedCheckSquareIcon size={ IconSize.lg } /> : <OutlinedSquareIcon size={ IconSize.lg } /> }
    </Button>
);

export default CheckboxButton;

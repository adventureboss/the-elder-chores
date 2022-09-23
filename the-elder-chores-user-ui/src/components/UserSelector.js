import {Select, SelectOption, SelectVariant, Skeleton} from "@patternfly/react-core";
import {useState} from "react";

const UserSelector = ({userList, selectedUserId, placeholderText, isDisabled, onFilter, onSelect}) => {
    const [isSelectOpen, setSelectOpen] = useState(false);

    const options = userList?.items?.map(m => {
        return <SelectOption
            key={ m.userId }
            id={ m.userId }
            value={m.userId}
        >
            <>{m.name ? m.name : `Unknown (id: ${m.userId})`}</>
        </SelectOption>;
    });

    if (!options) {
        return <Skeleton width="40%"/>;
    }

    return (
        <Select
            variant={SelectVariant.single}
            selections={selectedUserId}
            placeholderText={placeholderText}
            hasInlineFilter
            onToggle={() => setSelectOpen(prev => !prev)}
            isOpen={isSelectOpen}
            menuAppendTo={document.body}
            isDisabled={isDisabled}
            onFilter={onFilter}
            onSelect={(_, selected) => {
                const matched = userList.items.find(u => u.userId === selected);
                if (matched) {
                    onSelect(matched);
                    setSelectOpen(false);
                }
            }}
        >
            { options }
        </Select>
    );
};

export default UserSelector;

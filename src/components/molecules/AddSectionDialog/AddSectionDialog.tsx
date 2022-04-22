import { Icon } from 'reader/atoms';
import { TableRowsRoundedIcon, ViewColumnRoundedIcon } from 'src/components/icons/icons';
import { AddSectionWrapper } from './styled';

interface Props {
    open: boolean;
    parentId: any;
    index: any;
    addSection?(parentId: any, index: any, direction: any): void;
}

const AddSectionDialog = (props: Props) => {
    return <>
        {props.open && <AddSectionWrapper>
            <Icon iconName={<TableRowsRoundedIcon />} onClick={() => props.addSection(props.parentId, props.index, 'column')} />
            <Icon iconName={<ViewColumnRoundedIcon />} onClick={() => props.addSection(props.parentId, props.index, 'row')} />
        </AddSectionWrapper>}
    </>
}
export default AddSectionDialog
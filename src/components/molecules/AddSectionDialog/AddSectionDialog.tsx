import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import styled from 'styled-components';

interface Props {
    open: boolean;
    addSection?(parentId: any, index: any, direction: any): void;
    parentId: any;
    index: any;
}

const AddSectionDialog = (props: Props) => {
    return <>
        {props.open === true && <AddSectionWrapper>
            <TableRowsRoundedIcon onClick={() => props.addSection(props.parentId, props.index, 'row')} />
            <ViewColumnRoundedIcon onClick={() => props.addSection(props.parentId, props.index, 'column')} />
        </AddSectionWrapper>}
    </>
}
export default AddSectionDialog


const AddSectionWrapper = styled.div`
    outline: 1px solid lightGrey;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
`
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import styled from 'styled-components';

interface Props {
    open: boolean;
    parentId: any;
    index: any;
    addSection?(parentId: any, index: any, direction: any): void;
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
    outline: 0.1px solid #c1c1c1;
    width: fit-content;
    padding: 0px 5px;
    border-radius: 5px;
    color: #797979;
`
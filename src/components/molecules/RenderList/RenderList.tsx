import { useEffect, useState } from 'react';
import { Input } from 'reader/atoms';
import styled from 'styled-components';

interface Props {
    item: any;
    pageId: any;
    sectionId: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
}

const RenderList = ({ item, handleUpdateWithSection, pageId, sectionId }: Props) => {

    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const [listItemToEdit, setListItemToEdit] = useState<number>()

    const addNewListItem = (index: number, i: any) => {
        const todos = { ...item }
        todos.listItems[index] = { id: index + 1, text: 'New list item' }
        handleUpdateWithSection(todos, pageId, sectionId, i)
    }

    return <StyledWrapper>
        <StyledList>
            {item.listItems.length > 0 && item.listItems.map((item: any, index: any) =>
                <StyledListItem onClick={() => {
                    setOpenEdit(!openEdit)
                    setListItemToEdit(item.id)
                }}>
                    <Input
                        key={index}
                        type={'text'}
                        backgroundColor={'#d4d4d4'}
                        color={item.color}
                        textAlign={"left"}
                        defaultValue={item.text}
                    />
                    {openEdit && listItemToEdit === item.id && <h5>openEditDialog</h5>}
                </StyledListItem>
            )}
        </StyledList>
        <StyledSpan onClick={() => addNewListItem(item.listItems.length, item.id)}>+</StyledSpan>
    </StyledWrapper>
}

export default RenderList

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSpan = styled.span`
    
`
const StyledList = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledListItem = styled.li`
    padding: 2px 0px;
`
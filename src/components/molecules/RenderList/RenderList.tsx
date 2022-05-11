import { useEffect } from 'react';
import { Icon, Input } from 'reader/atoms';
import { AddIcon } from 'reader/icons';
import styled from 'styled-components';

interface Props {
    item: any;
    pageId: any;
    sectionId: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
}

const RenderList = ({ item, handleUpdateWithSection, pageId, sectionId }: Props) => {

    const addNewListItem = (index: number, i: any) => {
        const todos = { ...item }
        todos.listItems[index] = { id: index + 1, text: 'New text' }
        handleUpdateWithSection(todos, pageId, sectionId, i)
    }

    return <div>
        <StyledList>
            {item.listItems.length > 0 && item.listItems.map((item: any, index: any) =>
                <StyledListItem>
                    <Input
                        key={index}
                        type={'text'}
                        backgroundColor={'#d4d4d4'}
                        textAlign={"left"}
                        defaultValue={item.text}
                    />
                </StyledListItem>
            )}
        </StyledList>
        <Icon
            iconName={<AddIcon />}
            onClick={() => addNewListItem(item.listItems.length, item.id)} />
    </div>
}

export default RenderList

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
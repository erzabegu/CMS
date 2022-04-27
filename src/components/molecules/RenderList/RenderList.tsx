import React, { useEffect, useState } from 'react';
import { Input } from 'reader/atoms';
import styled from 'styled-components';

interface Props {
    item: any;
    pageId: any;
    sectionId: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
}

const RenderList = ({ item, handleUpdate, handleUpdateWithSection, pageId, sectionId }: Props) => {

    const addNewListItem = (index: number, i: any) => {
        const todos = { ...item }
        todos.listItems[index] = { id: index + 1, text: 'New text' }
        handleUpdateWithSection(todos, pageId, sectionId, i)
    }

    return <div>
        {item.listItems.length > 0 && item.listItems.map((item: any, index: any) => <ul style={{ position: "relative" }} key={index}>
            <li><Input type={'text'} backgroundColor={'#f6f4f4'} defaultValue={item.text} /></li>
        </ul>
        )}
        <span onClick={() => addNewListItem(item.listItems.length, item.id)}>+</span>
    </div>
}

export default RenderList

const StyledSpan = styled.span`
    position: absolute;
    top: 0;
    right: 0;
`
import React from 'react'
import { Button, Input } from 'reader/atoms';
import styled from 'styled-components'

interface Props {
    fileDetails: any;
    addPages?(index: number, item: any): void;
}

const PagesWrapper = ({ fileDetails, addPages }: Props) => {
    return <>
        <Pageswrapper>
            {fileDetails.map((page: any, index: any) => <div key={index} style={{ padding: '10px 0px', }}>
                <Input
                    type='text'
                    defaultValue={page.pageName}
                />
            </div>)}
            <Button onClick={() => addPages(fileDetails.length, fileDetails.length + 1)} value={'+'} />
        </Pageswrapper>
    </>
}

export default PagesWrapper

const Pageswrapper = styled.div`
    flex-grow: 1;
    background-color: rgb(240 231 234);
    padding: 10px;
    border-radius: 5px; 
    align-items: center; 
    min-height: 86.5vh;
    text-align: center;
`

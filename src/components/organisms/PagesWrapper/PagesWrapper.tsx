import React from 'react'
import { Button, Input } from 'reader/atoms';
import { Pageswrapper } from './styled';

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
            <Button
                onClick={() => addPages(fileDetails.length, fileDetails.length + 1)}
                value={'+'} />
        </Pageswrapper>
    </>;
}

export default PagesWrapper;


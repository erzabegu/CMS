import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, TextArea } from 'reader/atoms';
import { ISectionItem } from 'reader/types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
    item: ISectionItem;
    handleUpdate?(passedItem: any): void;
}


const RenderCode = ({ item, handleUpdate }: Props) => {

    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const [markdown, setMarkdown] = useState<string>(`~~~\n${item.defaultCode}`);

    return <> <div onClick={() => { setOpenEdit(!openEdit) }}>
        <ReactMarkdown
            children={markdown}
            components={{
                code({ node, inline, className, children, ...props }) {
                    return !inline && (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            style={okaidia}
                            language={"javascript"}
                            PreTag="div"
                            defaultChecked={true}
                            {...props}
                        />)
                }
            }}
        />
    </div>
        {openEdit === true && <TextArea
            onChange={(e: any) => {
                setMarkdown(e.target.value)
                handleUpdate({
                    ...item, defaultCode: markdown.includes(`~~~`) ? `${markdown} ` : markdown.includes(`~~`) || markdown === "" ? `~~~
                    ${markdown}` : `~~~
                    ${markdown}`
                })
            }}
            defaultValue={`\n${markdown}`}
            style={{ maxWidth: '800px' }}
        />}
    </>
}

export default RenderCode

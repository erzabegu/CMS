import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, TextArea } from 'reader/atoms';
import { ISectionItem } from 'reader/types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneEarth } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
    item: ISectionItem;
    handleUpdate?(passedItem: any): void;
}
// const markdown = `
// ~~~js
// int b = 6
// ~~~
// `;


const RenderCode = ({ item, handleUpdate }: Props) => {
    const [markdown, setMarkdown] = useState<string>(`~~~ 
      ${item.defaultCode}`);
    const [value, setValue] = useState<string>(``);


    return <>
        <ReactMarkdown
            children={markdown}
            components={{
                code({ node, inline, className, children, ...props }) {
                    return !inline && (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            style={duotoneEarth}
                            language={"javascript"}
                            PreTag="div"
                            defaultChecked={true}
                            {...props}
                        />)
                    // const match = /language-(\w+)/.exec(className || "");
                    // return !inline && match ? (
                    //     <SyntaxHighlighter
                    //         children={String(children).replace(/\n$/, "")}
                    //         style={duotoneEarth}
                    //         language={match[1]}
                    //         PreTag="div"
                    //         defaultChecked={true}
                    //         {...props}
                    //     />
                    // ) : (
                    //     <code className={className} {...props}>
                    //         {children}
                    //     </code>
                    // );
                }
            }}
        />
        <TextArea onChange={(e: any) => {
            setMarkdown(e.target.value)
            handleUpdate({
                ...item, defaultCode: markdown.includes(`~~~`) ? `${markdown} ` : markdown.includes(`~~`) || markdown === "" ? `~~~
        ${markdown}` : `~~~
        ${markdown}`
            })
        }} defaultValue={`
        ${markdown}`} />
    </>
}

export default RenderCode
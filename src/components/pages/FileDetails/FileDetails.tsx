import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFileContent } from "reader/services";
import { FileDetailsTemplate } from "reader/templates";
import { IContent } from "reader/types";


const FileDetails = () => {
    const [fileDetails, setFileDetails] = useState<Array<IContent>>([])
    const { content } = useSelector(state => (state as any).content);
    useEffect(() => {
        getFileContent().then((res: any) => {
            setFileDetails(res.data)
            // setContent(res.data)
        })
    }, [])

    return (
        <FileDetailsTemplate fileDetails={fileDetails} setFileDetails={setFileDetails} />
    )
}

export default FileDetails;
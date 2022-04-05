import React, { useEffect, useState } from "react";
import { getFiles } from "reader/services";
import { FilesListTemplate } from "reader/templates";
import { IFile } from "reader/types";

const FilesList = () => {

    const [files, setFiles] = useState<Array<IFile>>([])

    useEffect(() => {
        getFiles().then((res: any) => setFiles(res.data))
    }, [])

    return (
        <FilesListTemplate files={files} setFiles={setFiles}/>
    )
}

export default FilesList;
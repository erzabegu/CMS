import React, { useEffect, useState } from "react";
import { getFiles } from "reader/services";
import { FilesListTemplate } from "reader/templates";
import { FileType } from "reader/types";

const FilesList = () => {

    const [files, setFiles] = useState<Array<FileType>>([])

    useEffect(() => {
        getFiles().then((res: any) => setFiles(res.data))
    }, [])

    return (
        <FilesListTemplate files={files} />
    )
}

export default FilesList;
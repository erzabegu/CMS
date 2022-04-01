import React, { useEffect, useState } from "react";
import { getFiles } from "reader/services";
import { FilesListTemplate } from "reader/templates";
import { IFile } from "reader/types";
import { addFile } from "src/services/FileServices";

const FilesList = () => {

    const [files, setFiles] = useState<Array<IFile>>([])

    useEffect(() => {
        getFiles().then((res: any) => setFiles(res.data))
    }, [])

    const _addNewFile = () => {
        addFile({ id: 5, fileName: "Newfile" }).then((res: any) => console.log(res))
    }

    return (
        <FilesListTemplate files={files} />
    )
}

export default FilesList;
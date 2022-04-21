import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { addFile, editFile, getFiles } from "reader/services";
import { FilesListTemplate } from "reader/templates";
import { IFile } from "reader/types";

const FilesList = () => {

    const [files, setFiles] = useState<Array<IFile>>([])

    useEffect(() => {
        getFiles().then((res: AxiosResponse) => setFiles(res.data))
    }, [])

    const _editFile = (file: IFile, setFileToEdit: any) => {
        file.id && editFile(file.id, { ...file, fileName: file.fileName, }).then((res: AxiosResponse) => console.log(res)).catch((e) => console.log(e))
        setFileToEdit(null)
    }

    const _addNewFile = (setAutofocus: any) => {
        addFile(files && { id: (files.length + 1), fileName: `File${files.length + 1}` }).then(() => getFiles().then((res: AxiosResponse) => {
            setAutofocus(true)
            setFiles(res.data)
        }))
    }
    return (
        <FilesListTemplate files={files} setFiles={setFiles} editFile={_editFile} addNewFile={_addNewFile} />
    )
}

export default FilesList;
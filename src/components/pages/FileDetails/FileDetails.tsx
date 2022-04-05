import React, { useEffect, useState } from "react";
import { getFileContent } from "reader/services";
import { FileDetailsTemplate } from "reader/templates";
import { IContent } from "reader/types";


const FileDetails = () => {
    const [fileDetails, setFileDetails] = useState<Array<IContent>>([])
    useEffect(() => {
        getFileContent().then((res: any) => setFileDetails(res.data))
    }, [])

    return (
        <FileDetailsTemplate fileDetails={fileDetails} setFileDetails={setFileDetails} />
    )
}

export default FileDetails;
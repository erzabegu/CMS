import { useEffect, useState } from "react";
import { getFileContent } from "reader/services";
import { FileDetailsTemplate } from "reader/templates";
import { IContent } from "reader/types";


const FileDetails = () => {
    const [fileDetails, setFileDetails] = useState<Array<IContent>>([])

    useEffect(() => {
        getFileContent().then((res: any) => {
            setFileDetails(res.data)
        })
    }, [])



    // const setActiveIndex = () => {
    //     setFileDetails((currentFileDetails: any) => {
    //         return [...currentFileDetails]
    //     })
    // }

    const _handleDroppableEvent = (dropResult: any) => {
        setFileDetails((currentFileDetails: any) => {
            console.log('setFileDetails', currentFileDetails)
            currentFileDetails.find((page: any) => {
                if (page.pageId === dropResult.pageName) {
                    page.sections.find((section: any) => {
                        if (section.sectionId === dropResult.name) {
                            section.items.push({ itemId: Math.floor(Math.random() * 20), itemName: "Item name", type: dropResult.tipi, color: 'black' })
                        }
                    })
                }
            })
            return [...currentFileDetails]
        })
    }


    return (
        <>
            <FileDetailsTemplate handleDroppableEvent={_handleDroppableEvent} fileDetails={fileDetails} setFileDetails={setFileDetails} />
        </>
    )
}

export default FileDetails;
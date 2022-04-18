import { useEffect, useState } from "react";
import { getFileContent } from "reader/services";
import { FileDetailsTemplate } from "reader/templates";
import { IContent, IWidgetsList } from "reader/types";
import { getWidgetList } from "src/services/DocumentServies";


const FileDetails = () => {
    const [fileDetails, setFileDetails] = useState<Array<IContent>>([])
    const [widgetsList, setWidgestList] = useState<Array<IWidgetsList>>([])

    useEffect(() => {
        getFileContent().then((res: any) => {
            setFileDetails(res.data)
        })
        getWidgetList().then((res: any) => setWidgestList(res.data))
    }, [])

    // const setActiveIndex = () => {
    //     setFileDetails((currentFileDetails: any) => {
    //         return [...currentFileDetails]
    //     })
    // }

    const _addPages = (index: number, item: any) => {
        const newTodos = [...fileDetails];
        newTodos.push({ pageId: item, pageName: 'new page', sections: [{ sectionId: 1, displayDirection: 'row', items: [] }] })
        setFileDetails(newTodos)
    }

    const _handleDroppableEvent = (dropResult: any) => {
        setFileDetails((currentFileDetails: any) => {
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


    return <FileDetailsTemplate
        handleDroppableEvent={_handleDroppableEvent}
        fileDetails={fileDetails}
        setFileDetails={setFileDetails}
        widgetsList={widgetsList}
        addPages={_addPages}
    />

}

export default FileDetails;
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getFileContent } from "reader/services";
import { FileDetailsTemplate } from "reader/templates";
import { IContent, IWidgetsList } from "reader/types";
import { getWidgetList } from "src/services/DocumentServies";


const FileDetails = () => {
    const [fileDetails, setFileDetails] = useState<Array<IContent>>([])
    const [widgetsList, setWidgestList] = useState<Array<IWidgetsList>>([])

    useEffect(() => {
        getFileContent().then((res: AxiosResponse) => {
            setFileDetails(res.data)
        })
        getWidgetList().then((res: AxiosResponse) => setWidgestList(res.data))
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

    useEffect(() => {
        console.log(fileDetails, 'fileDetails')
    }, [fileDetails])

    const _handleDroppableEvent = (dropResult: any) => {
        setFileDetails((currentFileDetails: any) => {
            currentFileDetails.find((page: any) => {
                if (page.pageId === dropResult.pageName) {
                    page.sections.find((section: any) => {
                        if (section.sectionId === dropResult.name) {
                            section.items.push({
                                itemId: Math.floor(Math.random() * 20),
                                itemName: "Item name",
                                type: dropResult.tipi,
                                data: [12, 19, 3, 5, 2, 5],
                                backgroundColor: [
                                    '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e'
                                ],
                                borderWidth: 0,
                                // data: {
                                //     datasets: [
                                //         {
                                //             data: [12, 19, 3, 5, 2, 5],
                                //             backgroundColor: [
                                //                 '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e'
                                //             ],
                                //             borderColor: [
                                //                 '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e'

                                //             ],
                                //             borderWidth: 2
                                //         }
                                //     ]
                                // },
                                listItems: [{ id: 1, text: "FistListItem" }],
                                color: 'black',
                                defaultCode: "<span>Hello code</span>"
                            })
                        }
                    })
                }
            })
            return [...currentFileDetails]
        })
    }


    const _handleNewFeatures = (name: any, pageName: any, feature: {}) => {
        const newTodos = [...fileDetails];
        newTodos[pageName - 1].sections[name - 1] = { ...newTodos[pageName - 1].sections[name - 1], ...feature }
        setFileDetails(newTodos)
    }

    return <FileDetailsTemplate
        fileDetails={fileDetails}
        widgetsList={widgetsList}
        setFileDetails={setFileDetails}
        addPages={_addPages}
        handleDroppableEvent={_handleDroppableEvent}
        handleNewFeature={_handleNewFeatures}
    />

}

export default FileDetails;
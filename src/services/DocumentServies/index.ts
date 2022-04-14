import { request } from "reader/utils"
import { RequestMethods } from "src/enums"


export const getFileContent = async () => {
    try {
        return await request(RequestMethods.GET, 'fileDetails')
    }
    catch (e) {
        return e
    }
}

export const getWidgetList = async () => {
    try {
        return await request(RequestMethods.GET, 'widgetsList')
    }
    catch (e) {
        return e
    }
}
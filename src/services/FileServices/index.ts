import React from "react";
import { request } from "reader/utils";
import { RequestMethods } from "src/enums";


export const getFiles = async () => {
    try {
        const response = await request(RequestMethods.GET, 'files')
        return response
    }
    catch (e) {
        console.log(e)
    }
}

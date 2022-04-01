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

export const editFile = async (id: number, data: any) => {
    try {
        const response = await request(RequestMethods.PUT, `files/${id}`, data)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const addFile = async (data: any) => {
    try {
        const response = await request(RequestMethods.POST, `files`, data)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
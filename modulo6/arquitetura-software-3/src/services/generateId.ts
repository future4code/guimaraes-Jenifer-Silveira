import {v4 as uuid} from "uuid"

export const generateId = () => {
    return uuid().toString()
}


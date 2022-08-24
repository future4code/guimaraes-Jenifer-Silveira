import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/types"

class Authenticator {

    generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign(payload, process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION as string}
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const result = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return result

    }
}

export default new Authenticator()
import * as jwt from "jsonwebtoken"
import {AuthenticationData} from "../model/types"
import {UserNotFound} from "../error/customError"



export class Authenticator{

    generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION as string}
        )
        return token
    };

    GetTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(
                token, 
                process.env.JWT_KEY as string
                ) as AuthenticationData;
            return payload
            
        } catch (error: any) {
            throw new UserNotFound()
            
        }
    }

}
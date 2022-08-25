import * as jwt from "jsonwebtoken"
import {AuthenticationData} from "../model/types"




export class Authenticator{

    generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION as string}
        )
        return token
    };

    generateTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token, 
            process.env.JWT_KEY as string
            ) as AuthenticationData;
        return payload
    }

}
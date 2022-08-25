import * as bcrypt from "bcryptjs"

export class HashManager{
    
    generateHash = async (string: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(string, salt)
        return result
    }

    compareHash = async(string: string, hash: string) :Promise<boolean> => {
        const result = await bcrypt.compare(string, hash)
        return result

    }
}
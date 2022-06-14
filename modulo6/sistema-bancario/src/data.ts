export type bankStatement = {
    balance: number,
    date: number,
    description: string
}


export type userAccount = {
    id: number,
    name: string,
    birth: number,
    CPF: number,
    balance: bankStatement[]
}


export const users = [
    {
        id: 1,
        name: "Jenifer Kindermann",
        birth: 1992,
        CPF: 43166019030,
        balance: ""
    },

    {
        id: 2 ,
        name: "Akin Silveira",
        birth:1992,
        CPF:14324956879,
        balance:""
    },

    {
        id: 3 ,
        name: "Vilson da Silveira",
        birth:1992,
        CPF:83123588740,
        balance:
    }
]
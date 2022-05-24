import {} from "./desafio.js"
import { retornaOrdemCrescente } from "./ex3.js"

describe("Checa se os números estão em ordem crescente", () =>{
    const resultado = retornaOrdemCrescente(true)
    expect(resultado) .toEqual(true)
})
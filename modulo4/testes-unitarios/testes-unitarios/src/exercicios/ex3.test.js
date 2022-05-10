import { checaItensDuplicados } from "./ex3.js";

describe("Checa itens duplicados", () => {
    const resultado = checaItensDuplicados(true)
    expect (resultado) .toContain(true)
});
cons
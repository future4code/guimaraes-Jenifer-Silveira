/*function checaTriangulo(
    a: number, 
    b:number,
    c: number,
    ) :string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log(checaTriangulo(2,4,6))*/

function imprimeTresCoresFavoritas(cor1: string, cor2:string, cor3:string):string[] {
    const arrayCores = []

    arrayCores.push(cor1,cor2,cor3)
    return arrayCores
}

console.log(imprimeTresCoresFavoritas("roxo", "Amarelo", "Vermelho"))

function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano %400 === 0
    const cond2 = (ano % 400 ===0) && (ano % 100 !==0)
    return cond1 || cond2
}

console.log(checaAnoBissexto(2000))
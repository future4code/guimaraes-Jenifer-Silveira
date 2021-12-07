function selecionarPessoas(pessoas){

    const anoCorrente = new Date().getFullYear()

    return pessoas.filter(pessoa => {
        return(
            pessoa.nacionalidade === "brasileira" &&
            !pessoa.tomouVacina &&
            anoCorrente - pessoa.anoNascimento >= 60
        )
    })

//     const resultadoFinal =[]

//     for(let pessoa of pessoas){
//         if (
//             pessoa.nacionalidade === "brasileira" &&
//             !pessoa.tomouVacina &&
//             2021 - pessoa.anoNascimento >= 60
//         )
//     {
//         resultadoFinal.push(pessoa)
//     }
// }
// return resultadoFinal
}

const pacientes = [
    {
    nome: "Jenifer Kindermann",
    anoNascimento: 1992,
    nacionalidade: "brasileira",
    tomouVacina: true
},
{
    nome: "Elisabeth Kindermann",
    anoNascimento: 1959,
    nacionalidade: "brasileira",
    tomouVacina: true
},
{
    nome: "Rasa Craig",
    anoNascimento: 1979,
    nacionalidade: "americana",
    tomouVacina: true,
},
{
    nome: "Véio da Havan",
    anoNascimento: 1952,
    nacionalidade: "brasileiro",
    tomouVacina: false
},
{
    nome: "Benevides Castro",
    anoNascimento: 1950,
    nacionalidade: "brasileira",
    tomouVacina: false
},
{
    nome: "Maria Aparecida Luz",
    anoNascimento: 1961,
    nacionalidade: "brasileira",
    tomouVacina: false
}
]

console.log(
    selecionarPessoas(pacientes)
);
//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

//EXERCICIO 1
/*
a) irá imprimir o array, o index e o tamanho do array
*/


//EXERCICIO 2
/*
a) irá imprimir o objeto nome de cada array
*/





 // EXERCICIO 3
/*
a) irá retornar apenas os arrays que nao possuem "Chijo"
 */



//EXERCICIOS DE ESCRITA DE CÓDIGO
//EXERCICIO 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//a
/*const nomePet = pets.map((item,index,Array) => {
return item.nome
})
    console.log(nomePet)

*/
/* const petsRaca = pets.filter ((pets)=> {
        return pets.raca === "Salsicha";
    });
    const nomePetsNovos = petsRaca.map((pets) =>{
        return pets.nome;
    })
    
    console.log(nomePetsNovos)

*/


/*const petsClientes = pets.filter((pets)=>{
    return pets.raca.toLowerCase() === "poodle"

})
const promocaoCliente = petsClientes.map((pets) => {

    return `Voce ganhou um cupom de desconto de 10% para tosa do seu pet ${pets.nome}`

})

console.log( promocaoCliente)

*/
// EXERCICIO 2
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
*/

/*
const produtosNome = produtos.map((produtos)=>{

    return produtos.nome
})

console.log(produtosNome)
 */

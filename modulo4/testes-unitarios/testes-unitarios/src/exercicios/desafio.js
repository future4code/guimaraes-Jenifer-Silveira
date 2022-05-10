export function  retornaOrdemCrescente (array)  {
    const ordemCrescente = array.sort(function(a , b){
        return a - b
        
    })
    return ordemCrescente

}

console.log(retornaOrdemCrescente)
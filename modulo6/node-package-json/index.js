const name = process.argv[2]
const age = Number(process.argv[3])
const futureAge = 7

console.log(`Ola ${name}! Você tem ${age} e daqui sete anos você terá ${futureAge + age}`)

const num1 = Number(process.argv[4])
const num2 = Number(process.argv[5])

console.log(`A soma dos números é ${num1+num2}`)
console.log(`A subtraçao dos números é ${num2-num1}`)
console.log(`A multiplicaçao dos números é ${num1*num2}`)
console.log(`A divisao dos números é ${num1%num2}`)
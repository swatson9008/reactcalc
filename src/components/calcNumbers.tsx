/* eslint-disable @typescript-eslint/no-unused-vars */
export default function calcNumbers(number1: number, symbol: string, number2: number){

    if(symbol === "+"){return number1 + number2}
    if(symbol === "-"){return number1 - number2}
    if(symbol === "/"){return number1 / number2}
    if(symbol === "*"){return number1 * number2}
}
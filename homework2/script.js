//main Fibonacci function
const getFibonachiNum = (f0, f1, n) =>
    n === 1 ? BigInt(f1) : BigInt(getFibonachiNum(f1, f1 + f0, n - 1));

//sub Fibonacci function for negative input
const getNegativeFibonachiNum = (f0, f1, n) =>
    BigInt(Math.pow(-1, Math.abs(n + 1))) * getFibonachiNum(f0, f1, Math.abs(n));

//sub function for comfort call
const handleFibonachiNum = n =>
    userInput === Math.abs(userInput) ?
        getFibonachiNum(0, 1, userInput) : getNegativeFibonachiNum(0, 1, userInput);

let userInput = +prompt("Enter a number to find:");

while (isNaN(userInput) || userInput === 0) {
    userInput = +prompt("Error, try again. Enter a number to find:");
}

let result = handleFibonachiNum(userInput);

alert(`In the Fibonacci sequence your number ${userInput} equals\n${result}`);
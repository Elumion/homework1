//  Покращена програма по ТЗ, приймає першим аргументом масив, 
//  і кожен наступний аргумент - це тип даних який буде виключений з масиву
//  Вертає новий масив

const filterBy = (arr, ...dataTypes) =>
    dataTypes.reduce((accumulator, reduceItem) =>
        accumulator.filter(filterItem =>
            typeof filterItem !== typeof reduceItem
        ), arr);

const checkArr = [1, 5, "rew", null, undefined, true, false, 53n, 53, 3, undefined, {}, []];

console.log(filterBy(checkArr, undefined, "str", 52, true, 1n));
console.log(checkArr); // не змінився
console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));
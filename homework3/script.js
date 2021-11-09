//  програма по ТЗ, приймає першим аргументом масив 
//  і другим аргументом тип даних що буде виключений з масиву
//  Вертає новий масив

const filterBy = (arr, dataType) =>
    arr.filter(elem =>
        typeof elem !== typeof dataType
    );

console.log(filterBy([1, 5, "rew", null, undefined, true, false, 53n], undefined));
console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));

//  Покращена програма по ТЗ, приймає першим аргументом масив, 
//  і кожен наступний аргумент - це тип даних який буде виключений з масиву
//  Вертає новий масив

const filterByManyTypes = (arr, ...dataTypes) =>
    dataTypes.reduce((accumulator, reduceItem) =>
        accumulator.filter(filterItem =>
            typeof filterItem !== typeof reduceItem
        ), arr);

const checkArr = [1, 5, "rew", null, undefined, true, false, 53n, 53, 3, undefined, {}, []];

console.log(filterByManyTypes(checkArr, undefined, "str", 52, true, 1n));
console.log(checkArr); // не змінився
console.log(filterByManyTypes(['hello', 'world', 23, '23', null], 'string'));


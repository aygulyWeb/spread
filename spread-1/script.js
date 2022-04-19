// Spread и Rest операторларга хар кайсысына 5 пример ислеп келиу керек.

// 1 Клонирование

let arr = ['world', 'is', 'most', 'popular'];
let newArr = ['JavaScript', 'is', 'the', ...arr, 'world', 'programming', 'language.'];

console.log(newArr.splice(' ').join(' '));
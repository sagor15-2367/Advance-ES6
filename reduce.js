// sompunno array ke final akta number a rupantor kore fele ,
// map,forEach,filter,find,reduce
const numbers = [1, 2, 3, 4, 5, 6];
//reduce (accumulatorFunction,initial value)
//accumulatorFunction use two parameters(previous value , current value)
// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);

console.log(total);
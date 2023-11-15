const numbers = [12, 14, 13, 11, 22, 23, 32, 43, 1, 2, 34, 43, 5];
const bigNums = numbers.filter(number => number > 20);
const somllerNums = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);

// console.log(even);
// console.log(somllerNums);
// console.log(bigNums);

const products = [
    { id: 1, name: 'laptop', price: 80000 },
    { id: 2, name: 'Mobile', price: 50000 },
    { id: 3, name: 'Iphone', price: 180000 },
    { id: 4, name: 'Destop', price: 60000 }
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 1000);
const expensive = products.filter(product => product.price < 1000);

console.log(expensive);
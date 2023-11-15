const numbers = [12, 14, 13, 11, 22, 25, 23, 32, 43, 1, 2, 34, 43, 5];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);

console.log(fivesAll);
console.log(fives);

const products = [
    { id: 1, name: 'laptop', price: 80000 },
    { id: 2, name: 'Mobile', price: 50000 },
    { id: 3, name: 'Iphone', price: 180000 },
    { id: 4, name: 'Destop', price: 60000 }
];

const product = products.find(num => num.price < 70000);
const product1 = products.filter(num => num.price > 80000);

console.log(product1);
console.log(product);
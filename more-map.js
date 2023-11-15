const numbers = [11, 22, 33, 3, 18, 22];
const half = numbers.map(x => x / 2);
const third = numbers.map(n => n / 3);

// console.log(third);
// console.log(half);

const friends = ['Sagor', 'Raton', 'Rumon', 'Nahid', 'Sazzad', 'afraim'];
const firstLetters = friends.map(friend => friend[0]);
const nameLengths = friends.map(friend => friend.length)

// console.log(firstLetters);
// console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 80000 },
    { id: 2, name: 'Mobile', price: 50000 },
    { id: 3, name: 'Iphone', price: 180000 },
    { id: 4, name: 'Destop', price: 60000 }
];
// const items=products.map(product=>console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);

console.log(items);
console.log(prices);
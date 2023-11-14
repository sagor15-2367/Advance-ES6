// 1. var let const 
// break up with var
const numbers = [12, 13, 11, 41, 22];
let salary = 469;
salary = 543;

//2. default parameters
function calculateSalary(salary, tax = 0, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
// 3. template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>salary: ${ calculateSalary(1000, 0, 0) }</p>
    <p>others:${ numbers[2] } </p>
</div>
`

// arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread
const ages = [11, 21, 31, 32, 23, 13];
const newAges = [...ages, 22, 55, 60];

// destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'Sagor Alam', salary: 450 };
const [a, b, d, ...r] = [12, 45, 33, 55, 22];
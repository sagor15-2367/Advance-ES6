const students = {
    name: 'Sagor Alam',
    age: 15,
    class: 'nine',
    marks: {
        math: 55,
        physics: 69,
        chemistry: {
            writhen: 40,
            viva: 20,
            practical: 24
        },
    },
}

const marks = students.marks;
const math = students.marks.math;
const practicals = students.marks.chemistry.practical;

// console.log(marks);
// console.log(math);
// console.log(practicals);

const chemistry=students['marks']['chemistry']['practical'];

console.log(chemistry);
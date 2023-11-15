const users = [{ id: 1, name: 'Sagor Alam', job: 'Engineer' }];
// console.log(users[0].job)

const data = {
    count: 500,
    data: [
        { id: 1, name: 'Sagor', job: 'Engineer' },
        { id: 2, name: 'Saon', job: 'leader' }
    ]
}
const newData = data.data[1].name;
// console.log(newData)

const user = {
    id: 4001,
    name: 'Sagor Alam',
    address: {
        street: {
            first: '35/B kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    },
}

const userFlood = user.address.street.third;
console.log(userFlood);
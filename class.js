// syntactic sugar
class Instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log('start the support session at ${time}')
    }
    createQuiz(module) {
        console.log('please create quiz for module ${module}')
    }
}
const newclass = new Instructor('Sagor Alam', 'Rangpur');
console.log(newclass);

newclass.startSupportSession('9.00');
newclass.createQuiz(60);

const newMan = new Instructor('Saon', 'Rangpur');
console.log(newMan);
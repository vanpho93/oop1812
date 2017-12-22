class School {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }
}

const kpt = new School('KPTrain', '92 LTR');
const teo = new Person('Teo', 10, kpt);

console.log(teo.school.name);

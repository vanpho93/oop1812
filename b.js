function Person (ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function () {
        console.log(`Xin chao toi la ${this.name}, toi ${this.age} tuoi`);
    }
}

const teo = new Person('teo Nguyen', 10);
const ti = new Person('Ti 123', 12);

ti.sayHello();
teo.sayHello();

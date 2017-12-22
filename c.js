// function Person (ten, tuoi) {
    // this.name = ten;
    // this.age = tuoi;
    // this.sayHello = function () {
    //     console.log(`Xin chao toi la ${this.name}, toi ${this.age} tuoi`);
    // }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao toi la ${this.name}, toi ${this.age} tuoi`);
    }
}

const teo = new Person('teo Nguyen', 10);
const ti = new Person('Ti 123', 12);

ti.sayHello();
teo.sayHello();

/*
    Khai bao class Point, co 2 thuoc tinh, x va y
    phuong thuc getDistance tra ve khoang cach
    tu diem do toi diem O(0, 0)
*/

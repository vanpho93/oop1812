const teo = {
    name: 'Teo Nguyen',
    age: 10,
    sayHello: function () {
        // console.log('Xin chao. toi la ' + this.name + ', toi ' + this.age + ' tuoi');
        console.log(`Xin chao toi la ${this.name}, toi ${this.age} tuoi`);
    }
};

teo.sayHello();
console.log(teo);
// teo = {};
teo.age = 11;

console.log(teo.name);
console.log(teo.age);
teo.sayHello();

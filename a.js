const teo = {
    name: 'Teo Nguyen',
    age: 10,
    sayHello: function () {
        // console.log('Xin chao. toi la ' + this.name + ', toi ' + this.age + ' tuoi');
        console.log(`Xin chao toi la ${this.name}, toi ${this.age} tuoi`);
    },
    school: {
        name: 'KPT',
        address: '92 LTR'
    }
};

// teo.sayHello();
console.log(teo.school.address);
// teo = {};
teo.age = 11;

// console.log(teo.name);
// console.log(teo.age);
// teo.sayHello();

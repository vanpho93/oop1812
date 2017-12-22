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

// console.log(JSON.stringify(teo));

const str = '{ "name": "Teo" }';
console.log(JSON.parse(str));

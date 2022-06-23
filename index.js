// const user = {
//   name: "ryan", // propiedad
//   lastname: "rsaay",
//   age: 30,
//   showfullname() {
//     return this.name + " " + this.lastname;
//   },
// };

// //cosntructor
// function Person() {
//   (this.name = ""),
//     (this.lastname = ""),
//     (this.age = 0),
//     (this.showfullname = function () {
//       return `${this.name} ${this.lastname}`;
//     });
// }

// const user2 = new Person();
// user2.name = "joe";
// user2.lastname = "sas";
// user2.age = 20;
// // console.log(user2.showfullname());
// // console.log(user2);

// console.log(Object.keys(user));
// console.log(Object.values(user));
/////////////////////////////////////

// const company = {
//   name: "fazt",
//   employees: [],
// };

// class Person {
//   constructor(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
//   }
//   greet() {
//     return `Hello i am ${this.name} ${this.lastname}`;
//   }
// }

// const john = new Person("jhon", "ray");
// const maria = new Person("maria", "perez");
// //relacion - asociacion
// maria.parent = john;
// console.log(maria);
// console.log(john);

// //agregacion unos objetos tienen un rol mayor
// //agregate- contiene -component

// company.employees.push(john);
// company.employees.push(maria);
// console.log(company);

// //composicion.tipo fuerte de agregacion

// const persona = {
//   name: "ryan",
//   lastname: "ray",
//   address: {
//     street: "123 bakec",
//     city: "london",
//     country: "united kingdom",
//   },
// };

//herencia
class Person {
  constructor(name, lastname) {
    (this.name = name), (this.lastname = lastname);
  }
}

class Programer extends Person {
  constructor(language) {
    super();
    this.language = language;
  }
}

const person = new Person();
console.log(person);

const programer = new Programer();
console.log(programer);

//polimorfismo

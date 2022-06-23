// /*1) Programa una función que cuente el número de caracteres de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá 10.
// */
// const miFuncion = (cadena) => {
//   if (typeof cadena === "string" || cadena instanceof String) {
//     console.log(cadena.length);
//   } else {
//     console.log("No es una cadena de texto");
//   }
// };
// miFuncion("Hola Mundo");
// /*
// 2) Programa una función que te devuelva el texto recortado según el
// número de caracteres indicados, pe. miFuncion("Hola Mundo", 4)
// devolverá "Hola".
// */
// const recorteFuncion = (cadena, num) => console.log(cadena.slice(0, num));
// recorteFuncion("Hola Mundo", 4);
// /*
// 3) Programa una función que dada una String te devuelva un Array
// de textos separados por cierto caracter, pe. miFuncion
// ('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// */
// const divisionFuncion = (cad) => console.log(cad.split(" "));
// divisionFuncion("hola que tal");
// /*
// 4) Programa una función que repita un texto X veces, pe.
//  miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

// const repetirFuncion = (cad, num) => console.log(cad.repeat(num));
// repetirFuncion(" Hola Mundo", 3);

// /*
// 5) Programa una función que invierta las palabras de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
// const palindromo = (cad) => {
//   console.log(cad.split("").reverse().join(""));
// };
// palindromo("hola mundo");
// /*
// 6) Programa una función para contar el número de veces que se repite
//  una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo ", "mundo") devolverá 2.
//  */
// const repetir = (cad, palabra) => {
//   let contador = 0;

//   cad.split(" ").forEach((element) => {
//     if (element === palabra) {
//       contador += 1;
//     }
//   });

//   return console.log(contador);
// };
// repetir("hola mundo adios mundo mundo", "mundo");
// /*
// 7) Programa una función que valide si una palabra o frase dada,
// es un palíndromo (que se lee igual en un sentido que en otro),
// pe. mifuncion("Salas") devolverá true.*/
// const palindromo2 = (cad) => {
//   let invertido = cad
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .join("")
//     .toLowerCase();
//   let cadUnida = cad.split(" ").join("").toLowerCase();
//   if (cadUnida === invertido) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// palindromo2("Somos o no somos");
// /*
// 8) Programa una función que elimine cierto patrón de caracteres
//  de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
//  devolverá  "1, 2, 3, 4 y 5. */
// const patron = (cad, pat) => {
//   console.log(cad);
//   let newcad = [];
//   cad.split(",").forEach((element) => {
//     newcad.push(element.trim().replace(pat, ""));
//   });
//   return console.log(newcad);
// };

// // const patron = (cad, pat) => {
// //     console.log(cad);
// //     cad.split(",").filter((element) => {
// //       return console.log(element.trim().indexOf(pat) !== -1);
// //     });
// //     console.log(cad);
// //   };

// patron("xyz1, xyz2, xyz3, xyz4, xyz5, sas,2xyz2", "xyz");

// /*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
// const randomNum = (min, max) => {
//   return console.log(Math.round(Math.random() * (max - min) + min));
// };
// randomNum(501, 600);
// const randomNum2 = () => {
//   let max = 600,
//     min = 501;
//   return console.log(Math.round(Math.random() * (max - min) + min));
// };
// randomNum2();
// /*
// 10) Programa una función que reciba un número y evalúe si es capicúa
//  o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// */
// const capicua = (num) => {
//   let numReverse = num.toString().split("").reverse().join("");
//   let numString = num.toString();

//   console.log(numReverse === numString ? true : false);
// };
// capicua(2002.2001);
// /*
// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el producto
// de todos los números enteros positivos desde 1 hasta n),
//  pe. miFuncion(5) devolverá 120. */

// const fact = (n) => {
//   if (n < 0) {
//     return "numero menor a zero";
//   }
//   return n === 0 || n === 1 ? 1 : n * fact(n - 1);
// };

// console.log(fact(5));

// /*
// 12) Programa una función que determine si un número es primo
// (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// */
// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= n - 1; i++) if (n % i === 0) return false;
//   return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(4));
// /*
// 13) Programa una función que determine si un número es par o impar,
//  pe. miFuncion(29) devolverá Impar.
//  */
// const parImpar = (n) => {
//   return n % 2 === 0 ? true : false;
// };
// console.log(parImpar(21));
// /*function isPrime(n)
// {
//     if (n<=1) return false;
//     for (var i = 2; i <= Math.sqrt(n); i++)
//         if (n % i == 0) return false;
//     return true;
// }

// console.log(isPrime(70));
// console.log(isPrime(23)); */
// /*
// 14) Programa una función para convertir grados Celsius a
// Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
// //°F = (°C x 1,8) + 32

// const convertir = (n) => {
//   console.log(n * 1.8 + 32);
// };
// convertir(0);

/*15) Programa una función para convertir números de base binaria 
a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
// const decimalEnBinario = (n) => {
//   console.log(n.toString(2));
// };
// decimalEnBinario(100);

// const BinarioADecimal = (n) => {
//   console.log(parseInt(n, 2));
// };
// BinarioADecimal(100);
// /*
// 16) Programa una función que devuelva el monto final después de
// aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// */
// const montoFinal = (monto, descuento = 0) => {
//   console.log(monto - (monto * descuento) / 100);
// };
// montoFinal(1000, 20);
/*
17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, pe.
 miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
// const fechas = (date) => {
//   let actual = new Date().getFullYear();
//   console.log(actual - date.getFullYear());
// };
// fechas(new Date(1984, 4, 23));

// const calcularAnios = (fecha = undefined) => {
//   if (fecha === undefined) return console.warn("no ingresaste fecha");
//   if (!(fecha instanceof Date))
//     return console.error("El valor que ingresaste no es una fecha valida");
//   let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//     aniosEnMiSeg = 1000 * 60 * 60 * 24 * 365, //expresion de segundos - minutos - horas -dia-año
//     aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMiSeg);

//   return Math.sign(aniosHumanos) === -1
//     ? console.info(
//         `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
//       )
//     : Math.sign(aniosHumanos) === 1
//     ? console.info(
//         `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
//       )
//     : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
// };
// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(1994, 7, 4));
// calcularAnios(new Date(2084, 4, 23));

/*18) Programa una función que dada una cadena de texto cuente
 el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
 devuelva Vocales: 4, Consonantes: 5.
 */
// const contar = (cad) => {
//   let vocales = 0;
//   let consonantes = 0;
//   cad
//     .toLowerCase()
//     .split(" ")
//     .join("")
//     .split("")
//     .forEach((Element) => {
//       Element === "a" ||
//       Element === "e" ||
//       Element === "i" ||
//       Element === "o" ||
//       Element === "u"
//         ? vocales++
//         : consonantes++;
//       //console.log(Element);
//       // console.log(consonantes) ;
//     });
//   return console.log(`Vocales ${vocales} Consonantes ${consonantes}`);
// };
// contar("Hola mundo");

// /*
//  19) Programa una función que valide que un texto sea un nombre válido,
//   pe. miFuncion("Jonathan MirCha") devolverá verdadero.
//   */
// const nombreValido = (nombre) => {
//   let regName = /\S$/g;
//   console.log(regName.test(nombre) ? "si" : "no");
// };
// nombreValido("de");
// /*
// 20) Programa una función que valide que un texto sea un email válido,
//  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
// // program to validate the email address

// function validateEmail(email) {
//   // regex pattern for email
//   //  const re = /\S+@\S+\.\S+/g;
//   const re =
//     /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

//   // let result = re.test(email);
//   // if (result) {
//   //   console.log("The email is valid.");
//   // } else {
//   //   console.log("email no valido ");
//   // }
//   re.test(email)
//     ? console.log("El email es valido.")
//     : console.log("Email no valido ");
// }

// validateEmail("dsd@gma.com");

/*21) Programa una función que dado un array numérico devuelve otro
 array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */
// const elevar = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("no ingresaste un arreglo de numeros");
//   if (!(arr instanceof Array))
//     return console.warn("el valor ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("el arreglo esta vacio");
//   const arr2 = [];
//   arr.forEach((Element) => {
//     arr2.push(Math.pow(Element, 2));
//   });
//   return console.log(arr2);
// };
// elevar([1, 4, 5]);
// /*
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo
// de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// */
// const maxMin = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("no ingresaste un arreglo de numeros");
//   if (!(arr instanceof Array))
//     return console.warn("el valor ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("el arreglo esta vacio");
//   let maxmin = [];
//   maxmin.push(Math.max(...arr), Math.min(...arr));
//   return console.log(maxmin);
//   // console.log(Math.max(...arr));
//   // console.log(Math.min(...arr));
// };

// maxMin([1, 4, 5, 99, -60]);
// /*
// 23) Programa una función que dado un array de números devuelva un objeto
//  con 2 arreglos en el primero almacena los números pares y en el segundo
//   los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */

// const devolverObjeto = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("no ingresaste un arreglo de numeros");
//   if (!(arr instanceof Array))
//     return console.warn("el valor ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("el arreglo esta vacio");
//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.warn("El valor no es un numero");
//   }
//   let obj = {
//     pares: [],
//     impares: [],
//   };
//   //obj.pares.push(1, 2);
//   arr.forEach((Element) => {
//     Element % 2 === 0 ? obj.pares.push(Element) : obj.impares.push(Element);
//   });
//   console.log(obj);
// };
// devolverObjeto([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*24) Programa una función que dado un arreglo de números devuelva 
un objeto con dos arreglos, el primero tendrá los numeros 
ordenados en forma ascendente y el segundo de forma descendiente,
 pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

// const ascDesc = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("no ingresaste un arreglo de numeros");
//   if (!(arr instanceof Array))
//     return console.warn("el valor ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("el arreglo esta vacio");
//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.warn("El valor no es un numero");
//   }
//   let obj = {
//     ascendente: [],
//     descendente: [],
//   };
//   let arr2 = [...arr];
//   const descArray = arr2.sort((a, b) => b - a);
//   const ascArray = arr.sort((a, b) => a - b);
//   //  const ascArray = descArray.sort((a, b) => (a > b ? -1 : 1));

//   obj.descendente.push(descArray);
//   obj.ascendente.push(ascArray);

//   //console.log(ass, descArray);
//   //console.log(ascArray);
//   console.log(obj);
// };
// ascDesc([7, 5, 7, 8, 6]);
// /*
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//  */
// const duplicados = (arr) => {
//   const ar2 = arr.filter((element, index, array) => {
//     return array.indexOf(element) === index;
//   });
//   console.log(ar2);
// };
// duplicados(["x", 10, "x", 2, "10", 10, true, true]);
// /*
// 26) Programa una función que dado un arreglo de números obtenga el promedio,
//  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */
// const promedio = (arr) => {
//   // const suma = arr.reduce((currentValue, previousValue) => {
//   //   return currentValue + previousValue;
//   // });
//   // return console.log(suma / arr.length);
//   return console.info(
//     arr.reduce((total, num, index, arr) => {
//       total += num;

//       if (index === arr.length - 1) {
//         return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
//       } else {
//         return total;
//       }
//     })
//   );
// };
// promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
 id de la película en IMDB, titulo, director, año de estreno, país 
 o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show,
 History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
 Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */
// // // // const generoValido = [
// // // //   "Action",
// // // //   "Adult",
// // // //   "Adventure",
// // // //   "Animation",
// // // //   "Biography",
// // // //   "Comedy",
// // // //   "Crime",
// // // //   "Documentary",
// // // //   "Drama",
// // // //   "Family",
// // // //   "Fantasy",
// // // //   "Film Noir",
// // // //   "Game-Show",
// // // //   "History",
// // // //   "Horror",
// // // //   "Musical",
// // // //   "Music",
// // // //   "Mystery",
// // // //   "News",
// // // //   " Reality-TV",
// // // //   "Romance",
// // // //   "Sci-Fi",
// // // //   "Short",
// // // //   "Sport",
// // // //   "Talk-Show",
// // // //   "Thriller",
// // // //   "War",
// // // //   "Western",
// // // // ];
// // // // //console.log(generoValido);
// // // // class Pelicula {
// // // //   constructor(idPelicula, titulo, director, anioEstreno, pais, genero, nota) {
// // // //     this.idPelicula = idPelicula;
// // // //     this.titulo = titulo;
// // // //     this.director = director;
// // // //     this.anioEstreno = anioEstreno;
// // // //     this.pais = pais;
// // // //     this.genero = genero;
// // // //     this.nota = nota;
// // // //     this.validarPelicula();
// // // //     this.validarTitulo();
// // // //     this.validarDirector();
// // // //     this.validarAnio();
// // // //     this.validarPais();
// // // //     this.validarGenero();
// // // //     this.validarNota();
// // // //   }
// // // //   validarPelicula() {
// // // //     //console.log(this.idPelicula);
// // // //     const re = /(^[a-z]{2}\d{7}$)/;
// // // //     re.test(this.idPelicula) ? console.log("valido") : console.log("no valido");
// // // //   }
// // // //   validarTitulo() {
// // // //     const re = /(^[a-zA-Z]{2,100}$)/;
// // // //     re.test(this.titulo)
// // // //       ? console.log("titulo valido")
// // // //       : console.log("titulo no valido");
// // // //   }
// // // //   validarDirector() {
// // // //     const re = /(^[a-zA-Z]{2,50}$)/;
// // // //     re.test(this.director)
// // // //       ? console.log("director valido")
// // // //       : console.log("director no valido");
// // // //   }
// // // //   validarAnio() {
// // // //     const re = /^\d{4}$/;
// // // //     re.test(this.anioEstreno)
// // // //       ? console.log("pais valido")
// // // //       : console.log("pais no valido");
// // // //   }
// // // //   validarPais() {
// // // //     this.pais instanceof Array
// // // //       ? console.log("es array")
// // // //       : console.log("no es array");
// // // //   }
// // // //   validarGenero() {
// // // //     this.genero instanceof Array
// // // //       ? this.EncontrarGenero()
// // // //       : console.log(" genero no es array");
// // // //   }
// // // //   EncontrarGenero() {
// // // //     let arrayGenero = this.genero;
// // // //     let num = 0;
// // // //     let noValidos = [];
// // // //     arrayGenero.forEach((e) => {
// // // //       // return console.log(
// // // //       //   generoValido.filter((Element) => {
// // // //       //     if (Element === e) {
// // // //       //       console.log("e");
// // // //       //     } else {
// // // //       //       return console.log(e);
// // // //       //     }
// // // //       //     return Element.indexOf(e) > -1;
// // // //       //   })
// // // //       // );

// // // //       // console.log(
// // // //       //   generoValido.filter((Element) => {
// // // //       //     // if (Element === e) {
// // // //       //     //   console.log("encontrado", e, Element);
// // // //       //     // }

// // // //       //     return Element.indexOf(e) > -1;
// // // //       //   })
// // // //       // );

// // // //       let filtro = generoValido.filter((Element) => {
// // // //         return Element.indexOf(e) > -1;
// // // //       });

// // // //       //console.log(filtro, e);
// // // //       //console.log(filtro.includes(e));
// // // //       if (filtro.includes(e) === true) {
// // // //         num++;
// // // //         console.log(filtro, e);
// // // //       } else {
// // // //         console.log("f", e);
// // // //         noValidos.push(e);
// // // //       }
// // // //       console.log(num);
// // // //       // filtro.forEach((e) => {
// // // //       //   arrayGenero.find((element) => {
// // // //       //     if (element === e) {
// // // //       //       console.log(e);
// // // //       //     } else {
// // // //       //       //console.log(element);
// // // //       //     }
// // // //       //   });
// // // //       // });
// // // //     });
// // // //     if (num === arrayGenero.length) {
// // // //       console.log("todos validos");
// // // //     } else {
// // // //       //console.log(arrayGenero.length);
// // // //       console.log("generos no validos: ");
// // // //       console.log(noValidos);
// // // //     }
// // // //     // console.log(arrayGenero.indexOf(generoValido));
// // // //   }

// // // //   static EncontrarGeneroStatico(n) {
// // // //     let arrayGenero = n;
// // // //     console.log(n);
// // // //     let num = 0;
// // // //     let noValidos = [];
// // // //     arrayGenero.forEach((e) => {
// // // //       let filtro = generoValido.filter((Element) => {
// // // //         return Element.indexOf(e) > -1;
// // // //       });
// // // //       if (filtro.includes(e) === true) {
// // // //         num++;
// // // //         console.log(filtro, e);
// // // //       } else {
// // // //         console.log("f", e);
// // // //         noValidos.push(e);
// // // //       }
// // // //       console.log(num);
// // // //     });
// // // //     if (num === arrayGenero.length) {
// // // //       console.log("todos validos");
// // // //     } else {
// // // //       //console.log(arrayGenero.length);
// // // //       console.log("generos no validos: ");
// // // //       console.log(noValidos);
// // // //     }
// // // //   }
// // // //   static genValido() {
// // // //     console.log(generoValido);
// // // //   }

// // // //   validarNota() {
// // // //     if (this.nota >= 0 && this.nota <= 10) {
// // // //       console.log("si funciona");
// // // //     } else {
// // // //       console.log("no funciona");
// // // //     }
// // // //   }
// // // //   imprimirFicha() {
// // // //     console.log(`id de la película en IMDB =  ${this.idPelicula}, titulo = ${this.titulo},
// // // //     director = ${this.director}, año de estreno= ${this.anioEstreno},
// // // //     país o países de origen= ${this.pais}, géneros= ${this.genero} y calificación en IMBD= ${this.nota}.`);
// // // //   }
// // // //   /*id de la película en IMDB, titulo, director, año de estreno, país
// // // //  o países de origen, géneros y calificación en IMBD. */
// // // // }

// // // // let peli = new Pelicula(
// // // //   "ss1234567",
// // // //   "tiss",
// // // //   "fasss",
// // // //   1254,
// // // //   ["ss", "pais"],
// // // //   ["Action", "War", "s"],
// // // //   9
// // // // );
// // // // peli.imprimirFicha();
// // // // Pelicula.genValido();
//Pelicula.EncontrarGeneroStatico(["Action", "Wassr", "s"]);
//console.log(peli);

//   const re=  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

//   // let result = re.test(email);
//   // if (result) {
//   //   console.log("The email is valid.");
//   // } else {
//   //   console.log("email no valido ");
//   // }
//   re.test(email)
//     ? console.log("El email es valido.")
//     : console.log("Email no valido ");

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      " Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.log(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }
  validarCadena(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string")
      return console.log(
        `${propiedad} " ${valor}" ingresado, NO es una cadena de texto`
      );
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.log(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`
      );
    return true;
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number")
      return console.log(`${propiedad} " ${valor}" ingresado, NO es un numero`);
    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor)
      return console.log(`${propiedad} "${valor}" ingresado, No es un arreglo`);
    if (!(valor instanceof Array))
      return console.log(
        `${propiedad} "${valor}" ingresados, NO es un arreglo`
      );
    if (valor.length === 0)
      return console.log(`${propiedad} "${valor}" no tiene datos`);
    for (const cadena of valor) {
      if (typeof cadena !== "string")
        return console.log(
          `El valor ${cadena} ingresado, No es una cadena de texto`
        );
    }
    return true;
  }
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.log(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas y los 7 restantes numeros `
        );
    }
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno))
        return console.log(
          `Año de estreno "${estreno}" no es valido, debe tener un numero de 4 digitos `
        );
    }
  }
  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }
  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.log(`Genero(s) incorrectos"${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.log(
            `La calificacion tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }
  fichaTecnica() {
    console.log(
      `Ficha tecnica:\n Titulo:"${this.titulo}"\n Director:"${
        this.director
      }"\n Año:"${this.estreno}"\n Pais:"${this.pais.join(
        "-"
      )}"\n Generos:"${this.generos.join(", ")}"\n Calificacion:"${
        this.calificacion
      }"\n IMDB:"${this.id}"
      `
    );
  }
}
// Pelicula.generosAceptados();
// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "titulo de la peli",
//   director: "director peli",
//   estreno: 2021,
//   pais: ["el salvador"],
//   generos: ["ddd", "dddddd", "Drama"],
//   calificacion: 7.899,
// });
//peli.fichaTecnica();
const misPelis = [
  {
    id: "tt1234567",
    titulo: "titulo de la peli",
    director: "director peli",
    estreno: 2021,
    pais: ["el salvador"],
    generos: ["Sport", "Drama"],
    calificacion: 7.899,
  },
  {
    id: "tt1234567",
    titulo: "titulo de la peli2",
    director: "director peli",
    estreno: 2021,
    pais: ["el salvador"],
    generos: ["Action", "Drama"],
    calificacion: 7.899,
  },
  {
    id: "tt1234527",
    titulo: "titulo de la pel3i",
    director: "director peli",
    estreno: 2011,
    pais: ["el salvador"],
    generos: ["Drama"],
    calificacion: 7.899,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());

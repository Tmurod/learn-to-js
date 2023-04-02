// proto and prototype

// let obj = {
//     name: "john",
//     id: 1
// }

// let obj1 = {
//     surname: "doe",
//     age: 2000
// }

// obj1.__proto__ = obj;
// console.log(obj1.name);

// bu misolda "obj" ni ichidagi hamma ma'lumot "obj1" ga nushalanmoqada va "obj1" ni ichida yuq ma'lumot "name" ham nushalanib kuchirilib utqazilmoqda "proto" kalit suzi orqali.



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.prototype.add = function (num) {
//     let res = this.push(num);
//     console.log(this);
// }
// arr.add(9);

// bu misolda "prototype" yasalib uni "arr" ga biriktirib ishlatilmoqda va bir nechta "array" lar kelsa ham huddi shu kurinishda ishlatish mumkin buladi bu huddi "call" va "apply" larga ham uhshab ketadi des ham buladi.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = [7, 8, 4, 5, 3, 1, 4];

// Array.prototype.add = function (num) {
//     let res = this.push(num);
//     console.log(this);
// }

// arr.add(9);

// arr1.add(9);
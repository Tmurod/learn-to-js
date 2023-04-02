// call, bind, apply

// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc() {
//     console.log(this.name, this.id);
// }

// myFunc.call(obj);

// ushbu misolda "myFunc" nomli "function" ni "obj" ga "call()" orqali biriktirdik va "this" kalit suzi orqali object ichidagi ma'lumotlarni olishda ishlatdik.




// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc() {
//     console.log(this.name, this.id);
// }

// myFunc.apply(obj);

// bu misolda ham huddi yuqoridagi kabi amal bajarildai faqat "call" emas "apply" dan foydalandik bularni farqi shundaki ular "parametr" qabul qilsihda farqlanadi "call" oddiy ya,ni ketma ket qabul qilsa "apply" esa [] kurinishida "parametr" qabul qiladi.

// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc(a, b) {
//     console.log(this.name, this.id, a, b);
// }

// myFunc.call(obj, 1, 2);

// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc(a, b) {
//     console.log(this.name, this.id, a, b);
// }

// myFunc.apply(obj, [1, 2]);

// bularni uzaro farqi shunda.




// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc(a, b) {
//     console.log(this.name, this.id, a, b);
// }

// let func = myFunc.bind(obj);
// func(1, 2);

// bu misolda "bind" haqida qisqacha: "bind" ham huddi yuqoridagilari singari bulib faqat bu boshqa "function" qaytaradi va boshqa "function" orqali chaqiriladi, yoki quyidagicha.




// let obj = {
//     name: "john",
//     id: 1
// }

// function myFunc(a, b) {
//     console.log(this.name, this.id, a, b);
// }

// let func = myFunc.bind(obj)(1, 2);
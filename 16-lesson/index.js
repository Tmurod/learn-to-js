// old var

// console.log(a);

// let a = 10;

// console.log(a);

// var a = 10;

// ushbu misolda "let" bilan ifodalanga "variable" bizga "cannot before initialization" ya'ni "variable" ni birinchi e'lon qilish kerak manosida hato ma'lumot chiqadi ammo "var" bilan esa bunday hato urniga "undefined" chiqadi ya'ni "const", "let" va "var" ni asosiy farqlaridan bittasi shu. "var" kup holldarda "global" kurinishga utib qoladi ularni birozdan sung kurib chiqamiz.



// var hel = 10;
// (function() {
//     var hel = "hello";
//     console.log(hel);
// }());

// console.log(hel);

// ushbu misol IIFE ga misol uni ma'nosi "immediately invoked function expression" ya'ni darhol chaqilgan funksiyadir. IIFE bizga "var" ni "scope" ni ichiga olishga yordam beradi.

// var hi = 10;
// function sayHi() {
//     var hi = "hi";
//     console.log(hi);
// }

// sayHi();

// bunda esa "var" ni "scope" dan tashqarida chaqirsa ham buladi.



// globalThis.sum = 10;

// (function() {
//     console.log(globalThis.sum);
// }());


// function glob() {
//     console.log(globalThis.sum);
// }

// glob();

// let obj = {id: globalThis.sum}
// console.log(obj["id"]);

// function glob() {
//     globalThis.num = 1;
// }
// glob()
// console.log(globalThis.num);

// ushbu misollarda "globalThis" kalit suzi keltirildi bu har qanday ma'lumot turini "global" kurinishga utqazish uchun ishlatiladi va har qanday "scope" ichidan olib chiqish uchun ham, ma'lumotni "local" "scope" ichida "global" kurinishda "e'lon" qilinsa ham "scope" dan tashqarida qullas buladi.
  


// function sayHi(str, str1) {
//     let hi = "hi";
// }
// console.log(sayHi.name);
// console.log(sayHi.length);

// ushbu misolda birinchi "console" da function nomini kurishimiz mumkin, ikkinchisida esa uning uzunligini ya'ni uning "parametr" lari nechtaligini ifodalovchi kalit suzdir.



// let myFunc = function func(str) {
//      console.log(str);
//      return func();
//     return myFunc();
// }
// myFunc("hi");
// func("hi");

// ushbu misolda "NFE" ya'ni "named function expression" keltirilgan va bunda asosan "recursion" lar bilan ishlatish qulayligi bor shu bila birga uzining "scope" idan tashqarida faqat "variable" sifatida berilgan "myFunc" ni chaqiribgina ishlatish mumkin "func" bizda hatolik kursatadi ammo "scope" ichida "myFunc" ni ham chaqirib ishlatsak bulaveradi.

// objects - 2;


// function makeUser() {
//     return {
//         name: "john",
//         ref: this
//     };
// }
// let user = makeUser();
// alert(user, ref, name);

// bu misolda "makeUser" nomli "function" ochib uni ichida "name va ref" nomli "variable" ochdik "name" ni qiymati "john" "ref" niki esa "function" ni uzi buldi va "function" ni "user" nomli "variable" ga tengladik va "console" ga "user", "ref", "name" larni chiqardik va kutilganidek "error" berdi chunki "ref" ni qiymati butun boshli "function" "name" niki esa "john"
// aniqki "object" nomisiz "name" ni qidirsak bizda "scope" dan tashqarida bunday nomli "variable" yuq


// let calc = function mul(a, b) {
//     res = a * b;
//     console.log(res);
//     return res;
// } 
// calc(3, 5);

// bu misolda "function" ochib unga 2ta parametr beramiz va "function" ichida shu "parametr" lar yordamida kupaytiruv amalini bajaramiz va "function" dan sung uni chaqirib "parametr"lariga qiymat beramiz va shu parametrlar qiymatlariga nisbatan kupaytiruv amali bajariladi


// let calc = function mul(a, b) {
//     res = a + b;
//     console.log(res);
//     return res;
// } 
// calc(100, 5);

// bu misolda yuqoridagi misolbilan bir hil faqat bu misolda kupaytiruv emas balki qushish amali bajariladi


// let calc = function mul(a, b) {
//     a > b ? console.log(a / b) : console.log(b / a);
// } 
// calc(3, 24);

// bu misolimiz ham yuqoridagilar bilan deyarli bir hil faqat bu milsolda katta sonni kichikiga bulamiz va yana bitta faqrqlaridan biri bu misolda "ternary" operatordan foydalanganmiz


// let ladder = {
//     step: 0,
//     up() {
//         this.step++
//     },
//     down() {
//         this.step--
//     },
//     showStep: function() {
//         console.log(this.step);
//     }
// }
// ladder.up().up().down().showStep().down().showStep();


// function A() {};
// function B() {};

// let a = new A();
// let b = new B();

// console.log(a == b);



   
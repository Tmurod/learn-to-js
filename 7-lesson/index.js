
// object

// const object = {};
// object.name = ["john"];
// object.surname = ["smith"];
// object.name = "pete";
// delete object.name;

// console.log(object);

// bu misolda "object" nomli bush "object" ochib unga "key(name)" va "value(john)" biriktirdik va undan sung yana huddi ish takrorlandi sungra "name(key)" ni "value(John)" sini "pete" ga uzgartirdik va ohirida biz "name" ni "object" dan uchirib tashladik


// const salaries = {
//     john: 100,
//     ann: 160,
//     pete: 130,
// }

// let num = 0;

// function check(sum) {
//     let num = 0;
//     for(let i in salaries) {
//         if (salaries[i] > num) {
//             num = salaries[i] 
//         }
//     }
//     console.log(num);
// }
// check(salaries);

// bu misolda "salaries" degan object ochib unga 3 ta "key" va mos ravishda 3 ta "value" biriktirdik va "function" yordamida "for" "statement" bilan birma bir aylanib chiqib "if" orqali "salaries[i]" larini taqqoslab kattasini "console" ga chiqardik 


// let menu = {
//     width: 200,
//     heigh: 300,
//     title: "my menu"
// }

// function multiplyNumber(num) {
//     for (value in num) {
//         if (typeof num[value] === "number") {
//             console.log(num[value] * 2);
//         }
//     }
// }
// multiplyNumber(menu);

// bu misolda "object" ni "for" "sikl" i yordamida aylanib uni "value" larini "number" ga tenglarini ajratib oldik va "if" "statement" yordamida taqqoslab "data type" lari "number" bulganlarini "console" ga 2 ga kupaytmasini chiqardik 


// const salaries = {
//     john: 100,
//     ann: 160,
//     smith: "hi",
//     pete: 130,
//     jane: 0
// }
// let res = 0;
// for (sum in salaries) {
//     if (typeof salaries[sum] === "number") {
//         res += salaries[sum];
//     }
// }
// console.log(res);

// bu misolda har doimgidek "object" va yuqoridagi misollar singari yechim ya'ni avval "object" ni "value" larini aylanib ularni "data tpye" lari "number" bulganlarini ajratib "res" degan "variable" ga bir-biriga qushib tenglab ketamiz va "res" ni "console" da chiqarsak kutilgan natijani olamiz 



// let obj = {
//     id: 1,
//     name: "webbrain"
// }
// for(key in obj) {
//     console.log(key);
// }


// let obj = {
//     id:1,
//     name: "webbrain"
// }
// for (value in obj) {
//     if (typeof obj[value] == "number") {
//         console.log(value);
//     }
// }


// let obj = {
//     id: 1,
//     name: "webbrain",
//     offline: true,
//     online: true,
//     individual: false
// }
// for (value in obj) {
//     if (typeof obj[value] == "boolean") {
//         console.log(`${value}:${obj[value]}`);
//     }
// }


// let obj = {
//     id: 1,
//     name: "webbrain",
//     offline: true,
//     online: true,
//     individual: false
// }
// for (key in obj) {
//     if (typeof key == "string") {
//         console.log(`${key}`);
//     }
// }


// console.log(sum);
    // sum = person["age"];
    // sum += person["brother"]["age"];
    // sum += person["brother"]["brother"]["age"];
// console.log(sum);





























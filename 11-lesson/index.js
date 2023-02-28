// array with methods

// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((accu, value, index) => {return accu + value}, 0);
// console.log(res);

// bu misolda "array" ichida sonlar berilgan va "reduce method" i orqali ularni jami qiymatini chiqaramiz quyidagicha "reduce" bizda 4 ta qiymat oladi birinchisi "callback function", "array"ni uzi, "array qiymatlari", uning "index"i va "boshlangich qiymat" va biz "accu" va "value" larni qushsak ichidagi hamma raqamlarni yigindisini chiqarib beradi.



// let arr = ["webbrain", "academy"];
// let getCount = (array) => {
//     let str = arr.join("");
//     let obj = {};
//     for (val of str) {
//         (val in obj) ? obj[val] = obj[val] + 1 : obj[val] = 1;
//     }
//     console.log(obj);
// }
// getCount(arr);

// bu misolda "array" ichida "string" berilgan va biz "function" ochib uni "join methid" i orqali "array" dan chiqarib olib "for" orqali ichini aylanib birma bir ochilgan bush "object" ga "push" qildik va agar "push" qilingan ma'lumot unda bulsa qiymati 1 ga oshishini belgilab quydik.



// let arr1 = ["webbrain"];
// let arr2 = ["webbrain"];
// let compArray = (array1, array2) => {
//     let arrJoin1 = array1.join();
//     let arrJoin2 = array2.join();
//     console.log(arrJoin1 === arrJoin2);
// }
// compArray(arr1, arr2);

// biz bilamizki ikkita "array" taqqoslansa har dolim "false" qaytaradi. lekin bu misolda biz "function" orqali "arraylar" ni "join method" bilan "string" kurinishiga utqizib ularni uzaro taqqoslasak bizga har doim tugri javob qaytaradi quyidagicha



const users = [
    {id: 1, year: 1998, engine: 1, name: "tico"},
    {id: 2, year: 2005, engine: 1.2, name: "matiz"},
    {id: 3, year: 2010, engine: 1.6, name: "gentra"},
    {id: 4, year: 2010, engine: 1.5, name: "cobalt"},
    {id: 5, year: 2012, engine: 2, name: "malibu"},
    {id: 6, year: 2000, engine: 1.2, name: "damas"},
    {id: 7, year: 2018, engine: 2.4, name: "tracker"}
];

// let res = users.filter( value => {
//     if (value.year < 2000) console.log(value);
// });

// ushbu misolda "array" ichida "object" lar keltirilgan va ularni ichidan turli hil ma'lumotlarni ajratib olishimiz kerak buladi ulardan bittasi 2000 - yildan kichik bulgan avtomobillarni ajratib olish bulib uni "filter method" i yordamida amalga oshirdik u bitta "parametr" oladi "value" nomli va u 2000 dan kichkina bulsa "console" ga chiqadi.


// let res = users.map( a => {
//     if (a.year > 2010) console.log(a);
// });

// bu misolda "map method" idan foydalandik va bu ham huddi tepadagi misol singari ishlaydi va fqat bizga 2010 yildan katta mashinalar ruyhatini qaytaradi.


// let res = users.sort((a, b) => a.engine - b.engine);
// console.log(res);

// bu misolda "sort method" idan foydalanib mashinalarning "engine" kuchini usish tartibida "console" ga chiqardik bunda ikkita "parametr 'a'va 'b'" larni bir biridan ayirsak javobini biz hoglagandek chiqaradi agar aksini ayirsak pasayish tartibida chiqadi.


// let res = users.sort((a, b) => a.year - b.year);
// console.log(res);

// ushbu misolda ham huddi yuqoridagi singari va faqat mashinalarni ishlab chiqarilish yilini usish tartibida "console" ga chiqadi.


// let res = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(res);

// bu misolda mashina ismlarini "alphabith" ga nisbatan tartibga solib beradi va biz bunda "localeCompare" dan foydalandik bunda harflarni katta kichikligini rad qilib uzaro taqqoslab chiqarib beradi.


// let res = users.filter(value => {
//     if (value.year <= 2000) value["status"] = "old";
//     else if (value.year <= 2010 && value.year > 2000) value["status"] = "normal";
//     else {
//         value["status"] = "new";
//     }
// });
// console.log(users);

// bu misolda "filter" yordamida mahinani yillarini saralaba 2000 dan kichiklariga "object" ga "old" undan kattalariga "normal" va 2010 dan kattalariga "new" "status" larini "dynamic" usulda qushib chiqdik
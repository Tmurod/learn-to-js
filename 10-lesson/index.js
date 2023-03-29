
// string

// const upper = (a, b) => {
//     let toUpper = a.charAt(0).toUpperCase();
//     let toSlice = a.slice(1)
//     let res = toUpper.concat(toSlice)

//     let toIndex = b.charAt(0).toUpperCase();
//     console.log(toIndex.concat(b.slice(1)));
//     console.log(res);
// }
// upper("ermat", "Ismoilov");

// bu misolda "function" ochib unga 2t "parametr" beramiz va ikkala "string" kurinishidagi "parametr" larni bosh harflarini katta harfga uzgartirib beradi. Bunda "parametr" ga kelgan ma'lumotni birinchi bitta "variable" ga tenglab olib "charAt" metodi orqali 0 chi "index" dagi "element" ni ajratib olib "toUpperCase" orqali uni katta harfga aylantiramiz.



// function truncate(str, num) {
//     console.log(str.substr(0, num));
// }
// truncate("webbrain", 6);

// ushbu misolda "function" ochib unga 2ta "parametr" beramiz 1 chisi "string" kurinishidagi ma'lumot 2 chisi esa shu ma'lumotni nechta "element" ini kesib olishini belgilovchi raqam kiritamiz va "substr" "method" i yordamida shuncha "element" kesib olinadi.



// function getCurrency(str) {
//     let num = "";
//     for (val of str) {
//         if (isNaN(val) === false) {
//             num += val;
//         }
//     }
//     console.log(+num);
//     return num;
// }
// getCurrency("$1200");

// ushbu misolda "function parametr" ga keladigon ma'lumotni faqat "number" turidagilarini ajratib chiqaradi, ya'ni "parametr" ni ichini "for" orqali aylanib "isNaN" ga tekshirib faqat raqam kurinishidagilarni bitta "variable" ochib unga qushib tenglab ketamiz.



// const obj = {};
// function getCurrency(str) {
//     let num = "";
//     let symb = ""
//     for (val of str) {
//         if (isNaN(val) === false) {
//             num += val;
//         } else {
//             symb += val;
//         }
//     }
//     obj.num = num;
//     obj.symb = symb;
// }
// getCurrency("$120tjt_0");
// console.log(`"number" ${obj.num.length} ta qatnashgan: "${obj.num}" va "string" ${obj.symb.length} ta qatnashgan: "${obj.symb}"`);

// ushbu misolimiz ham huddi oldingisiga uhshab ketadi bitta farqi bu misolda saralngan ma'lumotlar "object" ga biriktiriladi va "type" lari "number" va "string" ga teng bulganlarini saralab olamiz.



// let getUpper = (str) => {
//     let upper = "";
//     let lower = "";
//     for (i of str) {
//        i === i.toUpperCase() ? upper += i : lower += i;
//     }
//     console.log(upper);
//     console.log(lower);
// }
// getUpper("Webbrain");

// bu misolda agar "function parametr" ga qandaydir katta harfli ma'lumot лelsa ushani ajratib olish yechimi keltirilgan ya'ni "loop" orqali aylanib "toUpperCase" Methodi orqali har birini taqqoslab ajratib olamiz va bitta "variable" ga tenglab quyamiz.
// setInterval setTimeout

// let hi = "hi";

// setTimeout(() => {
//     console.log(hi);
// }, 1000);

// bu misol "setTimeout" haqida bunda tayyor funksiya bulganligi sababli 3 ta "parametr" oladi
// 1 - function, 2 - vaqt, 3 - bajariladigan ish ya'ni uning ichidagi "function" qachonki berilgan vaqt uz yakuniga yetkandagina yuradi va bir marotaba yuradi.



// setInterval(() => {
//     console.log("hello");
// }, 1000);

// bu misolda esa "setInterval" ham huddi yuqoridagis singari "parametr" larga ega bulib faqat bu berilgan vaqt ichida qayta va qayta yuraveradi.



// console.log("a");

// setInterval(() => {
//     console.log("b");
// }, 2000);

// setInterval(() => {
//     console.log("c");
// }, 1000);

// console.log("d");

// biz bilamiz JS "single thread" ya'ni bir vaqtning uzida faqat bitta amal bajara oladi shu sababli ham "console" da 1 - a , 2 - d , 3 - c, 4 - b chiqadi chunki bu "function" lar "async" bulmagani sababli birin ketin chiqa boshlaydi hattoki 0 secund intervalda ham oddiy "console" birinchi bulib ishlaydi.



// let time = setTimeout(() => {
//     console.log("hi");
// }, 1000);

// clearTimeout(time);

// let inter = setInterval(() => {
//     console.log("hello");
// }, 1000);

// clearInterval(inter);

// ikkala "method" ni tohtatish uchun "clearTimeout", "clearInterval" lardan foydalaniladi va faqatgina ularni "variable" ga biriktirgan holdagina ishlatib buladi va "clear" qilgandan sung hotirada joy egallamaydi agar "mrthod" larni "clear" qilib tohtatmasak va uz ishini bir marotaba bulsa bajarsa ham hotirada saqlanib turaveradi va ma'lum miqdorda "project" ni biroz bulsa ham sekinlashishiga sabab bulishi mumkin buladi, "clear" esa hotiradan uchirib tashlaydi qachonki uz ishini bajarib bulgandan sung.
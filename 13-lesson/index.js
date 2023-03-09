// let data = new Date();

// console.log(data.getDate());   "getDate()" bizga oyning nechanchi kuni ekanligini kursatadi
// console.log(data.getDay());    "getDay()" bizga haftaning nechanchi kuni ekanligini kursatadi
// console.log(data.getFullYear());   "getFullYear()" joriy yilni kursatadi
// console.log(data.getHours());   "getHours()" ayni damdagi soatni kursatadi
// console.log(data.getMilliseconds());   "getMilliseconds()" milisonoyalarni kursatadi
// console.log(data.getMinutes());   "getMinutes()" ayni damdagi daqiqani kursatadi
// console.log(data.getMonth());       "getMonth()" ayni damdagi oyni kursatadi
// console.log(data.getSeconds());      "getSeconds()" ayni damdagi soniyani ifodalaydi
// console.log(data.getTime());         "getTime()" 1970 yildan hozirgi paytgacha bulgan soniyalarni kursatadi

// bizga kerak buladigan asosiy "getter" ma'lumotlar shulardan iborat va bundan tashqari "setter" ma'lumotlar ham bor albatta ular esa bizga vaqtlarni ya'ni "ma'lumotlarni" uzimiz belgilashimizga imkon yaratadi masalan "setDate()", "setHour()" kabilardir.



// let form = "LT";
// let form = "LTS";
// let form = "L";
// let form = "l";
// let form = "LL";
// let form = "ll"; 
// let form = "LLL";
// let form = "lll"; 
// let form = "LLLL"; 
// let form = "llll"; 

// bu yerda biz vaqt "format"larini kurishimiz mumkin va har bir format takrorlanmas bulib har biri alohida sana va vaqt birliklarini ifodalaydi



// let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// bu yerda esa "array" ichida "oy"larni kurishimiz mumkin nima uchun "array" ichida chunki chunki "array" da biz ma'lumotlarni index raqami buyicha olib ishlatishimiz mumkin bulganligi sababli bizga qulaylik keltirib chiqatadi.



// let week = ["monday", "thuesday", "wendsday", "thursday", "friday", "saturday", "sunday"];

// bu yerda ham huddi yuqoridagi singari "array" dan foydalanib hafta kunlarini ajratib olganmiz.



// let moment = () => {
//     let data = new Date();
//     return {
//         format(time) {
//             if (time === 'LT') {
//                 console.log(`${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "LTS") {
//                 setInterval(() => {
//                     let d = new Date();
//                     console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
//                 }, 1000);
//             }
//             else if (time === "L") {
//                 console.log(`${data.getDate() < 10 ? 0 : ""}${data.getDate()}/${data.getMonth() < 10 ? 0 : ""}${data.getMonth() + 1}/${data.getFullYear()}`);
//             } else if (time === "l") {
//                 console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
//             } else if (time === "LL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()}`);
//             } else if (time === "ll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()}`);
//             } else if (time === "LLL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "lll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "LLLL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()}, ${week[data.getDay() - 1]} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "llll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()}, ${week[data.getDay() - 1].slice(0, 3)} ${data.getHours()}:${data.getMinutes()}`);
//             }
//         }
//     }
// }

// moment().format(form);

// bu yerda "function" dan foydalanib uni ichida bitta "object" ochib va "if" statementidan foydalanib har bir kelishi mumkin bulgan "format" ni taqqoslab mos keladiganini "console" ga chiqardik. Qanday yul bilan misol uchun "L" keladigan bulsa "ternary" operator bilan agar "data" 10 dan kichik bulsa oldiga 0 qushilsin aksincha bulsa hech nima qushilmasin deb buyruq berib utdik va `` orqali hamma keladigan ma'lumotlarni "dynamic" kurinishda chiqardik. shuningdek "llll" keladigan bulsa masalan "month" ni indexiga mos keladigan "oy" tartib raqamini ajratib olib uni "slice" qilib negaki ma'lumot turi bizga "string" sifatida kelganligi sabab uni kesib ishlatishimiz mumkin buladi.
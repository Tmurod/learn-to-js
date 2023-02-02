
// loops => for loop

// for (let i = 10; i > 0; i--) {
//     for (var x = 0; x <= 10; x++) {
//         if (i) {
//             console.log(`${i} x ${x} = ${i * x}`);
//         }
//     }
// }

// bu misolda "for loop" ichida yana bitta "for" keltirilgan va birinchi "for" yurganida "nested" "for" uziga berilgan qiymat berilguncha aylanadi va tashqaridagi "loop" ishga tushadi ya'ni birinchi "loop" bir marta yurishi "nested" "loop" ni 10 marta yurisihiga teng buladi va 10 marta 10 martdan jami 100 marta ishga tushadi. bu misolda "console" da "increment" misolida karra jadvali chiqadi ya'ni 10 dan 1 ga qarab

// for (let i = 0; i < 10; i++) {
//     for (let x = 0; x <= 10; x++) if(i) console.log(`${i} x ${x} = ${i * x}`);
// }

// bu misolda ham huddi yuqoridagi singari "code" "run" buladi faqat javobi "decrement" kurinishida "console" ga chiqadi ya'ni 1 dan 10 ga qarab 



// switch case loop

// let sum = 400;

// switch(sum) {
//     case 100 :
//         console.log("yuz");
//         break;
//     case 200 :
//         console.log("ikki yuz");
//         break;
//     case 300: 
//         console.log("uch yuz");
//         break;
//     default :
//         console.log("bunday raqam yuq");    
// }

// bu misolda bitta "variable" ochilyapti va unga qiymat berilib shu qiymat "switch loop" da tekshiriladi. "switch" kalit suzini e'lon qilib unga "sum" ni "parametr" qilib biriktiriladi va "switch" shu parametrga mos bulgan javobni qidirishga tushadi va biz "case" kalit suziga tekshirilishi kerak bulgan qiymatni beramiz va "case" dagi qiymat "switch" ni parametriga mos kelsagina "case" dan keyingi amal bajariladi. Undan sung "break" kalit suzi orqali qolgan amallarni bajarilishiga yul quyilmaydi. shundan sung ohirida "default" kalit suzi orqail agar "case" larga tugri kelmaydigan qiymat berilsa ishlaydigan "code" yoziladi.

// let num = 7;
// let prime = true;

// if(num == 1) {
//     console.log("no");
// } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime) {
//         console.log(`${num} is a prime`);
//     } else {
//         console.log(`${num} is not a prime`);
//     }
// }

// let num = 8;
// let text = `${num} is prime number`;
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         text = `${num} is not prime number`
//     }
// }
// console.log(text);

// bu misolda bitta "variable" ochib unga qiymat biriktiryapmiz va yana bitta "variable" ochib unga "dynamic" qiymat beryapmiz bizga console ga aniqroq javob qaytarishi uchun 
// "for loop" ochib qiymatlar berib uni ichida "if" "statamentidan" dan foydalanib shartimizni yozib javobini "text" ga tenglab quyyapmiz;
  
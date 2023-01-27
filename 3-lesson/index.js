// prefix and postfix

// let a = 1, b = 1;
// bu yerda bitta variable ochilib ikkita value biriktirilyapti
// console.log(a, b);
// console.log(a);
// console.log(b);

// let c = ++a;
// bu yerda "c" ni qiymati 1 lekin "++" bu belgi har doim qiymatni bittaga oshiradi shuning uchun ohirgi javob 2 bulib qoladi
// console.log(c);

// let d = b++;
// bu yerda "d" ni qiymati "b" ga yani 1ga tenglanyapti va bittaga ortyapti qiymati lekin javobi 1 chiqadi chunki "consolda" birinchi "a" kuringanini hisobiga qiymat 1 ga oshgani bizga keyingi "consol" ni "run" qilsak kurinadi
// console.log(d);



// assigment result

// let a = 2;
// let x = 1 + (a *= 2)
// bu misolda "a" ning qiymati 2 ga teng "x" niki esa 1 ga va "x" ga "a" ni 2ga kupaytirilganini yigindisi qushilmoqda shuningdek huddi "matematika" da bulgani kabi birinchi qavs ichidagi amal bajariladi
// console.log(x);



// type conversion

// console.log("" + 1 + 0); 
// javobi 10 chiqadi chunki birinchi "operand" bizda "string" data type ga mansub shuning uchun js birinchi kurgan data type buyicha qolgan "operand" larni ham "string" sifatida qabul qiladi

// console.log("" - 1 + 0);
// bu yerda javobi -1 chunki "" bush "string" dan 1 ni ayirvotti va  0 qoshyapti ya'ni 0 - 1 = -1 va -1 + 0

// console.log(true + false);
// bu yerda "true" = 1 ga "false" esa 0 ga shunda 1 + 0 = 1;

// console.log("2" * "3");
// javob 6 "string" ichidagi raqamlar hisobga olinadi va "number" sifatida ishlaydi

// console.log(4 + 5 + "px");
// javobi 9px birinchi amal odatdagidek bajarilib 9 javobi olinadi va 9 ga "px" qushiladi ya'ni "concatnation" xossasi yuz berib 9px javobi olinadi

// console.log("$" + 4 + 5);
// huddi bir necha yuqorida aytganimdek js birinchi qaysi data type ni kursa qolganini ham huddi shu data type deb qabul qiladi va javobi "$45" chiqadi 4 va 5 ni ham "string" hisobida "concat" qilib yuboradi

// console.log("4" - 2);
// javob 2 oddiy arifmetika 4 - 2 = 2 agar "string" ichida raqam buladigan bulsa + "operatoridan" boshqalari tugri ishlaydi "+" "concat" hossasiga aylanib ketadi kup hollarda

// console.log("4px" - 2);
// NaN raqam bulmagan sondan raqamni ayirib bulmaydi ya'ni ismdan yoshni ayirib bulmaydi "String" - "Number" = "NaN"

// console.log(" - 9 " + 5);
// -95 "string" ga + 5 qushilib qovotti matematik amal emas "concat"

// console.log(" - 9 " - 5);
// NaN 9 "string" va bush joydan 5 ayirilmaydi agar bush joy bulmaganida -14 chiqar edi ya'ni raqamdan raqam ayirilar edi hozir esa "string" dan "Number" ayirilmoqda

// console.log(null + 1);
// 0 + 1 = 1 oddiy arifmetika ;)

// console.log(undefined + 1);
// NaN yuq narsa ga 1 ni qushib bulmaydi / yuq gazni yoqib bulmaydi ;)

// console.log(" \n \t " - 2);
// "\n" va "\t" bular "string" ichida ishlatiladigan object "methodlar"i adasmasam shuning uchun ular ma'no anglatmaydi va javob -2



// comparisions

// console.log(5 < 4);
// javobi "false" chunki 5 4 dan katta kichkina emas va taqqoslash amallari har doim "boolean" javob qaytaradi

// console.log("apple" > "pineapple");
// "false" chunki 2 ta "noodatiy js"

// console.log("2" > "12");
// true chunki 2 ta "noodatiy js"

// console.log(undefined == null);
// "true" chunki ikkisini ham qiymati yuq hisob

// console.log(undefined === null);
// "false" chunki data type lari har hil

// console.log(null == "\n0\n");
// "null" "BigInt" ga teng emas

// console.log(null === +"n\0n");
// "false" data type lari mos kelmaydi va har xil



// if else

// if ("0") {
//     console.log("hello");
// }
// bu yerda "null" "undefined" "Nan" dan tahqari boshqa data typelari kelsa "hello" har doim ishlayveradi deyarli. "if" kalit suziga agar qandaydir amal bajjarilishi kerak bulsa va uni javobi "true" buladigan bulsa {} ichidagi code bajariladi "false" qaytsa bajarilmaydi

// let a = 1;
// let b = 2;
// let res;
// if (a + b < 4) {
//     res = "below";
// } else {
//     res = "over"
// }
// console.log(res);

// bu yerda javob "below" chiqadi chunki 3 kichkina 4 dan va if ichidagi code run buladi agar aksi bulsa ya'ni "4 kichkina bulsa 3 dan" unda "over" chiqadi consolda



// ternary

// let a = 1;
// let b = 2;
// let res;

// a + b < 4 ? console.log(res = "below") : console.log(res = "over");

// "ternary" operatorda ham huddi "if else" kabi javob chiqadi ya'ni "a" va "b" yigindisi kichkina bulsa 4 dan ":" dan oldingi console ishlaydi agar "a + b > 4" bulsa ":" dan keyingi console ishga tushadi


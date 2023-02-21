
// numbers methods

// function getBynary(num) {
//     let bynar = num.toString(2);
//     let one = "";
//     let zero = "";
//     for (vl in bynar) {
//         switch(bynar[vl]) {
//             case "1":
//             one += "1";
//             break;
//             case "0":
//             zero += "0";
//         }
//     }
//     console.log(bynar);
//     console.log(`1 dan ${one.length} ta qatnashgan: ${one}`);
//     console.log(`0 dan ${zero.length} ta qatnashgan: ${zero}`);
// }
// getBynary(60);

// bu misolda "toString" "method" idan foydalanib "function parametr" ga kelayotgan raqamni "binar" kurinishga utqizyapmiz va uni ichini "for" "statamenidan" foydalanib aylanib chiqib "1" va "0" ga teng bulganlarini bush "variable" ga joylab va undan sung ularni sonini nechtaligini chiqaryapmiz.



// function minMax(num1, num2) {
//     num1 > num2 ? console.log(num1 - num2) : console.log(num2 - num1);
// }
// minMax(60, 61);

// bu misolda "function parametr" ga istalgan son beramiz va qaysi son katta bulsa shunda uzidan kichigini ayirib javobini chiqarib beradi. Bu misolda "optimal" yechim sifatida "ternary operator" dan foydalandik.



// Math.round - har doim bizga kelayotgan raqamni yaxlitlab beradi ya'ni 3.5 ni 4 , 3.4 = 3 qilib qaytaradi "manfiy" sonlarda ham birdek ishlaydi.

// Math.floor - har doim bizga butun qismini qaytaradi ya'ni 3.9 bulsa ham 3.1 bulsa ham 3 qaytaradi hattoki manfiy sonlarda ham maslan -3.9 bulsa yoki -3.1 bulsa ham -4 qaytaradi

// Math.ceil - "floor" ning aksi bulib u faqat "tepaga" qarab yaxlitlaydi 3.1 bulsa ham bizga 4 qaytaradi 3.9 bulsa ham "manfiy" bulsa masalan -3.1 bulsa bizga -3 qaytaradi

// Math.trunc - qolganlarga uhshab yaxlitlab utirmaydi shunchaki kasr qismini "ignor" qilib yuboradi hoh u "musbat" son bulsin hoh "manfiy"

// parseInt ham huddi "trunc" singari ishlaydi



// function randomInteger(min, max) {
//     let plus = Math.floor(Math.random() * max);
//     let minus = Math.floor(Math.random() * min);
//     if (plus >= min) {
//         console.log(plus);
//     } else if (minus <= min) {
//         console.log(min + Math.floor(Math.random() * 5));
//     } else {
//         console.log(min);
//     }
// }
// randomInteger(100, 110);

// bu misolda "function parametr" ga kelayotgan raqamlarni "random" kurinishga utqazdik va birinchi "parametr" "boshlanish" nuqtasi ikkinchi "parametr" esa "tugallanish" nuqtasi hisoblanib ya'ni "min" bilan "max" ni orasida bulgan ihtiyoriy "tasodifiy" raqamni kursatadi bir biriga taqqoslagan holda. 
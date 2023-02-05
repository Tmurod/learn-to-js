
// function


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAge(19));

// bu misolda bitta "function" ochib ichiga "if" statamentidan foydalanib taqqoslash amalini bajarib 18 dan katta bulsa ruhsat kichik bulsa ruhsat yuq degan singori amal bajariladi va "function" chaqirilib uning "parametr" iga qiymat beriladi va shu qiymatni "function" ichidagi "if" tekshiradi
 

// function checkMax(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// console.log(checkMax(0.5, 0.1));

// bu misolda ham "function" ochib unga 2ta "parametr" beriladi va shu parametrlarga qiymat berib chaqiriladi shundan sung qiymatlarni "function" ichidagi amallarga uzatiladi va bizning misolda bu taqqoslash amali bajariladi


// function checkPow(a, b) {
//   console.log(Math.pow(a, b));
// }
// checkPow(2, 4);

// function checkPow(a, b) {
//     let num = 1;
//     for (let i = 0; i < b; i++) {
//         num = num * a
//     }
//     console.log(num);
// }
// checkPow(2, 6);

// quyidagi misolda "function" ga yana 2ta "parametr" berilib uni vhaqirib qiymat beryapmiz va "function" ni ichida amal bajaryapmiz bitta "variable" ochib uni qiymatini 1ga tenglab "for loop" dan foydalanib darajasini chiqaryapmiz ya'ni agar "i" kichkina bulsa "parametr(b)" dan "i" shuncha marta oshsin va har oshganda qiymati "num" ga tenglashsin va birinchi "parametr(a)" ga kupaysin, demak "b" har safar 1 ga oshganda "a" ni kupaytmasi "num" ga teng bulib qoladi 


// ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }
// ask("do you agree", 
// () => {alert("you agreed")}, 
// () => {alert("you cenceled the executen")}
// );

// bu misolda "js" ning "prompt" "method" idan foydalanib kichik surov utqizildi unga kura "ask" degan "function" ochilib unga 3 ta "parametr" berildi ular yuqorida keltirilgan va ulardan birini "confirm" "method" idan foydalanib "if" ni "condition" iga quyib chaqirilyapti va "ask function" iga "alert input method" idan foydalanib ma'lumot olib "function" da "filter" qilinib ekranga chiqarilyapti 
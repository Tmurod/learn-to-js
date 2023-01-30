
// if else

// let jsName = "ecmascript";
// "jsName" degan variable ochilyapti va unga "value" biriktirilyapti

// if (jsName == "ecmascript") {
//     console.log("ok, you know");
    // "if" ni ichiga shart yozilyapti va u tekshirilyapti agarda "value" sharttga tugri keladigan bulsa {} ichidagi code ishlaydi
// } else if (jsName == "Ecmascript") {
//     console.log("right");
    // "if else" ni ichiga shart yozilyapti va u tekshirilyapti agarda "value" sharttga tugri keladigan bulsa {} ichidagi code ishlaydi
// } else if (jsName == "ECMASCRIPT") {
//     console.log("great");
    // "if else" ni ichiga shart yozilyapti va u tekshirilyapti agarda "value" sharttga tugri keladigan bulsa {} ichidagi code ishlaydi
// } else {
//     console.log("you dont know? Ecmascript!");
// }
// agarda yuqoridagilarni birontasi shartlarga tugri kelamsa unda "else" ishlaydi va {} ichidagi code yuradi


// let num = -0.1;

// if (num > 0) {
//     console.log(`${num}, grater than 0`);
// } else if (num < 0) {
//     console.log(`${num}, less than 0`);
// }else {
//     console.log(`${num}, equals to ${num}`)
// }

// quyidagi misolda "num" ga qandaydir qiymat berilsa u usha berilgan qiymatni "0" dan katta yoki kichikligini tekshirib consolga chiqaradi, "if" ni ichida shart berilgan va shu shart buyicha js tekshiradi va {} ichidagi code ni yurgizadi va bu misloda "ES6" "features" laridan biri "back tig" dan foydalanildi
  

// let login = "5151"
// let message;

// if (login == "Employee") {
//     message = "Hello"
// } else if (login == "Director") {
//     message = "Greetings"
// } else if (login == '') {
//     message = "No Login"
// } else {
//     message = "";
// }
// console.log(message);

// bu misolda ham huddi tepadagi singari agar "login" teng bulsa "Employee" ga unda "Hello" borib biriksin "message" ga ya'ni "message" ni qiymati bulib biriksin va huddi shu singari qolgan shartlar ham ishlaydi


// ternary operator 

// "ternary" operator ham huddi if else kabi ishlaydi va unga nisbatan qisqaroq buladi shuningdek "ternary" asosan bitta line ga sigadigan qisqa taqqoslashlarga ishlatiladi "if else" kabi ishlatsa ham buladi yuqoridagi singari ammo bu bizda "readybility" ni qiyinlashtiradi va bir muncha qiyinchilikka sabab buladi


// login == "Employee" ? console.log(message = "Hello") : 
// login == "Director" ? console.log(message = "Greetings") :
// login == '' ? console.log(message = "") : console.log(message = "no result");

// bu taqqoslashda huddi "if else" da bulgani kabi login "Employee" ga teng bulsa "Hello" "message" ga "value" bulib birikadi va aksincha login boshqa qiymatlarni keltirib utsak usha qiymatlar birikadi agarda yuqorda keltirilgan qiymatlar berilmasa bush "string" consolda chiqadi
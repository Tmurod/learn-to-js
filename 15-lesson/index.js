// recursion

// function myFunc() {
//     myFunc()
// }

// "recursion function" bu oddiy 'function' bulib faqat bitta "function" ichida uzini uzi qayta ishlatishga aytiladi desa buladi masalan:

// let res = 0;

// function myFunc(n) {
//     if (n === 1) return res += 1;
//     else return res += n + myFunc(n - 1);
// }

// myFunc(5);

// console.log(res);

// ushbu misolda "myFunc" ga berilgan qiymat 1 ga teng bulmasa "res" ga qiymatni qushib tenglanadi agar 1 dan katta buladigan bulsa "res" ga "n" ni "myFunc" dan "n" dan 1 ni ayirilganiga tenglanadi, ya'ni bunda 5 soni 1 dan katta va birinchi shartni qoniqtirmaydi va kengi shartga utadi bu yerda esa 5 dan 1 ni ayirib "res" ga qushib tenglab quyadi va bu ish to "n" 1 ga teng bulmaguncha davom etadi. 



// let obj = {
//     age: 20,
//     id: 1,
//     child: {
//         age: 21,
//         id: 2,
//         child: {
//             age: 22,
//             id: 3,
//         }
//     }
// }

// let res = 0;

// function calcChild(sum) {
//     res += sum["age"];
//     for (val in sum) {
//         if (typeof sum[val] === "object") {
//             calcChild(sum[val])
//         }
//     }
// }

// calcChild(obj);
// console.log(res);

// ushbu misolda ham huddi yuqoridagi singari amal qullanilgan faqat "object" misolida va uni ichidagi "age" lar yigindisini topish kerak bular edi. Bunda "res" 0 ga teng bulib 'age' larni qiymatini yigib boriladi, "object" ichini "for" yordamida aylanib uni "valuelari" "Object" ga teng bulganini ichida yana shu "function" ni qayta yurgaziladi.



// let res = 0;

// function fact(n) {
//     if (n === 1) return res += 1;
//     else return res += n * fact(n - 1);
// }

// fact(5);
// console.log(res);

// let sum = 0;
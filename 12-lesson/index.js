// crud

// 1 - misol:

// let getUpper = (str) => {
//   let upper = "";
//   let lower = "";
//   for (i of str) {
//      (i === i.toUpperCase()) ? upper += i : lower += i;
//   }
//   console.log(upper, lower);
// }
// getUpper("WebBrain");



// 2 - misol:

// let getSymb =(str) => {
//   let arr = str.split("")
//   arr.map((val, ind) => {
//     if (val === "@") {
//       arr[ind] = "a";
//     }
//   });
//   let join = arr.join("");
//   console.log(join);
// }
// getSymb("erm@m@m@t");



// 3 - misol:

// let getDubl = (str) => {
//     let toArr = str.split("");
//     let res = toArr.map((val, ind) => {
//         if (val === toArr[ind + 1]) {
//             delete toArr[ind];
//         }
//     });
//     let arr = [];
//     for (i of toArr) {
//         if (typeof i !== "undefined") {
//             arr.push(i);
//         }
//     }
//     console.log(arr.join(""));
// }
// getDubl("wwwwebbraiinnnnnnnn acccaaddeemy");



// 4 - misol:

// let getSymb = (str) => {
//     let text = "";
//     for (i of str) {
//         if (!isNaN(i)) {
//             text += i;
//         }
//     }
//     console.log(text);
// }
// getSymb("erm16mat");



// 5 - misol:

// let getDubl = (str) => {
//     let toArr = str.split("");
//     let arr = [];
//     let res = toArr.map((val, ind) => {
//         arr.push(val + val)
//     });
//     console.log(arr.join(""));
// }

// getDubl("webbrain");



// 6 - misol:

// let getPall = (str) => {
//     let splitStr = str.split("");
//     let joinStr = splitStr.reverse("").join("");
//     joinStr === str ? console.log(`${str} "pallindrom so'z"`) : console.log(`${str} "pallindrom so'z" emas`);
// }
// getPall("ukku");



// 7 - misol:

// let str1 = "web";
// let str2 = "ewb";



// 8 - misol:

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



// 9 - misol:


// 10 - misol:

// let obj = {title: "webbrain", age:2};
// console.log(Object.keys(obj));



// 11 - misol:

// let object = {
//     title: "webbrain",
//     age: 2,
//     child: {
//         age: 4,
//         name: "webbrain",
//         child: {
//             age: 3
//         }
//     }
// }
// let sum = 0;
// let getChild = (obj) => {
//     sum += obj["age"];
//     for (i in obj) {
//         if (typeof obj[i] === "object") {
//             getChild(obj[i]);
//         }
//     }
// }
// getChild(object);
// console.log(sum);



// 12 - misol:

// let obj = {
//     id: 1,
//     name: "webbrain",
//     offline: true,
//     online: true,
//     individual: false
// }
// for (value in obj) {
//     if (typeof obj[value] == "boolean") {
//         console.log(`${value}:${obj[value]}`);
//     }
// }



// 13 - misol

// let num = [1, 2, 2, 5, 5, 6, 7, 2, 1, 8];



// 14 - misol:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let compArray = (array1, array2) => {
//     let arrJoin1 = array1.join();
//     let arrJoin2 = array2.join();
//     console.log(arrJoin1 === arrJoin2);
// }
// compArray(arr1, arr2);



// 15 - misol:

// let num = [1, 64 ,8, 27, 64, 125];
// let getSum =(arr) => {
//   arr.filter((val, ind) => {
//     if (val > 10 && val < 100) console.log(val);
//   })
// }
// getSum(num);
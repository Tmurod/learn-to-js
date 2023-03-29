// new Map, new Set


// let map = new Map();
// map.set("a", 1);
// console.log(map);
// console.log(map.get(a));
// console.log(Object.fromEntries(map));


// new Map bizga "constructor Object" qaytaradi desak ham buladi chunki unga biror bir ma'lumot "push" qilsak "console" ga "object" kurinishida ma'lumot chiqadi uni bir nechta "method" lari bor ulardan biri "set" bu orqali biz "map" ga ma'lumot "push" qilamiz va "get" "method" i ham bor bu yul bilan biz "object" ichida shunday ma'lumot bor yuqligini tekshiramiz va bunda bizga faqat borini javob qaytadi va sungra "clear" orqali biz ichidagi barcha "ma'lumotlarni" uchirish imkoniga ega bulamiz, va albatta "delete" ham bor bunda esa qaysidir ma'lumot kerak bulmay qolsa ushani uzini uchirishimiz mumkin buladi.


// let a = [1,2,32];
// let set = new Set();
// set.add(a);
// console.log(set.has(1));

// new Set ham bizga "array" kurinishida ma'lumot qaytaradi va new set ham huddi map ga qanday "method" lar qullagan bulsak bunda ham huddi shularni ishlatsak buladi. Va bundan tashqari "ForEach" ni ham qullasak buladi, bu ikki ma'lumot turi nimasi bilan qiziqki bularga ikkita bir hil ma'lumot qushib bulmaydi.



// let nMap = new WeakMap();

// let nSet = new WeakSet();

// bu ikki object oddiy "map va set" dan farqi "gurbage collection" ga utqazib yuboradi ma'lumotlarni qachonki "object" ga "access" qilishni imkoni yuq bulib qolganda, "map va set" esa hotirada har doim joy egallab turadi bu ikkisiga nisbatan "weakset va weakmap" esa aksincha . shuningdek bu ikkala uhshash objectlarni "method" lari ham bir hil.


// let wset = new WeakSet();
// wset.add([1])
// console.log(wset);
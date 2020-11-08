// 17 Функции

// Function Declaration - объявление функции (объявляется в основном потоке кода)
// взаимодействие возможно в любой момент
//function greet(name) {
//console.log("Првиет - ", name);
//}
// Function Expression - вложенное функциональное выражение (объявляется как вложенная часть, например, внутри переменной)
// взаимодейстиве возможно только после инициализации родителя
//const greet2 = function greet2(name) {
//console.log("Првиет2 - ", name);
//};
//greet("Лена!");
//greet2("Петя!");
//function greet(name) {
//console.log("Првиет - ", name);
//}
//const greet2 = function greet2(name) {
//  console.log("Првиет2 - ", name);
//};
//console.log(typeof greet);
//console.dir(greet)

// 18 Анонимные фукции

//let counter = 0;
//const interval = setInterval(function () {
//if (counter === 5) {
//clearInterval(interval); //clearTimeout
//} else {
//console.log(++counter);
//}
//}, 1000);

// 19 Стрелочные функции

//function greet(name) {
//console.log("Првиет - ", name);
//}
//const arrow = (name) => {
//console.log("Првиет - ", name);
//};
//arrow("Nikita");
//const arrow2 = (name) => //console.log("Привет - ", name);
//arrow2("Nikita");
//const pow2 = (num) => {
//return num ** 2;
//};
//console.log(pow2(5));
//const pow3 = (num) => num ** 2;
//console.log(pow3(5));

// 20 Параметры по умолчанию

//const sum = (a = 40, b = a * 2) => a + b;
//console.log(sum());

//function sumAll(...all) {
//let result = 0;
//for (let num of all) {
//result += num;
//}
//return result;
//}

//const res = sumAll(1, 2, 3, 4, 5, 6, 7);
//console.log(res);

//21 Замыкания

//function createMember(name) {
//return function (lastName) {
//console.log(name + lastName);
//};
//}

//const logWithLastName = createMember("Nikita");
//console.log(logWithLastName(" Yakuschenko"));
//console.log(logWithLastName(" Petrov"));

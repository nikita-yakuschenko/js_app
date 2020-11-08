// 1 Переменные

//const firstName = 'Nikita' // string
//const age = 30 // number
//const isProgrammer = true //boolean

// 2 Мутирование

//console.log('Имя: ' + firstName + ' Фамилия: ' + lastName + ' Возраст: ' + age + ' лет')
//console.log('Имя: ' + firstName + ' Фамилия: ' + lastName + ' Возраст: ' + age + ' лет')
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

// 4 Операторы

//console.log(age)
//let currentYear = 2020
//const birthYear = 1990
//const age = currentYear - birthYear
//const a = 10
//const b = 5
//let c = 32
//c = a + c
//c +=a
//c -=a
//c /=a
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear)
//console.log(++currentYear)
//console.log(c)

//const isProgrammer = true
//const name = 'Nikita'
//const age = 30
//let x
//null

//console.log (typeof isProgrammer)
//console.log (typeof name)
//console.log (typeof age)
//console.log (typeof x)
//console.log (null)

// 5 Приоритет операторов

//const fullAge = 30
//const birthYear = 1990
//const currentYear = 2020

//const isFullAge = currentYear - birthYear >= fullAge
//console.log (isFullAge)

// 6 Условные операторы

//const courseStatus = "ready"; // ready, fail, pending

//if (courseStatus === "ready") {
//console.log("Курс уже готов и его можно проходить");
//} else if (courseStatus === "pending") {
//console.log("Курс пока находится в процессе разработки");
//} else {
//console.log("Курс не получился");
//}

//const num1 = 42 // number
//const num2 = '42' // string
//console.log (num1 == num2)

//const isReady = true;

//if (isReady) {
//console.log("Всё готово");
//} else {
//console.log("Всё не готово");
//}
//Тернарное выражение
//isReady ? console.log("Всё готово!") : console.log("Всё не готово");

// Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

//function calculateAge(year) {
//return 2020 - year;
//}

//console.log(calculateAge(1990));
//console.log(calculateAge(2000));
//console.log(calculateAge(2010));
//console.log(calculateAge(2020));

//function logInfoAbout(name, year) {
//const age = calculateAge(year);
//if (age > 0) {
//console.log("Человеку по имени " + name + " сейчас " + age + " лет");
//} else {
//console.log("Вообще-то надо подождать, пока он родится!");
//}
//}

//logInfoAbout("Никита", 1990);
//logInfoAbout("Елена", 1995);
//logInfoAbout("Елена", 2022);

// 9 Массивы

//const cars = ["Mazda", "Mercedes", "Ford", "Lada", "BMW", ""];

//const cars = new Array("Mazda", "Mercedes", "Ford", "Lada", "BMW");

//console.log(cars.length);
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);
//console.log(cars[3]);
//console.log(cars[4]);
//console.log(cars[5]);

//cars[0] = "Porsche";
//cars[5] = "Mazda";

//console.log(cars.length);
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);
//console.log(cars[3]);
//console.log(cars[4]);
//console.log(cars[5]);

// 10 Циклы

//const cars = ["Mazda", "Mercedes", "Ford", "Porsche", "BMW", "Lada"];

//for (let i = 0; i < cars.length; i++) {
//const car = cars[i];
//console.log(car);
//}

//for (let car of cars) {
//console.log(car);
//}

// 11 Объекты

//const person = {
//firstName: "Nikita",
//lastName: "Yakuschenko",
//yearBirth: 1990,
//languages: ["Russian", "English"],
//married: false,
//greet: function () {
//console.log("greet from person");
//},
//};

//console.log(person.firstName);
//console.log(person["lastName"]);
//const key = "year";
//console.log("married - " + person.married);
//person.greet();

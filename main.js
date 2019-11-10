//Home Tasks
/*
1.Запросите у пользователя его имя 
  и выведите в ответ: «Привет, его имя!».

2.Запросите у пользователя год его рождения,
  посчитайте, сколько ему лет и выведите результат. 
  Текущий год укажите в коде как константу.

3.Запросите у пользователя длину стороны квадрата 
  и выведите периметр такого квадрата.

4.Запросите у пользователя радиус окружности 
  и выведите площадь такой окружности.

5.Запросите у пользователя расстояние в км между двумя 
  городами и за сколько часов он хочет добраться. 
  Посчитайте скорость, с которой необходимо двигаться, 
  чтобы успеть вовремя.

6.Реализуйте конвертор валют. Пользователь вводит доллары, 
  программа переводит в евро. Курс валюты храните в константе.

7.Пользователь указывает объем флешки в Гб. 
  Программа должна посчитать, сколько файлов размером в 
  820 Мб помещается на флешку.

8.Пользователь вводит сумму денег в кошельке 
  и цену одной шоколадки. 
  Программа выводит, сколько шоколадок может 
  купить пользователь, и сколько сдачи у него останется.

9.Запросите у пользователя трехзначное число и 
  выведите его задом наперед. 
  Для решения задачи вам понадобится оператор % (остаток от деления).

10.Пользователь вводит сумму вклада в банк на 2 месяца, 
   с процентной ставкой депозита 5% годовых. 
   Вывести сумму начисленных процентов.
*/
//Task1
/*
const name = prompt('Enter your  name');
alert(`Hello ${name}`);
*/

//Task2
/*
const birthYear = prompt('Enter your birth year', 1900);
const currYear  = 2019;
alert(`You ${currYear - birthYear} years old`);
*/

//Task3
/*
const squareSide = prompt('Enter a length of square side',0);
alert(`Area of square with a ${squareSide} side length is ${squareSide * squareSide}`);
*/

//Task4
/*
const circleRadius = prompt('Enter circle radius to calulate its area',1);
alert(`circle area with ${circleRadius} radius is ${Math.PI * circleRadius *circleRadius}`);
*/

//Task5
/*
const distance = prompt('Enter distance between cities', 1);
const time = prompt('Enter the required travel time in hours');
alert(`Your speed in current conditions must be ${distance / time}`);
*/

//Task6
/*
const uahPerUsd = 26;
const uahPerEur = 30;
const cash  = prompt('Enter the amount of money in UAH', 0);
alert(`${cash}uah it's ${cash / uahPerEur}eur aand ${cash / uahPerUsd} usd`);
*/

//Task7
/*
const flashDriveSize = prompt('Enter size of flash drive in Gb', 1);
alert(`Flash drive with ${flashDriveSize} size can contain ${flashDriveSize*1024 / 820} 820Mb files`);
*/

//Task8
/*
const cash = prompt('Enter the current value of your pocket money',0);
const price = prompt('Enter price for the stuff');
alert(`For ${cash} you can buy ${Math.floor(cash % price)} counts of stuff and ${cash - price * (cash % price)} is your 0dd money`);
*/

//Task9
/*
const num = prompt('Enter a three digit number', 123);
let temp = num % 10;
let resultNum = temp * 100;
console.log(temp);
console.log(resultNum);
let temp2 = (num - temp) % 100;
console.log(temp2);
resultNum += temp2;
console.log(resultNum);
temp += temp2;
temp2 = num - temp;
console.log(temp2);
temp2 /= 100;
console.log(temp2);
resultNum += temp2;
alert(`The inverted number is ${resultNum}`);
*/
//Task10
/*
const sum = +prompt('Enter depisit sum', 0);
const depositIncrease = 0.05;
const depositTerm = 2;
const percentForMonth = depositIncrease / 12;

let sumIncrease = 0;
if (isNaN(sum) || sum < 0){
  alert('Error');
  console.error('Error');
} else {
  let result = percentForMonth * depositTerm * sum;
  alert(`Your sum increase for two month is ${result}`);
}
*/
//Lesson's Tasks
// Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.

// Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

// Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

// Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.



//Task 1
//const n=prompt("Enter a number",0);
//console.log(`Num in second degree is ${n*n}`);


//Task2
//const n1 = prompt("Enter a number",0);
//const n2 = prompt("Enter a number",0);
//console.log(`Average of two numbers is ${(+n1 + +n2) / 2}`);

//Task3
//const n=prompt("Enter a number",0);
//console.log(`Num in second degree is ${n*n}`);

//Task4
//const kilometers = prompt('Enter number of kilommeters',0);
//const milePerKilometr = 0.621371;
//console.log(`Miles per ${kilometers} kilometers is ${milePerKilometr * kilometers}`);

//Task6
//const a = prompt('Enter first number of a*x + b = 0 Mathematical equation',0);
//const b = prompt('Enter second number of a*x + b = 0 Mathematical equation',0);
//console.log(`Unknown value is ${-b/a}`);

//Task7
//const hours = prompt('Enter current number of hours',0);
//const minutes = prompt('Enter current number of minutes',0);
//const temp = 1440 - (hours*60);
//console.log(temp);
//const temp1 = temp-minutes;
//console.log(temp1);
//const minutesLeft = temp1%60;
//const hoursLeft = (temp1 - minutesLeft)/60;
//alert(`It's ${hoursLeft} hours and ${minutesLeft} minutes left to the next day`);

//Task8
//const num1 = prompt('Enter first number',0);
//const num2 = prompt('Enter second number',0);

//alert(`Sum of two numbers            ${num1 + num2}.
//       Difference of two numbers     ${num1 - num2}.
//       Multiplication of two numbers ${num1 * num2}.
//       Division of two numbers       ${num1 / num2}`);


//Task9
//const num = prompt('Enter enter a three digit number',0);
//let temp = num % 100;
//temp1 = temp % 10;
//num1 =num - temp1;
//num1 %= 100;
//num1 /= 5;
//num1 /= 2;
//console.log(`The second digit of ${num} is ${num1}`);

//Task10
/*
const num = prompt('Enter 5 digit number', 0);
let temp = num % 10;
let temp1 = num % 100 - temp;
let temp2 = temp + temp1;
let temp3 = num - temp2;
let num2 = 10000*temp;
temp = temp1/10;
num2 += temp*1000;
temp2 = temp3 % 1000;
num2 += temp2;
temp3 -= temp2;
temp = temp3%10000;
num2 += temp/100;
temp3 -= temp;
temp3 /= 10000;
num2 += temp3;
console.log (`inverse number of ${num} is ${num2}`);
*/
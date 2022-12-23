//Мінімум

// 1.Напиши всі можливі варіанти створення функцій.

// 1) Function Declaration
function myFunction (parametr1, parametr2,...parametr3) {
    //тіло функції
    console.log ('')
}

myFunction;

// 2) Function Exspression 
let myFunc = function (parametr1, parametr2,...parametr3) {
    //тіло функції
    console.log ('')
}

myFunc;

// 3) Arrow Function =>
myFunc = () => {
    //тіло функції
    console.log ('')
}

myFunc;


// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let argument1 = +prompt ('Введіть аргумент!');
let argument2 = +prompt ('Введіть аргумент!');
let argument3 = +prompt ('Введіть аргумент!');

function countArgument () {
    return arguments.length;
}

console.log(countArgument (argument1,argument2,argument3,10,30,));
// (5 аргументів, 3 ведених і 2 добавлених)


// 3. Напиши функцію, яка приймає 2 числа і повертає :
//    -1, якщо перше число менше, ніж друге; 
//     1 - якщо перше число більше, ніж друге; 
//     0 - якщо числа рівні.

let numberOne = +prompt('Введіть перше число!');
let numberTwo = +prompt('Введіть друге число!');

function comparison (numberOne, numberTwo) {
    if (numberOne && numberTwo) {
        if (numberOne < numberTwo) {
            return -1;
        }
        if (numberOne > numberTwo) {
            return 1;
        }
        if (numberOne === numberTwo) {
            return 0;
        }
    } else return 'невірні вхідні дані';
}

alert(comparison(numberOne,numberTwo));


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

let number = +prompt('Enter a number!');

function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1;
}
  
alert( factorial(number));


// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function concatNumbers(a, b, c) {
    return +(''+a+b+c);
}

const c = concatNumbers(1, 2, 3);

console.log(c);

// let firstNumber = +prompt('Введіть перше число');
// let secondNumber = +prompt('Введіть друге число');
// let thirdNumber = +prompt('Введіть третє число');

// function concatNumbers (firstNumber, secondNumber, thirdNumber) {
//     return +('' +firstNumber + secondNumber + thirdNumber);
// }

// console.log(comparison(firstNumber,secondNumber,thirdNumber));




//  5. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, 
//     то вона обчислює площу квадрата.

let a = +prompt('Введіть довжину');
let b = +prompt('Введіть шируну');

function area(a, b = null) {
    if (b === null) {
        return `Площа квадрата = ${a**2}`;
    } else {
        return `Площа прямокутника = ${a*b}`;
    }
}

alert (`Площа квадрата = ${a**2}`);
alert (`Площа прямокутника = ${a*b}`)
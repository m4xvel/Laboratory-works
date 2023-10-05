class Calculator{
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    addition() {
        return this.value1 + this.value2;
    }
    subtraction() {
        return this.value1 - this.value2;
    }
    multiplication() {
        return this.value1 * this.value2;
    }
    division() {
        if(this.value2 != 0) {
            return this.value1 / this.value2;
        } else {
            return 0;
        }
    }
}

var value1 = parseFloat(prompt("Введите первое число:"));
var value2 = parseFloat(prompt("Введите второе число:"));

var objectArray = [
    new Calculator(value1, value2), 
    new Calculator(10, 5), 
    new Calculator(20, 20)
];

document.writeln("Сумма чисел равна: " + objectArray[0].addition() + "<br>");
document.writeln("Разность чисел равна: " + objectArray[0].subtraction() + "<br>");
document.writeln("Произведение чисел равно: " + objectArray[0].multiplication() + "<br>");
document.writeln("Деление чисел равно: " + objectArray[0].division() + "<br>");
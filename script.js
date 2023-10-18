function Object(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}

function createObject() {
    var people = [
        new Object("Максим", 19),
        new Object("Анатолий", 18),
        new Object("Дмитрий", 19)
    ];

    var car = [
        new Object("Dodge Challenger", 1970),
        new Object("Toyota Mark II", 2004),
        new Object("Chevrolet Camaro", 1969)
    ];

    var book = [
        new Object("О дивный новый мир", 1932),
        new Object("Сильмариллион", 1977),
        new Object("Триумфальная арка", 1945)
    ];

    return [
        people,
        car,
        book
    ]
}

var array = new createObject();

var brCount = 0;

for (var i = 0; i < array.length; i++) {
    var currentArray = array[i];
    for (var j = 0; j < currentArray.length; j++) {
        var arrayObject = currentArray[j];
        if (i === 0) {
            document.writeln(`Имя: ${arrayObject.param1}, возраст: ${arrayObject.param2} <br><br>`);
        } else if (i === 1) {
            document.writeln(`Название машины: "${arrayObject.param1}", дата выпуска: ${arrayObject.param2} <br><br>`);
        } else if (i === 2) {
            document.writeln(`Название книги: "${arrayObject.param1}", дата выхода: ${arrayObject.param2} <br><br>`);
        }
        brCount++;
        if (brCount === 3) {
            document.writeln("<br>");
            brCount = 0;
        }
    }
}



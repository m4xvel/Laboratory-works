class Animal {

    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        return `Такое-то животное говорит`;
    };

    eat() {
        return `Такое-то животное ест`;
    };

    sleep() {
        return `Такое-то животное спит`;
    };
}

class Dog extends Animal {
    constructor(food, name, location, breed) {
        super(food, location);
        this.name = name;
        this.breed = breed;
    }
    makeNoise() {
        return `${this.name} говорит`;
    };

    eat() {
        return `${this.name} ест ${this.food}`;
    };

    sleep() {
        return `${this.name} спит`;
    };
}

class Cat extends Animal {
    constructor(food, name, location, breed) {
        super(food, location);
        this.name = name;
        this.breed = breed;
    }
    makeNoise() {
        return `${this.name} говорит`;
    };

    eat() {
        return `${this.name} ест ${this.food}`;
    };

    sleep() {
        return `${this.name} спит`;
    };
}

class Horse extends Animal {
    constructor(food, name, location, breed) {
        super(food, location);
        this.name = name;
        this.breed = breed;
    }
    makeNoise() {
        return `${this.name} говорит`;
    };

    eat() {
        return `${this.name} ест ${this.food}`;
    };

    sleep() {
        return `${this.name} спит`;
    };
}

class Vet extends Animal {
    constructor(food, name, location) {
        super(food, location);
        this.name = name
    }
    treatAnimal() {
        return `${this.name} ест ${this.food} и живёт ${this.location}`;
    }
}

var animal = new Animal();
var dog = new Dog("ветчину", "Пёс", "", "Золтистый ретривер");
var cat = new Cat("сосиску", "Кот", "", "Сиамский");
var horse = new Horse("траву", "Лошадь", "", "Шайр");
var vet = new Vet("рыбу", "Кот", "коробке")

document.writeln(dog.makeNoise() + "<br>" + cat.eat() + "<br>" + horse.sleep() + "<br>");
document.write("<br>" + vet.treatAnimal());
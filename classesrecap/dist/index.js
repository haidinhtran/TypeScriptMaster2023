"use strict";
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.life = 10;
    }
    secretMethod() {
        console.log('SECRET METHOD!');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score can't be negative");
        }
        this._score = newScore;
    }
}
class ReferencePlayer extends Player {
    constructor() {
        super(...arguments);
        this.isReference = true;
    }
    maxScore() {
        // score is accessible via protected from parent class
        this._score = 9999;
    }
}
const arise = new Player("Solo", "Leveling", 10);
arise.life = 99;
arise.score = 111;
console.log(arise);
class Bike {
    constructor(color) {
        this.color = color;
    }
    ;
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    ;
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
    ;
}
const newBike = new Bike("red");
const newJacket = new Jacket("Gucci", "black");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    ;
    greet() {
        console.log("Hello!");
    }
}
;
class FulltimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    ;
    getPay() {
        return this.salary;
    }
}
;
class ParttimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
;
const newEmploy = new FulltimeEmployee("Hai", "Tran", 50000000);
console.log(newEmploy.getPay());
const newEmploy2 = new ParttimeEmployee("Hai 2", "Tran 2", 200, 300000);
console.log(newEmploy2.getPay());

class Player {

    public life: number = 10;

    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) {}

    private secretMethod(): void {
        console.log('SECRET METHOD!');
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error("Score can't be negative");
        }
        this._score = newScore;
    }
    
}

class ReferencePlayer extends Player {
    public isReference: boolean = true;
    maxScore() {
        // score is accessible via protected from parent class
        this._score = 9999;
    }
}

const arise = new Player("Solo", "Leveling", 10);
arise.life = 99;
arise.score = 111;
console.log(arise);

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {};
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {};
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    };
}

const newBike = new Bike("red");
const newJacket = new Jacket("Gucci", "black");

abstract class Employee {
    constructor(
        public first: string,
        public last: string
    ) {};

    abstract getPay(): number;

    greet() {
        console.log("Hello!");
    }
};

class FulltimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private salary: number
    ) {
        super(first, last);
    };

    getPay(): number {
        return this.salary;
    }
};

class ParttimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
};

const newEmploy = new FulltimeEmployee("Hai", "Tran", 50000000);
console.log(newEmploy.getPay());
const newEmploy2 = new ParttimeEmployee("Hai 2", "Tran 2", 200, 300000)
console.log(newEmploy2.getPay());

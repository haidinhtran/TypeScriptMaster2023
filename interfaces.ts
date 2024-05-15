// type Point = {
//     x: number,
//     y: number,
//     z?: number
// }

// const newLocation: Point = {x: 1, y: 2};

interface Point {
    x: number,
    y: number,
}

const newLocation: Point = {x: 1, y:2};

interface Person1 {
    readonly id: number,
    first: string,
    last: string,
    middle?: string,
    // sayHi: () => string,
    sayHi(): string,
}

const newPerson: Person = 
{ 
    id: 1, 
    first: 'Hai', 
    last: 'Tran', 
    sayHi: () => {return "Hello!";}
};

newPerson.middle = 'Dinh';

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        return this.price * (1-amount)
    }
}

console.log(shoes.applyDiscount(.4));

interface Dog {
    name: string,
    age: number,
}

interface Dog {
    breed: string,
    bark(): string,
};

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return 'Woh Woh!';
    }
};

interface ServiceDog extends Dog {
    job: "Drug Sniffer" | "Bomb" | "Guide Dog"
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 4.5,
    breed: 'German',
    bark() { return 'Woof Woof!'},
    job: 'Bomb'
}

interface Person {
    name: string,
}

interface Employee {
    readonly id: number,
    email: string,
}

interface Engineer extends Person,Employee {
    level: number,
    language: string[]
}

const Hai: Engineer = {
    name: 'Hai',
    id: 1,
    email: 'haidinhtran@gmail.com',
    level: 1,
    language: ['Vietnamese', 'English']
}

type Color = "red" | "blue";
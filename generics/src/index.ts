// function doThing(thing: number | string): number | string {
//     //do thing
//     return '';
// }
// // const nums: number[] = [];
// // using generic to define a variable type
// const nums: Array<number> = [];
// const colors: Array<string> = ["white", "black"];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "Hacked!";

// const btnEL = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// function identify(item:any):any {
//     return item;
// }

interface Cat {
    name: string;
    breed: string;
}

function identity<Type>(item: Type): Type {
    return item;
}

identity<number>(27);
identity<string>("Hello");
identity<Cat>({name: "Kitty", breed: "Ecrypt"});

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["A","B", "C","D"]));
console.log(getRandomElement([1,2,3,4,5,6,7]));

// [4,5,6,7];
// [true, false, true, true, false];
// [{}, {}, {}]

function merge<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
    
}

// merrgeObj is any type now is type generic
const mergedObj = merge({name: "Hai"}, {pets: ["Cat", "Dog"]});
console.log(mergedObj);
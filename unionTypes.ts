let age: number | string | boolean = 21;
age = 23;
age = "24";
age = false;



type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.123, long: 23.312 };

function printAge(age: number | string): void {
    console.log(`YOu are ${age} years old`);
}

printAge(23);
printAge("23");

function calculateTax(price: number | string, tax: number): number {
    if(typeof price === "string") {
        price = parseFloat(price.replace("$",""));
    }
    return price * tax;
}

console.log(calculateTax(45, 12));

console.log(calculateTax("$45", 12));

const stuff: (number | string)[] = [1,2,3,4, "2"];
// const stuff2: number[] | string[] = [1,2,3,4, "2"];

const coords: (Point | Loc)[] = [];
coords.push({lat: 323.23, long: 23.13});
coords.push({x: 13, y: 21});

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

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
    
}

// merrgeObj is any type now is type generic
const mergedObj = merge({name: "Hai"}, {pets: ["Cat", "Dog"]});
console.log(merge({name: "Hai"}, {num: 9}));
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
}
console.log(printDoubleLength({length: 123}));


// default value type

function makeEmptyArray<T = number>(): T[] {
    return []
}

const numbs = makeEmptyArray();
const boos = makeEmptyArray<boolean>();

interface Song {
    title: string;
    artist: String;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public songs: Song[] = [];
}

class Playlist<T> {
    public queue: T[] = [];
    add(el:T) {
        this.queue.push(el);
    }
}

const mySongs = new Playlist<Song>();
mySongs.add({title: "A", artist: "B"});

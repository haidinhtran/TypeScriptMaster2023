"use strict";
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
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(27);
identity("Hello");
identity({ name: "Kitty", breed: "Ecrypt" });
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["A", "B", "C", "D"]));
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7]));
// [4,5,6,7];
// [true, false, true, true, false];
// [{}, {}, {}]
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// merrgeObj is any type now is type generic
const mergedObj = merge({ name: "Hai" }, { pets: ["Cat", "Dog"] });
console.log(merge({ name: "Hai" }, { num: 9 }));
console.log(mergedObj);
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength({ length: 123 }));
// default value type
function makeEmptyArray() {
    return [];
}
const numbs = makeEmptyArray();
const boos = makeEmptyArray();
class VideoPlaylist {
    constructor() {
        this.videos = [];
    }
}
class SongPlaylist {
    constructor() {
        this.songs = [];
    }
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const mySongs = new Playlist();
mySongs.add({ title: "A", artist: "B" });

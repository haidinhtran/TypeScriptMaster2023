"use strict";
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
// 3 ->> 9
// "hi" ->> "hihihi"
console.log(triple('hai'));
console.log(triple(1));
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log('You did not pass in a word!');
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
        console.log(x);
    }
}
someDemo("4a", "4a");
function getRuntime(media) {
    if ("episodeNo" in media) {
        return media.episodeDuration * media.episodeNo;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "99", episodeDuration: 30, episodeNo: 4 }));
// instanceof
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if ("username" in entity) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("Pig"):
            return "Oink!";
        case ("Cow"):
            return "Moo!";
        case ("Rooster"):
            return "Chicken!";
        case ("Sheep"):
            return "Baaa!";
        default:
            // We should never make it here, if we handle all cases correctly
            const _exhautedCheck = animal;
            return _exhautedCheck;
    }
}
const stevie = {
    name: "Steve Chicks",
    age: 2,
    weight: 2,
    kind: "Rooster"
};
console.log(getFarmAnimalSound(stevie));

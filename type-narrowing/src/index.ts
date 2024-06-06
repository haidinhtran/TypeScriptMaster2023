function triple(value: number | string) {
    if(typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}

// 3 ->> 9
// "hi" ->> "hihihi"

console.log(triple('hai'));
console.log(triple(1));

const el = document.getElementById("idk");
if(el) {
    el
} else {
    el
}

const printLetters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log('You did not pass in a word!');
    }
}

function someDemo(x:string|number, y:string|boolean) {
    if(x===y) {
        x.toUpperCase();
        console.log(x);
    }
}

someDemo("4a","4a");

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    episodeNo: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
    if("episodeNo" in media) {
        return media.episodeDuration * media.episodeNo;
    }
    return media.duration;
}

console.log(getRuntime({title: "Amadeus", duration: 140}));
console.log(getRuntime({title: "99", episodeDuration: 30, episodeNo: 4}));

// instanceof

function printFullDate(date: Date | string) {
    if(date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if("username" in entity) {
        entity
    } else {
        entity
    }
}
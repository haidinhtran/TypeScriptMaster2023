"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.life = 10;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('SECRET METHOD!');
    }
}
const arise = new Player("Solo", "Leveling");
// arise.score = 23;
arise.life = 99;
console.log(arise);
arise.secretMethod();

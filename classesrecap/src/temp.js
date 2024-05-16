class Player {
    static description = "Player in our game";
    #score = 0; // not accessible for outside class
    numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // this.score = 0;
        // this.numLives = 10;
    }

    static randomPlayer() {
        return new Player("Andy", "Samberg");
    }

    get score() {
        return this.#score;
    }

    set score(newScore) {
        if(newScore < 0) {
            throw new Error("Score must be positive!");
        }
        this.#score = newScore;
    }

    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }
    getScore() {
        return this.#score;
    }
    updateScore(newscore) {
        this.#score = newscore;
    }
    taunt() {
        console.log("BOOYAH!!!");
    }
    loseLife() {
        this.numLives -=1;
    }
    #secret() {
        console.log("SECRET!!!");
    }
}

const player1 = new Player("Blue", "Kya");
// player1.taunt();
// player1.loseLife();

// console.log(player1.getScore);
// console.log(player1.updateScore(123));
// console.log(player1.score);
// player1.score = 999;
// console.log(player1.score);
// console.log(player1);

// console.log(player1.fullName);
// player1.fullName = "Hai Tran";
// console.log(player1);

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}

const admin = new AdminPlayer("Hai", "Tran", ["Delete", "Create"]);
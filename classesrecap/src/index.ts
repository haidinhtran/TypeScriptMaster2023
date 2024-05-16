class Player {

    public readonly first: string;
    public readonly last: string;
    private score: number = 0;
    public life: number = 10;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    secretMethod(): void {
        console.log('SECRET METHOD!');
    }
    
}

const arise = new Player("Solo", "Leveling");
// arise.score = 23;
arise.life = 99;
console.log(arise);
arise.secretMethod();
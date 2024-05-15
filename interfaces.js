// type Point = {
//     x: number,
//     y: number,
//     z?: number
// }
var newLocation = { x: 1, y: 2 };
var newPerson = {
    id: 1,
    first: 'Hai',
    last: 'Tran',
    sayHi: function () { return "Hello!"; }
};
newPerson.middle = 'Dinh';
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        return this.price * (1 - amount);
    }
};
console.log(shoes.applyDiscount(.4));

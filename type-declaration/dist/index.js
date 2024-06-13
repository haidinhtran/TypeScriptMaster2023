"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.sample([12, 14, 14, "a", true, false, 19, "b"]));
// const url = "http://jsonplaceholder.typicode.com/users/1";
// axios
// .get<User>(url)
// .then(res=> {
//     console.log("WORKED!");
//     console.log(res.data);
//     printUser(res.data);
// })
// .catch((e)=> {
//     console.log("ERROR!", e);
// });
// function printUser(user:User) {
//     console.log(user.email);
// }
const url = "http://jsonplaceholder.typicode.com/users";
axios_1.default
    .get(url)
    .then(res => {
    console.log("WORKED!");
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.email);
}

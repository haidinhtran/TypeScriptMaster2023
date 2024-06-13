import axios from "axios";
import _ from "lodash";

console.log(_.sample([12,14,14,"a", true, false, 19, "b"]));

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPharase: string,
        bs: string
    }
}

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

axios
.get<User[]>(url)
.then(res=> {
    console.log("WORKED!");
    res.data.forEach(printUser);
    
})
.catch((e)=> {
    console.log("ERROR!", e);
});

function printUser(user:User) {
    console.log(user.email);
}
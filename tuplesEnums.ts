// const stuff3: (string|number)[] = ["abc", "def", 123]

// const color: number[] = [23, 24, 255, 0 ,12]

const color: [number, number, number] = [255,0,255];


type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// goodRes[0] = "200";

// ??? STRANGE LIMITATION
goodRes.push(123);
goodRes.pop();

// [200, "OK"]
// [404, "Not Found"]

const responses: HTTPResponse[] = [[404, "NotFound"], [200, "OK"]];

// const PENDING = 0;
// const SHIPPED = 1;
// const DELIVERIED = 2;

// if(status === DELIVERIED) {
//     doSomething();
// }

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERIED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

if move === ArrowKeys.LEFT;
import { generateId, PI, User } from "./utils.models";
import { User as Person } from "./utils.models";

// import * as Utils from "./utils.models";

const myNumber = 10 * PI;

// const myUser: User = { id: "1", name: "Kevin"};

// const myUser: User = { id: generateId().toString(), name: "Kevin"};


const myUser: Person = { id: generateId().toString(), name: "Kevin"};

console.log({
    myNumber,
    myUser,
});

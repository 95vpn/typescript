"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_models_1 = require("./utils.models");
// import * as Utils from "./utils.models";
var myNumber = 10 * utils_models_1.PI;
// const myUser: User = { id: "1", name: "Kevin"};
// const myUser: User = { id: generateId().toString(), name: "Kevin"};
var myUser = { id: (0, utils_models_1.generateId)().toString(), name: "Kevin" };
console.log({
    myNumber: myNumber,
    myUser: myUser,
});

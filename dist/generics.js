// const age: number = 13;
/*
interface MyInterface<T>
{
    field: T;
}

interface Exaple
{
    id: string;
    name: string;
}
*/
/*
const myValue: MyInterface<string> =
{
    field:"",
}
    */
/*
const myValue: MyInterface<Example>
{
    field:
    {
        
    },
}
    */
/*
class MyClass<T>
{
    field: T;

    constructor (field: T)
    {
        this.field = field;
    }
}
    */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Kevin",
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 3);
console.log(res);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Kevin" },
    { id: 1, name: "Kevin" },
    { id: 1, name: "Kevin" },
];
var userCrud = new CRUD(users);
userCrud.addItem({ id: 4, name: "Typescript" });
console.log(userCrud.printItems());

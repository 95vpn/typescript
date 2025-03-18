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

// const myObject: MyClass<number> = new MyClass()
/*
function getData<T>(ID: string): Promise<T> | void
{

}
*/
// getData('Hola');
//Example with classes
interface UserResponse
{
    id: number;
    name: string;
}

class HttpResponse<T>
{
    data: T;
    status: number;
    code: number;

    constructor(data: T, status: number, code: number)
    {
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = (): UserResponse => 
{
    return {
        id: 1,
        name: "Kevin",
    };
}

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 3);
console.log(res);

class CRUD<T> {
    private items: T[];
    constructor(items: T[]){
        this.items = items;       
    }

    addItem(item: T){
        this.items.push(item);
    }
    removeLastItem()
    {
        this.items.pop();
    }

    printItems(): T[]
    {
        return this.items;
    }
}

const users: UserResponse[] = [
    { id: 1, name: "Kevin"},
    { id: 1, name: "Kevin"},
    { id: 1, name: "Kevin"},
];

const userCrud: CRUD<UserResponse> = new CRUD(users);

userCrud.addItem({id: 4, name: "Typescript"});

console.log(userCrud.printItems());
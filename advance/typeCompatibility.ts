/*
interface Pet {
    name: string;
}

class Dog {
    name: string;
}

let pet: Pet;

//ok because of structural typing
pet = new Dog();
*/

/*
interface Pet{
    name: string;
}

let pet: Pet;

let dog = {name: "lasie", owner: "rudd weatherwax"};
pet = dog;
console.log(pet);
*/

/*
interface Pet{
    name: string;
}

let pet: Pet;

let dog = {name: "lasie", owner: "rudd weatherwax"};
function great(pet: Pet) {
    console.log("Hello " + pet.name);
}

great(dog);
*/

/*
enum Status {
    Ready,
    Waiting,
}

enum Color {
    Red,
    Blue,
    Green,
}

let stat = Status.Ready;
stat = Color.Green; //Error
*/

/*
class Animal {
    feat: number;
    constructor(name: string, numFast: number) {}
}

class Size {
    feat: number;
    constructor:(numFeat: number) {}
}

let a: Animal;
let s: Size;
a = s; //ok
s = a; //ok
*/

interface Empty<T>{}
let x: Empty<number>;
let y: Empty<string>;
x = y; //Ok, because y matches structure of x


interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
x = y; // Error, Because x and y are not compatible
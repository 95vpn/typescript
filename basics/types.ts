let age: string = '20';
let months: number = 20;
let isSenior: boolean = true;
// let person: Object = {};

//representar arrays
let fruits: string[] = ["manzana", "pera"];
//array de objects
let fruits1: Object[] = [{}, {name: "manzana"}];

let response: any = "Hola";
response = 20;
response = true;
response = ["Hola", 123];

function saludar(): void {
    console.log("hola");
}

let response2: unknown;
response2 = true;
if(response2)
{

}

let response3 = null;
let response4 = undefined;


type ResponseTypeService = string | undefined;
let response5: ResponseTypeService;
response5?.toString();

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;
responsePartners?.toString().concat("");

//Type Assertion
let message: any = "";
//(message as string).concat();
//let messageUppercase = (message as string).toUpperCase();
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById("canvas"); 
const canvas1 = document.getElementById("canvas") as HTMLCanvasElement; 

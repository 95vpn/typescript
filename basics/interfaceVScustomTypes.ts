interface Person 
{
    name: string;
    age: number;
}

interface Employes extends Person
{
    charge: string;
}

const newEmployes: Employes =
{
    name: "",
    age: 40,
    charge: "",
};

//union types

type User =
{
    id: string;
}

type Admin = User & { token: string };
const myAdmin: Admin =
{
    id: "3",
    token: "dfgdf",
}

type Admin1 = User & Employes;
type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "Admin" | "superUser" | 0;

interface Developer
{
    name:string;
    stack: string[];
}

interface Developer
{
    phone: string;
}

const me: Developer = 
{
    name: "sasfdf",
    phone:"fgd",
    stack: ["sdfsdf", "dsfsdf"],
};
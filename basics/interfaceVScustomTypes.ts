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
class Animal
{
    public name: "Generic animal";
    private age = 10;
    protected identity = "111";

    constructor()
    {

    }
    sayHi()
    {
        console.log("Grr", this.age);
    }
}

class Dog extends Animal
{
    type: "Pastor Aleman";
    constructor()
    {
        super();
    }
    
    sayHi()
    {
        this.identity;
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();

const sayHi = (name) => 
{
    console.log(`Hola ${name}} `);
};

sayHi("estudiantes de codigo facilito");

function sayGoodBy(name)
{
    console.log(`Adios ${name}, casi terminamois el curso`);
}

sayGoodBy("Estudiantes");

/*
function show(): number
{
    // console.log("hola");
    return 1;
}
const response = show();
*/
interface ResponseServiceCD
{
    id: number,
    name: string,
    charge: string,
    number: number,
}

const response: ResponseServiceCD =
{
    id: 1,
    name: 'Kevin',
    charge: "developer",
    number: 4
}
/*
function show(response: {id; name; charge; number}): number
{
    // console.log("hola");
    return 1;
}
*/
function show({ name, ...other }: ResponseServiceCD): number
{
    console.log(`El id mandado es: ${name}`);
    console.log("Otros datos: ", other);
    // savePerson(name, ...other);
    return 1;
}

show(response);
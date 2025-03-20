//Partial
interface Task {
    id?: number;
    name?: string;
    description?: string;
}

function updateTask(id: string, task: Partial<Task>) {
    //
    console.log();
}

const newTask = { name: "Kevin" };

updateTask("1", newTask);
/*
//Required
interface ToDo {
    id?: number;
    name?: string;
}

const myTodo: Required<ToDo> = {};
*/

//records <keys, types> para la creacion de objetos
interface CatInfo {
    age: number;
    name: string;
}

type CatName = "moi" | "baris" | "luffy" | "Purpi";

const cats: Record<CatName, CatInfo> = {
    moi: {age: 2, name: ""},
    baris: {age: 2, name: ""},
    luffy: {age: 2, name: ""},
    Purpi:{age: 2, name: ""},
}

//Pick <T, Propertis>

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const otherTodo: TodoPreview = {title: "clean room", completed: false};

//Omit<T, Properties>
type TodoOmitted = Omit<Todo, "description">;

// const todoOmitted: TodoOmitted = {};

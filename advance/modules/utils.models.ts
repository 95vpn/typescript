export const PI = 3.14;

export interface User
{
    id: string;
    name: string;
}

export const generateId = () => 
{
    return Math.floor(Math.random() * 100);
}
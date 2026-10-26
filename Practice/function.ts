export{}

//Normal function
function add(a: number, b: number): number{
    return a+b;
}

//Arrown function
const greet = (name : string): string => `Hi ${name}`;

const square = (n: number): number=> n*n;
const fullName = (fName: string, lName:string) => `Full name is ${fName} ${lName}`

fullName("Amit", "Pandey")

//Optional Function
function login (user: string, password?: string): void{
    console.log(`User logged in with ${user}`, password? "with password" : "without password")
}

login("standard_user");
login("standard_user", "secret_sauce");


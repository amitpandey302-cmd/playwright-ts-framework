export{}

const wait = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve,ms));

async function login(pass: string): Promise<string> {
    await wait(500);
    if(pass!=="secret_sauce"){
        throw new Error("Invalid Password");
    }
    return "Login Successfull..."
}

async function main2():Promise<void>{
    try{
        console.log(await login("secret_sauce"));
        console.log(await login("wrong"));
    }
    catch(error){
        console.log("Caught:", (error as Error).message);
    }
}

main2();
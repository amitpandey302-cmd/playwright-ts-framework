export{}

const wait = (ms:number): Promise<void>=> 
    new Promise(resolve =>setTimeout(resolve,ms));

async function runTest(): Promise<void>{
    console.log("1.....");
    await wait(1000);
    console.log("2.....");
    await wait(1000);
    console.log("3.....");
}

//runTest();

async function runTestnoAwait(): Promise<void>{
    console.log("1.....");
    wait(1000);
    console.log("2.....");
}

runTestnoAwait();
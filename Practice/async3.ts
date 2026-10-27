export{}

const wait = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve,ms));

async function getUserName():Promise<string>{
    await wait(500);
    return "standard_user";
}

async function main():Promise<void>{
    const wrong = getUserName();
    console.log(wrong);

    const right = await getUserName();
    console.log(right);
}

main();
interface user{
    username:string;
    password:string;
    role?:string;
}

const standardUser: user = {
    username:"standard_user",
    password:"secret_sauce",
};

const users: user[] = [
    standardUser, 
    {username:"locked_out_user", password: "secret_sauce", role: "blocked" },
];

for (const u of users){
    console.log(`${u.username} -> ${u.role?? "normal"}`);
}
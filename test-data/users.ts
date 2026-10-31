interface User{
    username:string;
    password:string;
}

export const users: Record<string,User> ={
    standard: {username:'standard_user', password:'secret_sauce'},
    locked_out_user: {username:'locked_out_user', password:'secret_sauce'},
    wrongPassword: {username:'standard_user', password:'wrong_password'},
};
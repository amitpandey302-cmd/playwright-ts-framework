
interface InvalidLogin {
    name:string;
    username:string;
    password:string;
    errormsg:RegExp;
}
 
export const invalidLogins = [
        {name:'locked out user', username:'locked_out_user', password:'secret_sauce', errormsg:/locked out/i},
        {name:'wrong password', username:'standard_user', password:'xyz', errormsg:/do not match/i},
        {name:'wrong username', username:'', password:'secret_sauce', errormsg:/Username is required/i},
        {name:'empty password', username:'standard_user', password:'', errormsg:/Password is required/i},
    ]
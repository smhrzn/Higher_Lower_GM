const checkLogin= ()=>{
    return new Promise(
        (resolve, reject)=> {
            let loggedIn = true;
            if(loggedIn){
                resolve("Welcome you are logged in ")
            }
            else{
                reject("You are unable to login ")
            }
        }
    )
}
async function handleLogin(){
    try{
        const result = await checkLogin();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
handleLogin();
const checkLogin= new Promise(
    (resolve, reject)=> {
        let loggedIn = false;
        if(loggedIn){
            resolve("Welcome you are logged in ")
        }
        else{
            reject("You are unable to login ")
        }
    }
)

checkLogin.then((result)=>{console.log(result)})
checkLogin.catch((error)=>{console.log(error)})
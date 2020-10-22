
var userLoggedIn = true;

var promise = new Promise((resolve,reject)=>{
    
    //wait for 1 sec
    setTimeout(()=>{
        if(userLoggedIn){
            //promise is resolved
            resolve("Used is logged in");
        }
        else{
            // promise is rejected
            reject("User is logged out");
        }
    },1000);
});

setTimeout(()=>{
    userLoggedIn = false;
},500);

promise.then((successMsg)=>{
    console.log(successMsg);
}).catch((failureMsg)=>{
    console.log(failureMsg);
});
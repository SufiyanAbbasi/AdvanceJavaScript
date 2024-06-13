function prom(complete) {
    return new Promise (function(resolve,reject){
        console.log("Fetching Data please wait");
        setTimeout(()=>{
            if(complete){
                resolve("I am Succesfull")
            }else{
                reject("I am Failed")
            }
        }, 1000)
    });
}

let onfulfillment = (result) =>{
    console.log(result);
}

let onRejection = (error) =>{
    console.log(error);
}

prom(true).then(onfulfillment);
prom(true).catch(onRejection);
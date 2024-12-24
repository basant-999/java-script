// let promise = new Promise((resolve,reject)=>{
//     console.log("basant")
//     resolve("sucess")

//     // reject("some error")  
// })

// ============================================

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("i im basant");
        resolve("suceess");
    });
};

let promise  = getPromise();
promise.then((res)=>{
    console.log("promise fullfill",res)
});
promise.catch((err)=>{
    console.log("rejected",err);
})
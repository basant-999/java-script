

function asynsfunc1(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000)
    });
}

function asynsfunc2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000)
    });
}


console.log("fatching data1");
let bk = asynsfunc1();
bk.then((res)=>{
    // console.log(res);
    console.log("fatching data2");
    let bk2 = asynsfunc2();
    // bk2.then((res)=>{})
    // console.log(res)


});
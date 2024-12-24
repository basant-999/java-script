// function Api(){
//     return new  Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("wheather data");
//             resolve(200)
//         },4000)
//     })
// }

// async function basant () {
//     await Api()
//     await Api()
// }


function data(dataId){
    return new  Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("wheather data",dataId);
            resolve("success")
        },4000)
    })
}

async function Alldata (){
    await data(1)
    await data(2)
    await data(3)
    await data(4)

    
}
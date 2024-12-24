function sum(a,b){
    console.log(a+b);
}
function cal (a,b,sumCallback){
sumCallback(a,b)
}
cal(100,78,sum)        //first type 

cal(1,4,(a,b)=>{
    console.log(a+b);        //second type

});

// ===========================calback Hellll========================

function gatData(dataId,getNextdata){

    setTimeout(()=>{
    console.log("data",dataId)

    if(getNextdata){
        getNextdata();
        
    }

    },2000)
}
gatData(1,()=>{
    gatData(2,()=>{
        gatData(3,()=>{
            gatData(4)
        })
    })
});
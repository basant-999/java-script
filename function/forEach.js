let arr = [1,2,3,45,6,];

arr.forEach(function printVal(val){
    console.log(val);
});

// =============================
arr.forEach((val) => {
    console.log(val);
});
//==========================================

let arg = ["pune","bareki","bhopal"];
arg.forEach((val,idx,arr)  =>{
    console.log(val.toUpperCase(),idx,arr);
});


// practice question==========================================

let num =[4,5,6,2,3];
num.forEach((val) => {
    console.log(val*val);
});
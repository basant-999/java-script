let arrstr = ["bas","pran","swe","out"];

arrstr.sort();
console.log(arrstr);
// ==================================

let arr = [45,56,32,78,96,60];
arr.sort(function(a,b){return a-b});
console.log(arr);
// ========================================

let arr1 = [67,56,78,69,78,32]

arr1.sort(function(a,b){return b-a});
console.log(arr1);
// ===================================


let output = arr1.reduce(function(a,b){return a+b});
console.log(output);
// ======================================================

let answerstr = arr1.tostring();
console.log(answerstr);

let answerjoin = arr1.join(" ")
console.log(answerjoin);
// ====================================

// higher order method
// Map
// reduce
// number sort
// find
// filter 
// foreach 
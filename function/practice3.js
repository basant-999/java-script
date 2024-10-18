

let point = [40,50,60,70,80,95,96,98,99];
 let hig =  point.filter((val) => {
    return val>90;
  });
  console.log(hig);

//   ========================================

let n = prompt("enter a number");
  let arr  = [];

for(i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);

     let sum = arr.reduce((res,cur) => {
        return res+cur;
});
console.log(sum);

let factorieal  = arr.reduce((res,cur) => {
    return res * cur;
});
console.log(factorieal);
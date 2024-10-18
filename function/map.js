// ==================map==========================
let num = [7,8,9,4,5];

 let newArr = num.map((val) =>  {
    return val*3;
});

console.log(newArr);

// =========================filter=====================
let arr = [4,5,6,3,7,2];

 let evenarr  = arr.filter((val) => {
    return val % 2 ===0;
});
console.log(evenarr);

// ==========================reduce=========================

let kka = [4,5,6,98,7,4,2];
  const outpu = kka.reduce ((res, curr) => {
       return res-curr;
 });
 console.log(outpu);
let arr = [45,654,789,32,47,65];
console.log(arr.length);

arr.pop();
arr.pop();
console.log(arr);

arr.push("hello");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(4568);
console.log(arr);

delete arr[2];
console.log(arr);

arr.splice(0,1);
console.log(arr);
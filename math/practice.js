
let selectbtn = document.querySelector('#btn');
selectbtn.addEventListener('click',show);

function show(){
let str = '123456789 asdfghjbvtygvv @#';

let store = '';

for(let i=0; i<6; i++){

let random = Math.random();
let ans = random *str.length;
let afterfloor = Math.floor(ans);
let cha = str.charAt(afterfloor);
store = store + cha;
}
console.log(store);
let selecth1 = document.querySelector('#output');
selecth1.innerHTML = store
}
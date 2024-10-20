
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.after(newBtn);    this methods 
// div.prepend(newBtn);
// div.before(newBtn);
div.append(newBtn);

// =====================================


let p = document.querySelector("p");
p.after(newBtn);

// ==============================================

let newHeading = document.createElement("h1");
newHeading.innerText = "hi basant";
document.querySelector("body").prepend(newHeading);


let btn1 = document.querySelector(".btn1");

btn1.onclick = () => {
    console.log("btn was click");
    let a =20;
    a++;
    console.log(a);
};
// ===========================================
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

}

// ==========================================

let div = document.querySelector("div");

div.onmouseover = () =>{
    console.log("you are inside the div");
};
// =================================================

div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

};

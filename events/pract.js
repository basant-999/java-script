

let btnmode = document.querySelector("#mode");
let currmode = "light";

btnmode.addEventListener("click", () =>{
    if (currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "yellow";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "red";

    }

    console.log(currmode);

});
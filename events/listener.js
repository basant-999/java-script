

let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click",(evt) =>{
    console.log("button was click");
    console.log(evt.type);
    console.log(evt);
});

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked - handler2");
    

});


// remove listneres==========================

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked - handler1");
    

});

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked - handler2");
    

});

const handler3 = () =>{
    console.log("button was clicked - handler3");
};

btn1.addEventListener("click",handler3)
    

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked - handler4");
});

// ================remove====

btn1.removeEventListener("click",handler3)





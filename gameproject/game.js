let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn0 = true;

const winpatt =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText ="0";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winpatt){
        console.log([pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

    }
}
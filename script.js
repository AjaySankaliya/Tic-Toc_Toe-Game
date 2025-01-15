let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let win=document.querySelector("#winner");
let msgbtn=document.querySelector(".message");

let turnO=true;
let count=0;

const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(turnO === true){
            box.innerHTML="O";
            turnO=false;
        }
        else
        {
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;  
        count++;

        let iswinner=checkwinner();
        if(count === 9 && !iswinner){
            drawmatch();
        }
    })
})
function drawmatch(){
    win.innerHTML=`match was draw`;
    msgbtn.classList.remove("hide");
    enablebtn();
}
function checkwinner(){
    for(let pattern of winningPattern){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!=0 && pos2!=0 && pos3!=0){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
}
function showwinner(winner){
    win.innerHTML=`Congratulation winner is ${winner}`;
    msgbtn.classList.remove("hide");
    disablebtn();
}
function disablebtn(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enablebtn(){
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
function reset(){
    turnO=true;
    count=0;
    enablebtn();
    msgbtn.classList.add("hide");
}

resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
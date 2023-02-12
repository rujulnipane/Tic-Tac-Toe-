const boxes=document.getElementsByClassName("boxes");
const boxtext=document.getElementsByClassName("boxtext");
let turn="X";
let playturn=document.getElementById("turn");
let button  = document.getElementById("reset");

const changeTurn =()=>{
    if(turn=="X"){
        return("0");
    }
    else{
        return("X");
    }
}

const checkWin =()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText=== boxtexts[e[2]].innerText) &&( boxtexts[e[0]].innerText!=='')){
            document.querySelector('.winner').innerText=boxtext[e[0]].innerText +" Won";
            document.querySelector('.winimg').getElementsByClassName(".winimg")[0].style.width="50px";
        }
        else{
            document.querySelector('.winner').innerText= "Draw";
        }
    })
    
}

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();

            playturn.innerText="Turn for "+turn;
        }
    })
})

button.addEventListener("click",(e)=>{
    Array.from(boxes).forEach(element=>{
        let boxtext = element.querySelector(".boxtext");
        boxtext.innerHTML = "";
    })
})
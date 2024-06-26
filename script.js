let boxes= document.querySelectorAll(".box");
let reset_btn= document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");





let turnO= true; //for player X and O

const winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];  


const resetGame=()=>{
    turnO=true ;     //Gain initial condition 
    enableboxes();
    msgcontainer.classList.add("hide");
}







boxes.forEach((box) => {
    box.addEventListener( "click", () => {
        console.log("clicked");
        if (turnO) {               //For playerO, turnO===true
            box.innerText = "O";
             turnO=false;
        }
        else{                 //playerX
            box.innerText = "X";
            turnO = true;     //shift to turn O
        }
        box.disabled=true;

        checkwinner();

    }

    );
}

);

const disableboxes = ()=> {
    for(let box of boxes){
        box.disabled=true;
    }
};


const enableboxes = ()=> {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner=(winner) => {
    msg.innerText=`Congratulation ${winner} is Winner!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};




const checkwinner= () => {
    for (let pattern of winnerpattern){
        let posval1= boxes[pattern[0]].innerText;   //print value in index 0 in  boxes
        let posval2= boxes[pattern[1]].innerText; 
        let posval3= boxes[pattern[2]].innerText; 


        if (posval1 !="" && posval2 !="" && posval3 !=""){
            if (posval1===posval2 && posval2===posval3){
                console.log("winneris ",posval1);
                showWinner(posval1);
    
            }


        }

    }
        
};


newgamebtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);




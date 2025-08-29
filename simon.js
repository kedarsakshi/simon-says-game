
//simon says game

let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","blue"]

let level=0;
let started=false;
let h2=document.querySelector("h2");

//game start when any key is press
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelup();
    }

    
})

function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000)
    
    
}

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 500)

}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=(`Level ${level}`);
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
   let randombtn = document.querySelector(`.${randomcolor}`); 
    // console.log(randomidx);
    // console.log(randomcolor);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}

//to check user sequence
function checkans(idx){
 

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(1000, levelup());
        }
       // console.log("same sequence");
    }else{
         h2.innerHTML=(`game over ! your score was <b>${level}</b><br> press any key to restart.`);
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },200)
         reset();
         
    }
}


function btnpress(){
   
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

//reset game after gameOver
function reset(){
     started=false;
     gameseq=[];
    userseq=[];
    level=0;

}

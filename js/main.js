document.body.style.backgroundImage=`url('img/bg2.png')`
for(let i=0;i<10; i++){
    const image=new Image();
    image.src=`img/Idle__00${i}.png`
}
for(let i=0;i<10; i++){
    const image=new Image();
    image.src=`img/Run__00${i}.png`
}
for(let i=0;i<10; i++){
    const image=new Image();
    image.src=`img/Jump__00${i}.png`
}
for(let i=0;i<10; i++){
    const image=new Image();
    image.src=`img/Attack__00${i}.png`
}


const boxElm = document.createElement('div');
boxElm.id='ninja';
boxElm.classList.add('box');
document.body.append(boxElm);
const treeElm=document.getElementById('treeElm');
const cactusElm=document.getElementById('cactus');
const boxElm1=document.createElement('div');
boxElm1.classList.add('box');
boxElm1.id='zombi';
document.body.append(boxElm1);
boxElm1.style.width='100px'

const boxElm3=document.createElement('div');
boxElm3.classList.add('box');
boxElm3.id='zombi2';
document.body.append(boxElm3);
boxElm3.style.width='100px';

const scoreElm=document.getElementById('score')
scoreElm.innerText='0';
const scoreElm1=document.getElementById('score1')
scoreElm.innerText='0';
const scoreElm2=document.getElementById('score2')
scoreElm.innerText='0';

const gameOverSec=document.getElementById('game-over-pannal');
const gameWinSec=document.getElementById('game-win');

// const reStart=document.getElementById("btn-play-agin");
// reStart.alert("helloo!")



let score=0;

function scoreCount(){
     score+=1;
     return score;
}





// const bats=document.createElement('div');
// bats.id('bats');
// document.body.append(bats);


let jump = false;
let run = false;
let attack=false;
let dx = 0;


document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        jump = true;
        const point=scoreCount();
        scoreElm.innerText=point;

        
        jumpAudio();
        if(+point>=10){
           gameWin()
           scoreElm2.innerText=point;


        }
    }else if (eventData.code === 'ArrowRight'){
        boxElm.style.transform='rotateY(0)'
        run = true;
        dx = 2;
        // runAudio();
     
    }else if (eventData.code === 'ArrowLeft'){
        // boxElm.style.animationName='leftside';
        boxElm.style.transform='rotateY(180deg)'
        run = true;
        dx = -2;
        // runAudio();
    
    }
    else if (eventData.code==='ArrowUp'){
        attack=true;
        boxElm.style.width='163px'   

    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        run = false;
        dx = 0;
    }else if (eventData.code === 'ArrowLeft'){
        run = false;
        dx = 0;
    }
    else if (eventData.code === 'ArrowUp'){
        attack= false;
        
    }
});

let angle = 0;
function doJump(){
    drawJump();
   
    let y  = Math.cos(angle * (Math.PI / 180));
    y *= 2;
    boxElm.style.top = (boxElm.offsetTop - y) + "px";
    angle++;
    if (angle >  180){
        jump = false;
        angle = 0;  
        drawIdle();
        
    }
   
}

function doRun(){
    let z = boxElm.offsetLeft + dx;
    if ((z + boxElm.offsetWidth)> innerWidth) {
        z = innerWidth - boxElm.offsetWidth;
    }else if (z <= 0) z = 0;
    boxElm.style.left = `${z}px`;
    const r1 = boxElm.offsetWidth / 2;
    const r2 = boxElm1.offsetWidth / 2;
    const r3=boxElm3.offsetWidth/2;
    console.log(r1);
    const a1=boxElm.offsetHeight/2;
    const a2=boxElm1.offsetHeight/2;
    const a3=boxElm3.offsetHeight/2;
    console.log(a1);
    const d1=Math.abs((boxElm1.offsetLeft + r2) - (boxElm.offsetLeft + r1));
    console.log(d1);
    const d2=Math.abs((boxElm3.offsetLeft + r3) - (boxElm.offsetLeft + r1));
    // const h1=Math.abs((boxElm1.offsetTop+a2)-(boxElm.offsetTop+a1));
    // const h2=Math.abs((boxElm3.offsetTop+a3)-(boxElm.offsetTop+a1));
    // const distanceZombi1=Math.sqrt(Math.pow(d1)+Math.pow(h1));
    // const distanceZombi2=Math.sqrt(Math.pow(d2)+Math.pow(h2));
    
    
 
    if (Math.abs((boxElm1.offsetLeft + r2) - (boxElm.offsetLeft + r1)) <= (r1 + r2)){
        alert("Collision");
        drawDead()
    } 
    if (Math.abs((boxElm3.offsetLeft + r3) - (boxElm.offsetLeft + r1)) <= (r1 + r3)) {
        alert("Collision-zombi2")
        drawDead()
    };
    // if (distanceZombi1 <= (r1 + r2)){
    //     alert("Collision");
    // } 
    // if (distanceZombi2 <= (r1 + r3)) {
    //     alert("Collision-zombi2")
    // };
    
    // elmActivity();
}
function doAttack(){
    drawAttack();
}

let i = 0;
let j = 0;
let k=0;
let l=1;
let m=0;
let n=0;
let o=1;
let f=0;
function drawIdle(){
    boxElm.style.backgroundImage = `url('img/Idle__00${i++}.png')`; 
    if(i === 10) i = 0;
}

function drawJump(){
    boxElm.style.backgroundImage=`url('img/Jump__00${j++}.png')`; 
    if(j===10) j=0;
}
function drawRun(){
    boxElm.style.backgroundImage=`url('img/Run__00${k++}.png')`; 
    if(k===10) k=0;
}
function drawDead(){
    boxElm.style.backgroundImage=`url('img/Dead__00${f++}.png')`; 
    if(f===10) f=0;
}
function drawAttack(){
    boxElm.style.backgroundImage=`url('img/Attack__00${n++}.png')`; 
    if(n===10) n=0;
}
function drawZombi(){
    boxElm1.style.backgroundImage=`url('img/Walk__00${o++}.png')`; 
    if(o===10) o=1;
    boxElm3.style.backgroundImage=`url('img/Walk__00${o++}.png')`; 
    if(o===10) o=1;
}
// treeElm.style.backgroundImage=`url('background/png/Objects/Bush(${l++}).png')`; 
function treeStyle(){
    treeElm.style.backgroundImage=`url('img/Bush__00${l++}.png')`; 
    cactusElm.style.backgroundImage=`url('img/Cactus__00${m++}.png')`; 

    
    if(l===3) l=1;
    if(m===0){
    
    } 
    else if(m===1){cactusElm.style.width='70px';
    cactusElm.style.height='45px';
    cactusElm.style.top='400px';
    

    } 
    else if(m===2){cactusElm.style.width='108px';
    cactusElm.style.height='111px';
    cactusElm.style.top='350px';
    
    } 
    else if(m===3){m=0
        cactusElm.style.width='86px';
        cactusElm.style.height='96px';
        cactusElm.style.top='350px'};
}

setInterval(()=> {
    if (jump){
        doJump();
    }
    if (run){
        doRun();
    }if(attack){
        doAttack();
    }
}, 5);

setInterval(()=> {
    if(jump===true && run===false){
        drawJump(),(1000/10);
        boxElm.style.width='120px';
        
    }
    else if(run===true && jump===false){
        drawRun(), (1000/20);
        boxElm.style.width='120px';
    }
    else if(run==false && jump===false && attack===false ){
        drawIdle(), (1000/20);
        boxElm.style.width='75px';

    }else if(attack==true) drawAttack(),(100);
    
    else if(run==false && jump===false && attack===false ){
        drawDead(), (1000/20);
        boxElm.style.width='75px';

    }
    
});
treeStyle();
drawZombi();
setInterval(()=> treeStyle(), (450));
setInterval(()=> drawZombi(), (450));

jumpAudio();

/*sound functions */
function jumpAudio(){
    let audio=new Audio('audio/cartoon-jump.mp3');
    //audio.play();

}
gameWinSec.style.visibility="hidden";
gameOverSec.style.visibility="hidden";

function gameOver() {
    gameOverSec.style.visibility="visible"
      
  }
function gameWin() {
    gameWinSec.style.visibility="visible"
      
  }













  
  




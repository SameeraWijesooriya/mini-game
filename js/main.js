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
boxElm.classList.add('box');
document.body.append(boxElm);
const treeElm=document.getElementById('treeElm');
const cactusElm=document.getElementById('cactus');
const boxElm1=document.createElement('div');

boxElm1.classList.add('box');
boxElm1.id='zombi';
document.body.append(boxElm1);
boxElm1.style.width='100px'

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
        jumpAudio();
    }else if (eventData.code === 'ArrowRight'){
        boxElm.style.transform='rotateY(0)'
        run = true;
        dx = 2;
        runAudio();
    }else if (eventData.code === 'ArrowLeft'){
        // boxElm.style.animationName='leftside';
        boxElm.style.transform='rotateY(180deg)'
        run = true;
        dx = -2;
        runAudio();
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
    y *= 3;
    boxElm.style.top = (boxElm.offsetTop - y) + "px";
    angle++;
    if (angle >  180){
        jump = false;
        angle = 0;  
        drawIdle();
        
    }
   
}

function doRun(){
    let x = boxElm.offsetLeft + dx;
    if ((x + boxElm.offsetWidth)> innerWidth) {
        x = innerWidth - boxElm.offsetWidth;
    }else if (x <= 0) x = 0;
    boxElm.style.left = `${x}px`;
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
function drawAttack(){
    boxElm.style.backgroundImage=`url('img/Attack__00${n++}.png')`; 
    if(n===10) n=0;
}
function drawZombi(){
    boxElm1.style.backgroundImage=`url('img/Walk__00${o++}.png')`; 
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
    cactusElm.style.top='100px';
    

    } 
    else if(m===2){cactusElm.style.width='108px';
    cactusElm.style.height='111px';
    cactusElm.style.top='50px';
    
    } 
    else if(m===3){m=0
        cactusElm.style.width='86px';
        cactusElm.style.height='96px';
        cactusElm.style.top='50px'};
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
    
});
treeStyle();
drawZombi();
setInterval(()=> treeStyle(), (450));
setInterval(()=> drawZombi(), (450));

jumpAudio();

/*sound functions */
function jumpAudio(){
    let audio=new Audio('/audio/cartoon-jump.mp3');
    audio.play();

}
function runAudio(){
    let audio=new Audio('/audio/run.mp3');
    audio.play();

}

bats
let bx = 0;
let right = false;

setInterval(()=>{
    bats.style.left = `${bx}px`;
    bx += !right ? 10 : -10;

    if (bats.offsetLeft >= innerWidth){
        right = true;
        bats.style.top = `${Math.random() * 40}vh`;
    }else if (bx + bats.offsetWidth <=0){
        right =false;
        bats.style.top = `${Math.random() * 40}vh`;
    }
},20);



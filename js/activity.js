// let x=0;
// let y=0;
function elmActivity(){
    let x=ninja.offsetLeft;  
    let y=ninja.offsetTop;  

    


    boxElm1.addEventListener((eventData)=>{
        let x1=eventData.offsetLeft;
        let y1=eventData.offsetTop;
        let dis=Math.sqrt(Math.pow(x1-x)+Math.pow(y1-y));
        console.log(dis);

        

    });
  
    
}
const button = document.querySelector('button');

const size = 4649951 * 8 ;
let testResult=[];

const progress = document.querySelector('.progress');

async function getLoadSpeed(){
let loadTime  = await loadImage();
if(loadTime < 1) loadTime = 1;
let speedBPS = size/loadTime;
let speedKBPS = size/loadTime/1024;
let speedMBPS = speedKBPS/1024;
return speedKBPS;

}



function loadImage(){
    return new Promise((resolve,reject)=>{
        
        let image = new Image();
        image.src = "./s.jpg?" + parseInt(Math.random()*10000);
        
        
        let startTime = Date.now();
        
        image.onload = function(){
            let endTime = Date.now();
            resolve (endTime - startTime);
            console.log('image loaded');
            
        }
        image.onerror = function(err){
            reject(err);
        }
        
    })
        
    } 
function getAverage(){
let avg = testResult.reduce((a,b)=>a+b,0);
return avg/testResult.length;

}
    button.addEventListener('click',async function(){
        for(i=0;i<100;i++){

            let  speed = await getLoadSpeed();
            testResult.push(speed);
            // console.log(speed);
            progress.style.width = ((i+1)/100*100)+'%';
        }
       
        let kbps = getAverage();
        // console.log(kbps)

        
  document.getElementById("Speed").innerHTML=kbps.toFixed(2)+" kbps";
       })
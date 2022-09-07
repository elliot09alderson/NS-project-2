
const button = document.getElementById('Btn');
const imgSize =  1722216 * 8;
function loadImage(){
    return new Promise((resolve,reject)=>{

        let image = new Image();
        image.src = "./ahmed-LXlh8H5zurM-unsplash.jpg" + parseInt(Math.random()*10000);
        const testCount = 100;
const testResults = [];
        let startTime = Date.now();
        console.log(startTime);

        image.onload = function(){  
            let endTime = Date.now();
            console.log('image loaded');
            resolve(endTime - startTime);
        }
        image.onerror = function(err){
            reject(err)
        }
          });   
    
}
async function getLoadSpeed(){
let  loadTime = await loadImage(); 
if(loadTime < 1) loadTime = 1;
let speed_bps = size/loadTime;
let speed_kbps = speed_bps / 1024;
return speed_kbps;

}
function getAvgSpeed(){
    let sum = testResults.reduce((a,b)=> a+b,0)
    return sum/ testResults.length;
}

button.addEventListener('click', async function(){
    for(
        let i = 0; i < testCount ;i++
    ){

        let speed = await getLoadSpeed();
        test_results.push(speed);
    }
console.log(getAvgSpeed().toFixed(2));
})
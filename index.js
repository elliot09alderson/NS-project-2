
let a1 = [];
const getLoadSpeed =() =>{
    var imageLink ='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg';
var downloadSize = 920203;
var  time_start , time_end;
downloadSrc = new Image();
time_start=new Date().getTime();
var cacheImg = "?nn" + time_start;
downloadSrc.src  = imageLink + cacheImg;
console.log(downloadSrc);
downloadSrc.onload = function(){
    //function will be triggered once the image should loaded
    time_end = new Date().getTime();
    var timeDuration =(time_end - time_start)/1000;
    // console.log(timeDuration);

    loadBytes = downloadSize*8;
    loadKiloBytes = ((loadBytes/timeDuration)/1024).toFixed(3);
    loadMegaBytes = (loadKiloBytes/1024).toFixed(2);
    console.log(loadMegaBytes);
    console.log(loadKiloBytes);
    return loadKiloBytes;
// document.getElementById('Speed').innerHTML= loadMegaBytes + " Mbps" + " " + loadKiloBytes + " kbps";
}

}
const getAverageSpeed =()=>{
    let sum  = a1.reduce((a,b) => a+b,0);
    // console.log("arr = ",a1);
    return sum / a1.length;
    }


document.getElementById('btn').addEventListener('click', function(){
    for(let i = 0; i<100;i++){
        let kbps  =  await getLoadSpeed();
        console.log("kbps = "+kbps)
        a1.push(kbps);
        
    }
    let kbps =  getAverageSpeed();
    let Mbps = kbps*1000;

    document.getElementById('Speed').innerHTML=  Mbps + " "  + " "  + " " + kbps;
})  


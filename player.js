

let v=document.getElementById("vi");
const contco=document.getElementById("contre");

const play=contco.querySelectorAll(".botón");

const dqe =contco.querySelectorAll(".dqe");
const que =  contco.querySelectorAll(".dqe");

const tm=document.getElementById("time");
const vol=document.getElementById("vol");


const fulsc=document.getElementById("fulsc");







v.volume= 1;
function plau(){
    if (v.paused) {


        v.play();


         } else {
           v.pause();
         }

}
function q1(){


    v.src="/home/qqqq/Documents/strugre/card1402/Download/9165025c21cf4a3c77c95203e205d16a465976 (1).mp4";
  


}
function q2(){


    v.src="/home/qqqq/Documents/strugre/card1402/Download/9165025c21cf4a3c77c95203e205d16a465976 (1).mp4";
 
 


}function q3(){

    v.src="/home/qqqq/Documents/strugre/card1402/Download/9165025c21cf4a3c77c95203e205d16a465976 (1).mp4";
   


}function q4(){
    const d = new Date();

    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let ph=h - starh;
    let pm= m - starm;
    let ps=s -stars;
    let tmepic=ph + ":"+pm+":"+ps;
    let phc= ph * 60 * 60;
    let pmc= pm * 60 ;
    let psc= ps ;
    let tmepicfil=phc + pmc +psc;
      v.currentTime = tmepicfil;


}function q5(){
    const d = new Date();

    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let ph=h - starh;
    let pm= m - starm;
    let ps=s -stars;
    let tmepic=ph + ":"+pm+":"+ps;
    let phc= ph * 60 * 60;
    let pmc= pm * 60 ;
    let psc= ps ;
    let tmepicfil=phc + pmc +psc;
      v.currentTime = tmepicfil;


}function q6(){
    const d = new Date();

    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let ph=h - starh;
    let pm= m - starm;
    let ps=s -stars;
    let tmepic=ph + ":"+pm+":"+ps;
    let phc= ph * 60 * 60;
    let pmc= pm * 60 ;
    let psc= ps ;
    let tmepicfil=phc + pmc +psc;
      v.currentTime = tmepicfil;


}function q7(){
    const d = new Date();

    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    let s = d.getUTCSeconds();

    let ph=h - starh;
    let pm= m - starm;
    let ps=s -stars;
    let tmepic=ph + ":"+pm+":"+ps;
    let phc= ph * 60 * 60;
    let pmc= pm * 60 ;
    let psc= ps ;
    let tmepicfil=phc + pmc +psc;
      v.currentTime = tmepicfil;

}


function up(){
    v.volume +=0.2;

 if(v.volume >= 0.8 & v.volume <= 1){
    vol.style.filter=" drop-shadow( -3vw 0 0.5vw red )"
}
else if(v.volume >= 0.6 & v.volume <= 0.8){
    vol.style.filter=" drop-shadow( -1vw 0 0.8vw red )"
}
else if(v.volume >= 0.4 & v.volume <= 0.6){
    vol.style.filter=" drop-shadow( 0vw 0 1vw red )"
}
else if(v.volume >= 0.2 & v.volume <= 0.4){
    vol.style.filter=" drop-shadow( 1vw 0 0.8vw red )"
}
else if(v.volume >= 0  & v.volume <= 0.2){
    vol.style.filter=" drop-shadow(3vw 0  0.5vw red )"
}

}

function low(){
    v.volume -=0.2;
    if(v.volume >= 0.8 & v.volume <= 1){
        vol.style.filter=" drop-shadow( -3vw 0 0.5vw red )"
    }
    else if(v.volume >= 0.6 & v.volume <= 0.8){
        vol.style.filter=" drop-shadow( -1vw 0 0.8vw red )"
    }
    else if(v.volume >= 0.4 & v.volume <= 0.6){
        vol.style.filter=" drop-shadow( 0vw 0 1vw red )"
    }
    else if(v.volume >= 0.2 & v.volume <= 0.4){
        vol.style.filter=" drop-shadow( 1vw 0 0.8vw red )"
    }
    else if(v.volume >= 0  & v.volume <= 0.2){
        vol.style.filter=" drop-shadow(3vw 0  0.5vw red )"
    }

}




function g1(){
let tmer =v.currentTime;
const min = Math.floor(tmer / 60);
let timevdd = tmer - min * 60;
let ty= Math.round(timevdd);

   tm.innerHTML=min + ": " +ty;
     let t1 = setTimeout(function(){ g1() }, 1000);
 }
 g1();




/************-===========time======= */
















function menu(){
   var box =document.getElementById("box");

    box.classList.toggle('boxd');
}
v.loop = false;

 
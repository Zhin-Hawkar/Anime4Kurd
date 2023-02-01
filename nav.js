function closeNav(){
  document.getElementById("MySideNav").style.width="0px";
   
}
function openNav(){
document.getElementById("MySideNav").style.width="100%";
}  

let Slides= 1 ;

showDivs(Slides);

function Clicks(n){
    showDivs(Slides += n);
}
function Dots(n){
    showDivs(Slides = n);
}
function showDivs(n){
    let i;
    let x= document.getElementsByClassName("myimg");
    let y= document.getElementsByClassName("myimg_1");
    let z= document.getElementsByClassName("dots");

    if(n>x.length){
        Slides= 1 ;
    }else
    if(n<1){
        Slides = x.length;
    }
    
for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    

for(i=0; i<y.length; i++){
        y[i].style.display="none";
    }
    
for(i=0; i<z.length; i++){
   z[i].className = z[i].className.replace(" active"," ");
}

x[Slides-1].style.display="block";
z[Slides-1].className += " active";
setTimeout(showDivs,50);

}


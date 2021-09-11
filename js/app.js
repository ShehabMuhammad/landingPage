
var sideMenu = document.createElement("div");var activeSection = null;
sideMenu.style.position = "fixed";
sideMenu.style.right = "0";sideMenu.style.transition = "0.8s";

const arr = ["Home","About","Other","Games","FAQ","Contact-Us"], colors = ["green","blue","red","gray","orange","black"];
arr.slice().map((e,i) => {let v = document.createElement("div"); v.style.borderRadius = "10em 0 0 10em"; 
v.innerHTML = "<a href=\"#"+e+"\" target=\"_self\"> "+e+"</a>";
v.style.backgroundColor = colors[i]; v.style.color = "white";v.className += " navSide ";v.style.padding="1px";v.onclick=()=>{

let k = document.getElementById(e);
    if(k["y"] > 0){return false;}
   // console.log("This's-->" + e);
    window.scrollTo(0,k.offsetTop + 10);
window.scrollTo(0,k.offsetTop + 10);
return false;};v.className += " navS ";v.style.minHeight = "2em"; v.setAttribute("data-call", e);
                        
return v; 
                         }).forEach(v => sideMenu.appendChild(v) );
sideMenu.style.top = "40%"; 
document.body.appendChild(sideMenu);

setTimeout( "(function(yY){ if(pageYOffset == yY) { sideMenu.style.marginRight = \"-100%\";  }})(pageYOffset)", 3000);
window.onload = function(){
var navo = document.getElementById("nav");
for(let i=0; i < arr.length; i++){
let div = document.createElement("DIV");
div.className +=  " col";
let a = document.createElement("A"); a.setAttribute("target", "_self"); a.className += "SectA";
a.innerText = arr[i]; a.onclick = function(ev){
  
    if(activeSection){document.getElementById(activeSection).classList.remove("activeSection");}
    activeSection = arr[i];;
    document.getElementById(arr[i]).className += "activeSection";
  
}
a.setAttribute("href", "#" + arr[i]);
div.appendChild(a);
navo.appendChild(div)



} 


                          }



const sects = arr.slice().map(e=>document.getElementById(e)), navEls = document.querySelectorAll(".navSide");
const but = document.createElement("button");but.style.position="fixed"; but.style.right="1em";but.style.bottom="1em";but.style.minWidth="3em";
but.style.minHeight="3em";but.innerHTML = " TOP ";but.onclick = ()=>{window.scrollTo(0,0);}
but.className += " topBtn";but.style.display = "none";document.body.appendChild(but);

window.onscroll = function(ev){
   but.style.display = pageYOffset > 50 ? "block":"none";
   sideMenu.style.marginRight = "0";
    var yY = pageYOffset;
   setTimeout( function(){ if(pageYOffset == yY) { sideMenu.style.marginRight = "-100%";  } }
, 3000);
    
   for(const elem of sects ){
       
    if(  pageYOffset + (window.innerHeight / 2  |0) > elem.offsetTop && (pageYOffset + (window.innerHeight/2 |0)) < (elem.offsetHeight + elem.offsetTop)  ){
                 console.log(elem.id + " is in view port.");
                 if(activeSection)document.getElementById(activeSection).classList.remove("activeSection");
                 activeSection = elem.id;
                 document.getElementById(elem.id).className += " activeSection";
                 for(let el of navEls){
                     let att = el.getAttribute("data-call");
                     if(att === elem.id){
                         if(el.classList.contains("activeNav")){break;}
                         el.className += " activeNav";
                     }
                     else {
                                          el.classList.remove("activeNav")

                 }
                 }
                 break;
             }
    
    }
                  
    
}



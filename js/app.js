
var sideMenu = document.createElement("div"), activeSection = null;
sideMenu.id="sideMenu";

const arr = ["Home","About","Games","FAQ","Contact-Us"], colors = ["green","blue","red","gray","orange","black"];

const frag0 = document.createDocumentFragment();

arr.slice().forEach((e,i) => {
let v = document.createElement("div"); 
v.style.backgroundColor = colors[i];
v.innerHTML = "<a href=\"#"+e+"\" target=\"_self\"> "+e+"</a>";
v.className += " navSide "; v.setAttribute("data-call", e);                        
frag0.appendChild(v); 
                         });

sideMenu.addEventListener('click', function(ev){
   let elem = ev.target; let cords = elem.getBoundingClientRect();
    let dataCall = elem.getAttribute("data-call");
    if(!dataCall){return false;}
    if(cords["y"] >= 0 && cords["y"] < cords["height"]){return false;}
    window.scrollTo(0, document.getElementById(dataCall).offsetTop + 10 );
    return false;
});

sideMenu.appendChild(frag0);

document.body.appendChild(sideMenu);

setTimeout( "(function(yY){ if(pageYOffset == yY) { sideMenu.style.marginRight = \"-100%\";  }})(pageYOffset)", 4000);

window.addEventListener('DOMContentLoaded', function(){

    let navo = document.getElementById("nav"),
        frag = document.createDocumentFragment();

    for(let i=0; i < arr.length; i++){

        let div = document.createElement("li");

        div.className +=  " col";

        let a = document.createElement("A"); 
        
        a.setAttribute("target", "_self"); 
        
        a.className += "SectA";

        a.innerText = arr[i];
        
        a.onclick = function(ev){
  
    
            if(activeSection){document.getElementById(activeSection).classList.remove("activeSection");}
    activeSection = arr[i];;
    let d = document.getElementById(arr[i]);
 d.className += "activeSection";d.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});return false;

  
}
a.setAttribute("href", "#" + arr[i]);
div.appendChild(a);
frag.appendChild(div)



} 

navo.appendChild(frag);
                          });



const sects = arr.slice().map(e => document.getElementById(e)), navEls = document.querySelectorAll(".navSide");
const but = document.createElement("button");but.style.position="fixed"; but.style.right="1em";but.style.bottom="1em";but.style.minWidth="3em";
but.style.minHeight="3em";but.innerHTML = " TOP ";but.onclick = ()=>{window.scrollTo(0,0);}
but.className += " topBtn";but.style.display = "none";document.body.appendChild(but);

window.onscroll = function(ev){
   but.style.display = pageYOffset > 50 ? "block":"none";
   sideMenu.style.marginRight = "0";
    var yY = pageYOffset;
   setTimeout( function(){ if(pageYOffset == yY) { sideMenu.style.marginRight = "-100%";  } }
, 4000);
    
   for(const elem of sects ){
       let upperBound = elem.offsetTop;
       if(!upperBound) {continue;}
    if(  pageYOffset + (window.innerHeight / 2  |0) > upperBound && (pageYOffset + (window.innerHeight/2 |0)) < (elem.offsetHeight + upperBound)  ){
               //  console.log(elem.id + " is in view port.");
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

var Qs = ["Who is behind the site?", "What kind of services does the site offer?","How Can I contact the admin?"],
         answers = ["Shehab Muhammad. Who is a passionate web developer, with an unstoppable thirst for knoweldge is the creator of this site.",
                   "The site offers quite a range of services that includes building, maintaining, and troubleshooting websites and applications.",
                   "You can contact the site developer at officialshehab96@gmail.com."];
const faqElem = document.querySelector("#FAQ");
let Qindex = 0;
const frag2 = document.createDocumentFragment();
for(const Question of Qs){
    let container = document.createElement("div"), newElem = document.createElement("div"), newBtn=document.createElement("button"),hiddenElem = document.createElement("div");
    newBtn.textContent="+";newBtn.classList.add("expander");hiddenElem.textContent = answers[Qindex++];
    hiddenElem.style.display = "none";
    newBtn.addEventListener('click', expander);
    container.classList.add("qCont");
    newElem.classList.add("question");
    newElem.textContent = Question;
   container.appendChild(newElem);container.appendChild(newBtn);container.appendChild(hiddenElem)
    frag2.appendChild(container)
    //container.style.marginBottom = getComputedStyle(hiddenElem)["height"];
}
faqElem.appendChild(frag2);
    

function expander(){
    let target = this.nextElementSibling;
    let disVal = target.style.display, hi = getComputedStyle(target)["height"] 
    if(disVal == "none"){
    target.style.display =  "block";
    target.style.marginBottom = hi;
    this.textContent = "x";
    }
    else {
    target.style.display = "none"
    this.parentElement.style.marginBottom = '';
    target.style.marginBottom = '';
    this.textContent = "+";
    }

}

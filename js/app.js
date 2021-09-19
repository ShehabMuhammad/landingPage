var sideMenu = document.createElement("div"), activeSection = null;
sideMenu.id="sideMenu";

// an array containing the names/IDs of the sections.. 
const arr = ["Home","About","Games","FAQ","Contact-Us"], colors = ["green","blue","red","gray","orange","black"];

const frag0 = document.createDocumentFragment();

arr.slice().forEach((e,i) => {

  let v = document.createElement("div"); 
v.style.backgroundColor = colors[i];
v.innerHTML = "<a href=\"#"+e+"\" data-nav=\""+(e)+ "\" target=\"_self\"> "+e+"</a>";
v.className += " navSide "; v.setAttribute("data-nav", e);                        
frag0.appendChild(v); 
                         });

sideMenu.addEventListener('click', function(ev){
    ev.stopPropagation();
    let elem = ev.target, 
               cords = elem.getBoundingClientRect(),
               dataCall = elem.getAttribute("data-nav");
    if(!dataCall){ ev.preventDefault(); return false;}
    if(cords["y"] >= 0 && cords["y"] < cords["height"]){ ev.preventDefault(); return false; }
    window.scrollTo(0, document.getElementById(dataCall).offsetTop + 10 );
    ev.preventDefault(); // So that it won't proceed with default action or behaviour.. 
    return false; 
});

sideMenu.appendChild(frag0);

document.body.appendChild(sideMenu);

// The suggested setTimeout so we'll know if the user stopped scrolling or not.
setTimeout( "(function(yY){ if(pageYOffset == yY) { sideMenu.style.marginRight = \"-100%\";  }})(pageYOffset)", 4000);

// I used window.onload initially but changed it to 'DOMContentLoaded' as per the course suggestion, Because it occurs earlier
window.addEventListener('DOMContentLoaded', function(){

    let navo = document.getElementById("nav"),
        frag = document.createDocumentFragment();

    for(let i=0; i < arr.length; i++){

        let LI = document.createElement("li");

        LI.className +=  " col";

        let a = document.createElement("A"); 
        
        a.setAttribute("target", "_self"); 
        
        a.classList.add("SectA");

        a.appendChild(document.createTextNode(arr[i]));
        
        a.onclick = function(ev){
  
    
            if(activeSection){document.getElementById(activeSection).classList.remove("activeSection");}
    activeSection = arr[i];;
    let d = document.getElementById(arr[i]);
 d.className += "activeSection";
          
          // scrollIntoView method was one way to scroll the element intoView, We can also use offSettop and window.scrollTo it achieve the same goal.. 
          d.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
          return false;

  
}
      
a.setAttribute("href", "#" + arr[i]);
LI.appendChild(a);
frag.appendChild(LI)



} 

navo.appendChild(frag);
                          });



const sects = arr.slice().map(e => document.getElementById(e)), 
      navEls = document.querySelectorAll(".navSide");

const but = document.createElement("button");but.style.position="fixed"; but.style.right="1em";but.style.bottom="1em";but.style.minWidth="3em";
but.style.minHeight="3em";but.innerHTML = " TOP ";
but.onclick = ()=>{window.scrollTo(0,0);}
but.className += " topBtn";
but.style.display = "none";
document.body.appendChild(but);




// This's the first implementation, It considers the active section is the one closest to the top..
// لكن عندي طريقة تانية كنت شايفها أحسن بتعتبر السيكشن الي موجود في النص هو الأكتيف
function getClosestToTop(){
let min = Infinity, curr = null;
sects.forEach((e, i) => {
let obj = e.getBoundingClientRect();
if( Math.abs(obj["y"]) < min ) {min = Math.abs(obj["y"]); curr = e.id; } 
});
if(activeSection){document.getElementById( "" + activeSection ).classList.remove("activeSection");}

if(curr !== null){ 
    sideNavHighLight(curr);
    document.getElementById(curr).classList.add("activeSection");  activeSection = curr;}
        
       
}


function getActiveAtMiddle(ev){
    
   for(const elem of sects ){
       let upperBound = elem.offsetTop;
       if(!upperBound) {continue;}
    if(  pageYOffset + (window.innerHeight / 2  |0) > upperBound && (pageYOffset + (window.innerHeight/2 |0)) < (elem.offsetHeight + upperBound)  ){
    if(activeSection)document.getElementById(activeSection).classList.remove("activeSection");
                 activeSection = elem.id;
                 document.getElementById(elem.id).className += " activeSection";
                 sideNavHighLight(elem.id);
                 break;
             }
    
    }
                     
}
function sideNavHighLight(elemId){
        for(let el of navEls){
                     let att = el.getAttribute("data-nav");
                     if(att === elemId){
                         if(el.classList.contains("activeNav")){break;}
                         el.className += " activeNav";
                     }
                     else {
                                          el.classList.remove("activeNav");}
                 }
}

//
window.onscroll = function(ev){
  
    but.style.display = pageYOffset > 50 ? "block":"none";
   
    sideMenu.style.marginRight = "0";
    let yY = pageYOffset;
   
    setTimeout( function(){ if(pageYOffset == yY) { sideMenu.style.marginRight = "-100%";  } }
               , 4000);

    getClosestToTop(); 
    // ely gay hwa tareqa mo5talefa le 7al el moshkela.
    // law 3ayez tegeb ely fel nos uncomment ely gay w comment ely fawq.
    // getActiveAtMiddle(ev);

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
    //this.parentElement.style.marginBottom =  this.parentElement.style.marginBottom <= hi ? hi : this.parentElement.style.marginBottom ;
    this.textContent = "x";
    }
    else {
    target.style.display = "none"
    this.parentElement.style.marginBottom = '';
    this.textContent = "+";
    }

}


// We dispatch the scroll event once the page gets loaded to get the activeSection from the beginning. 
(()=>{window.dispatchEvent(new Event('scroll') );})()

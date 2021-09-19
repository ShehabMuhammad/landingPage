const Board = document.querySelector("#board");
const hndCrds = document.querySelectorAll(".card");
Board.ondragover = (ev)=>{ev.preventDefault();}
Board.ondrop = (ev)=>{
var tarId = ev.dataTransfer.getData("text");
let elem = document.getElementById(tarId);
    if(!elem || ![...hndCrds].includes(elem.parentNode) ){return false;}
    ev.preventDefault();
let sum = obj.floor.length;

    if(!ev || !tarId){return false;}
handCards.splice(handCards.indexOf(tarId), 1);var dt=new Date();
drop(tarId);
let SUM = obj.floor.length;
if(SUM < sum ) {  let elo =   document.getElementById( "num"  ); elo.innerHTML = +elo.innerHTML + (sum - obj.floor.length)  + 1  ;  }
let r = Math.floor(Math.random() * (otherCards.length));
let d = otherCards[r];
let m = createImage( d );
m.draggable = false; m.ondragstart=()=>false;m.onselect=()=>false;
m.style.display="none";document.getElementById("hid").appendChild(m);
otherCards.splice(r, 1);
// (`Computer dropped : ${d}. `);
    userTurn=false;dt=new Date();
drop(d);
   userTurn=true;
if( obj.floor.length < SUM ) {  let elo =   document.getElementById( "opp"  ); elo.innerHTML = +elo.innerHTML + (SUM - obj.floor.length) + 1  ;  }
if( handCards.length == 0 && otherCards.length == 0) {start();}
 }

function initialize(){

    if(board.children.length > 0){return false;}
    for (let i=0;i<4;i++){
    let r = Math.abs(Math.floor(Math.random() * (cards.length-1) ));
    let e = cards[r] ;
let c = createImage(e);
c.draggable = false; c.ondragover = ()=>{return false;}

c.draggable=()=>false;
c.onselect=()=>false;
c.ondragstart=()=>false;
    Board.appendChild(c);
    obj.floor.push(e);
    cards.splice(r, 1);
}
  

};

function popup(str){
    
var notice = document.createElement("div"); notice.id = "popup"; notice.style.padding="1rem";notice.style.backgroundColor="white";

        notice.style.top= "30%";notice.style.left= "50%";
        notice.style.marginRight= "-50%"; notice.style.transform="translate(-50%, -50%)";
notice.style.position="fixed"; //notice.left = "30vw"; notice.style.top="20vh"; notice.style.bottom="58vh";
    notice.style.border = "solid 1px black"; 
    var header = document.createElement("h1"); header.style.color="#333";
    header.innerHTML =  `GameOver. ${ str } the winner!`;
    notice.appendChild(header); 
    var but = document.createElement("button"); but.style.float="right";
    but.innerHTML=" return ";
    but.addEventListener('click', function(){

 var b=document.querySelector("#play");
b.disabled=false;b.onclick=start;

board.innerHTML = ""
        // lel ard
        obj.floor = []; floor = []; cards = c.slice(); otherCards=[]; handCards= [];
        for(let node of hndCrds){ 
        node.innerHTML = "";
        }
        
        let d = document.getElementById("popup"); 
if(d){       d.parentNode.removeChild(d);      }
        initialize();
                           });
notice.appendChild(but);
    document.body.appendChild(notice);
}
    
      function start(){

if(handCards.length > 0) {return;}
          
let len = cards.length; 
          
          if(len < 1) {
              
let oppCrds = +document.getElementById( "opp" ).innerHTML + (+document.getElementById( "oppbsrat" ).innerHTML * 10);
              
let userCrds = +document.getElementById( "num" ).innerHTML + (+document.getElementById( "bsrat" ).innerHTML * 10);
              
popup(`${oppCrds > userCrds? "Computer is":"You are"}`);
              

return;

}
    for (let i=0; i<4; i++){
    let r = Math.floor(Math.random() * (len )   );
    let e = cards[r] ; 

    let hC = hndCrds[i];
    if(hC.children.length > 0){/* throw " The Slot is Already Occupied! "+r; */ return false;}
    
    hC.appendChild(createImage(e) );
    handCards.push(e);
    cards.splice(r, 1); len--;
      
}    
//
    
if(otherCards.length > 0) {return;}
let ln = cards.length; if(ln < 1) {return;}
    for (let i=0;i<4;i++){
    let R = Math.floor(Math.random() * (ln )   );
    let E = cards[R] ; 
    //hndCrds[i].appendChild(createImage(e) );
    otherCards.push(E);
    cards.splice(R, 1);ln--;
      
}  

}
    initialize();     

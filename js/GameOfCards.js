"use strict";
var c = ["0rd", "0bf", "0bc", "0rh", "1rd", "1bf", "1bc", "1rh", "2rd", "2bf", "2bc", "2rh", "3rd", "3bf", "3bc", "3rh", "4rd", "4bf", "4bc", "4rh", "5rd", "5bf", "5bc", "5rh", "6rd", "6bf", 
"6bc", "6rh", "7rd", "7bf", "7bc", "7rh", "8rd", "8bf", "8bc", "8rh", "9rd", "9bf", "9bc", "9rh", "j1", "j2", "j3", "j4", "q1", "q2", "q3", "q4", "k1", "k2", "k3", "k4"];
var cards = c.slice();
var graveYard1=[];
var graveYard2=[];
var floor = [];
var obj = {floor:floor,cols:[]}
var userTurn = true;
var handCards=[], otherCards=[];
var enemyCards =[]            
  
var rand;
        var te = ["first", "second", "third", "fourth"].slice(' ')

         /* Haloha There Drop is here  */

function GameOfCards(handCard, floorCards){
    
  var obj = {1:[],2:[],3:[],4:[],5:[],6:[],7:[]};
  var objX = {1:[],2:[],3:[],4:[],5:[],6:[],7:[]};
var cands = [], candsX=[], index =0;
for(let koko of floorCards){
       var card = parseInt(koko);
       if(isNaN(card)){index++; continue;}
       if(card == 0 ){card = 10;}
       if(card > handCard){index++; continue;}
       if(card == handCard){cands.push([card]);candsX.push([index]);index++;
                          continue;}
    var OBJ = {1:[ [card] ] ,2:[],3:[],4:[],5:[],6:[] ,7:[]};
      var OBJx = {1:[ [index] ] ,2:[],3:[],4:[],5:[],6:[] ,7:[]};

 for(let k in obj){
 let X =0
   for(let K of obj[k]){
     
     let sum = K.reduce((a,b)=>+a+ +b, 0) + card;
       let arr = [...K, card]; 
     let arrX = [...objX[k][X], index];X++;
     if (sum == handCard){
       cands.push(  arr );
       candsX.push(arrX)
     }
     else if(sum < handCard){
       let num = +k + 1; var ref = OBJ[num]; 
       if(!ref ){ ref = [arr]; OBJx[num] = [arrX]  }
       else { ref.push( arr ); OBJx[num].push(arrX); }
       
     }
 
   }
 }

    for(let k in OBJ){
      let x = 0;
      for(let val of OBJ[k]){
      obj[k].push( val ); objX[k].push(OBJx[k][x] );x++;
      }
    }
  
  ++index;
}

  var ret = {}, max = 0, ref=0;
  for (let i=0;i<candsX.length;i++){
var arr = candsX[i];      
 ret[i] =    [candsX[i], ...candsX.filter((e,x) => { if(i == x){return false;}

 var tt= arr.concat(e);  var bool = tt.filter((v,d)=> d === tt.indexOf(v) ).length === tt.length; if(bool){arr = tt;} 
return bool; } )  ]  ;
let val = ret[i].reduce((a,b)=> {
return a  + (b.length || 0) }, 0);    
if(val > max){max = val ; ref = i ;}
}
  return ret[ref] || [] ;
}

    function sweep(iter){
        while( iter > 0 ){
iter--;
board.removeChild(board.children[0]);           }
    }

            function Bsra(){
                var y = userTurn ? document.querySelector('#bsrat') : document.querySelector("#oppbsrat");
y.innerHTML = +(y.innerHTML)+1;
            }
            function rm(elem){
                
if(elem){      elem.parentNode.removeChild(elem);}       }
var createImage=(name)=>{
   let image = document.createElement("IMG");
    image.id = name;
    image.src = "https://img1.wsimg.com/isteam/ip/74cefcc5-058c-4b60-8ee5-71bec277ef26/" + name + ".jpg";
    //image.style.width = "50px";
    //image.style.height = "75px";
    image.ondragstart = (ev)=>{drag(ev);}

    image.draggable = true;

    return image;
}

/* */


/* */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  //ev.dataTransfer.setData("text", ev.target.id);

}

function drop( data) {
    
    if(data == "" || !data){return false;}
    let ddg = document.getElementById(data);
    if(!ddg){return false;}
    // You want the id and the element? right?
if(ddg && ddg.parentNode.id==board.id){return false;}
    if(ddg){ddg.style.display="inline-block";}
    
    let c = data[0], sum= parseInt(data);
    sum = sum==0?10:sum;
var goop=[];
// When there's no number
    
    if( data == "7rd" ){   
        var elem = document.getElementById("7rd");
        elem.draggable=false;
    var l = obj.floor.length
    if(l == 1) {      Bsra();    obj.floor = [];
        sweep(board.children.length);
        // ("It's a komy!");
        rm(elem);  }
    else if(l == 0 ) {     board.appendChild(elem); obj.floor.push("7rd");   }
        
       else{ obj.floor = [];
        sweep(board.children.length);
        // ("It's a komy!");
        rm(elem);}
        return;
    }
    // komy above
if(!sum){

if(c == 'j'){
let iter = board.children.length; let elementOrig = document.querySelector( "#"+ data  );
    
if(iter == 0) {              
elementOrig.draggable=()=>false;
elementOrig.onselect=()=>false;
elementOrig.ondragstart=()=>false;
board.appendChild(elementOrig); obj.floor.push(data); 

    return;   }
    
obj.floor = [];
    rm(elementOrig);
sweep(iter);

return;
}

// Walad above,k
for(let e of board.children){
if(c == e.id[0]) {  goop.push(e);  }
}
var togo = false;
for(let i of goop){
obj.floor.splice(obj.floor.indexOf(i.id), 1)
board.removeChild(i); togo = true;
}
let elementOrig = document.getElementById(data);
if(togo){ 

    rm(elementOrig);
if(obj.floor.length == 0) {           Bsra();
                   
                                                  }
    return;
 }
else {    

elementOrig.draggable=()=>false;
elementOrig.onselect=()=>false;
elementOrig.ondragstart=()=>false; 
board.appendChild(elementOrig); obj.floor.push(elementOrig.id);  }

return;

}
    




let len = board.children.length -1;



var answer = (GameOfCards(sum, obj.floor))
// bool don't forget it    
var bool = answer.length == 0;
  
if(bool){
    obj.floor.push(data)
     let c = document.getElementById(data);
//handCards.splice(handCards.indexOf(c.id), 1);
c.draggable = false; c.ondragover = ()=>{return false;}

c.draggable=()=>false;
c.onselect=()=>false;
c.ondragstart=()=>false;
    board.appendChild(  c ); 
   }
else {
 var foo = [], boo=[];
for(let i of answer.flat()){let child = board.children[i] || (document.getElementById(obj.floor[i]));
                           // if(!child){continue;}
                            var booVal = (child && child.id) || obj.floor[i];
                            boo.push( booVal );
                            foo.push(child);}
    let pointer = 0;
for(let f of foo){

obj.floor.splice(obj.floor.indexOf(boo[pointer] ), 1);pointer++;
    rm(f);   }
    let c = document.getElementById(data);

(c).parentNode.removeChild(c);
}
    
if(obj.floor.length == 0) {           Bsra();
                          }
}

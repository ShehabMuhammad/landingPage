var images = ["10 - 3 الساعة3.jpg",
"67411684_2359128204302534_6579736154822672384_n.jpg",
"ok.jpg","A_blue_sky11.jfif"];

var imgHolder = document.getElementById("imageHolder");
var index = 3, base = "images/", auto = true;
function nextSlide(){
    index++;
    if( index >= images.length)index=0;
    imgHolder.setAttribute("src", base + images[index]);
    imgHolder.animate([
  { // from
    opacity: 0
  },
  { // to
    opacity: 1
  }
], {duration:1400, iterations:1} );
}

function previousSlide(){
    index--;
    
    if(  index == undefined )index=images.length-1;
    imgHolder.setAttribute("src", base + images[index]);
        imgHolder.animate([
  { // from
    opacity: 0
  },
  { // to
    opacity: 1
  }
], {duration:1400, iterations:1} );
}

function autoSlideShow(num){
    if(auto){ nextSlide(); setTimeout( "autoSlideShow(num)", 2500  ); }
}
function stopShow(){auto=auto?false:true;this.innerHTML = auto?">":"||";}
autoSlideShow(0);
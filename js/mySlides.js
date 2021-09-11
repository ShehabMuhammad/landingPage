var images = ["A_blue_sky11.jfif",
"acapulco-1545208.jpg",
"ocean-view-1311053-1280x960.jpg","sun-by-the-trees-1544340.jpg"];

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

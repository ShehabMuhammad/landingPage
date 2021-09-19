// The images we want to show in the slide show, We can add more, It's helpful to put them in an array..
const images = ["A_blue_sky11.jfif",
"acapulco-1545208.jpg",
"ocean-view-1311053-1280x960.jpg","sun-by-the-trees-1544340.jpg"], base = "images/";

// We grab the element that contains the image..
const imgHolder = document.getElementById("imageHolder");

// The index of the image, And a boolean value indication whether to automate the slideshow or not..
let index = 3, auto = true;
function nextSlide(){
    index++;
    if( index >= images.length)index=0;
    imgHolder.setAttribute("src", base + images[index]);
    imgHolder.animate([
  { 
    opacity: 0
  },
  { 
    opacity: 1
  }
], {duration:1400, iterations:1} );
}

function previousSlide(){
    index--;
    
    if(  index == undefined || index < 0 )index=images.length-1;
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

function autoSlideShow(){
    if(auto){ nextSlide();  }
setTimeout( "autoSlideShow()", 2500  );
}
function stopShow(){auto=auto?false:true;this.innerHTML = auto?">":"||";}
autoSlideShow();

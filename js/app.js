/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 *  SIDE_MENU = unordered list
 *  // an ARRay containing the names/IDs of the sections.. 
 *  ARR = id names of sections,
 *  COLORS = number of COLORS,
 *  frag0 = a document fragment
 * // the name of the active section
 *  activeSection = null;
 *  auto // the auto slide show 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * changeDisplay()
 * hideSIDE_MENU
 * nextSlide
 * previousSlide
 * autoSlideShow
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
const SIDE_MENU = document.createElement("ul"),
    // an ARRay containing the names/IDs of the sections.. 
    ARR = ["Home", "About", "Games", "FAQ", "Contact-Us"],
    COLORS = ["green", "blue", "red", "gray", "orange", "black"],
    frag0 = document.createDocumentFragment(),
    // The IMAGES we want to show in the slide show, We can add more, It's helpful to put them in an ARRay..
    IMAGES = ["A_blue_sky11.jfif",
        "acapulco-1545208.jpg",
        "ocean-view-1311053-1280x960.jpg", "sun-by-the-trees-1544340.jpg"
    ],
    BASE = "images/",
    // We grab the element that contains the image..
    IMG_HOLDER = document.getElementById("imageHolder");

// We use let because it could be changed in the future..
let activeSection = null,
    // The index of the image, And a boolean value indication whether to automate the slideshow or not..
    index = 3,
    auto = true;


SIDE_MENU.setAttribute('id', 'navbar__list');

ARR.slice().forEach((element, i) => {

    let liElem = document.createElement("li");
    liElem.style.backgroundColor = COLORS[i];
    liElem.innerHTML = "<a href=\"#" + element + "\" data-nav=\"" + (element) + "\" target=\"_self\"> " + element + "</a>";
    liElem.classList.add("navSide");
    liElem.setAttribute("data-nav", element);

    //eventually the fragment append it..
    frag0.appendChild(liElem);

});

SIDE_MENU.addEventListener('click', function(ev) {

    ev.stopPropagation();

    let elem = ev.target,
        cords = elem.getBoundingClientRect(),
        dataNav = elem.getAttribute("data-nav");

    if (!dataNav) {
        ev.preventDefault();
        return false;
    }

    if (cords["y"] >= 0 && cords["y"] < cords["height"]) {
        ev.preventDefault();
        return false;
    }

    document.getElementById(dataNav).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });

    ev.preventDefault(); // So that it won't proceed with default action or behaviour.. 

    return false;
});

SIDE_MENU.appendChild(frag0);

document.body.appendChild(SIDE_MENU);

// The suggested setTimeout so we'll know if the user stopped scrolling or not.
function hideSIDE_MENU(yY) {
    if (pageYOffset == yY) {
        SIDE_MENU.style.marginRight = "-100%";
    }
}

setTimeout(
    function() {
        hideSIDE_MENU(pageYOffset);
    },
    4000);

// I used window.onload initially BUT changed it to 'DOMContentLoaded' as per the course suggestion, Because it occurs earlier
window.addEventListener('DOMContentLoaded', function() {

    let navigationElement = document.getElementById("nav"),
        frag = document.createDocumentFragment();

    for (let i = 0; i < ARR.length; i++) {

        let listItem = document.createElement("li");

        listItem.className += " col";

        let hyperLink = document.createElement("A");

        hyperLink.setAttribute("target", "_self");

        hyperLink.classList.add("SectA");

        hyperLink.appendChild(document.createTextNode(ARR[i]));

        hyperLink.onclick = function(ev) {


            if (activeSection) {
                document.getElementById(activeSection).classList.remove("active");
            }

            activeSection = ARR[i];;

            let theSection = document.getElementById(ARR[i]);

            theSection.className += "active";

            // scrollIntoView method was one way to scroll the element intoView, We can also use offSettop and window.scrollTo it achieve the same goal.. 
            theSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
            
            return false;


        }

        hyperLink.setAttribute("href", "#" + ARR[i]);
        listItem.appendChild(hyperLink);
        frag.appendChild(listItem)



    }

    navigationElement.appendChild(frag);
});



const SECTS = ARR.slice().map(e => document.getElementById(e)),
    navEls = document.querySelectorAll(".navSide");

const BUT = document.createElement("button");

BUT.innerHTML = " TOP "; 

BUT.onclick = () => {
    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

BUT.className += " topBtn";
BUT.style.display = "none";
document.body.appendChild(BUT);




// This's the first implementation, It considers the active section is the one closest to the top..
// لكن عندي طريقة تانية كنت شايفها أحسن بتعتبر السيكشن الي موجود في النص هو الأكتيف
function getClosestToTop() {
    let min = Infinity,
        curr = null;
    SECTS.forEach((e, i) => {
        let obj = e.getBoundingClientRect();
        if (Math.abs(obj["y"]) < min) {
            min = Math.abs(obj["y"]);
            curr = e.id;
        }
    });
    if (activeSection) {
        document.getElementById("" + activeSection).classList.remove("active");
    }

    if (curr !== null) {
        sideNavHighLight(curr);
        document.getElementById(curr).classList.add("active");
        activeSection = curr;
    }


}


function getActiveAtMiddle(ev) {

    for (const elem of SECTS) {
        let upperBound = elem.offsetTop;
        if (!upperBound) {
            continue;
        }
        if (pageYOffset + (window.innerHeight / 2 | 0) > upperBound && (pageYOffset + (window.innerHeight / 2 | 0)) < (elem.offsetHeight + upperBound)) {
            if (activeSection) {
                document.getElementById(activeSection).classList.remove("active");
            }
            activeSection = elem.id;
            document.getElementById(elem.id).classList.add("active");
            sideNavHighLight(elem.id);
            break;
        }

    }

}

function sideNavHighLight(elemId) {
    for (let el of navEls) {
        let att = el.getAttribute("data-nav");
        if (att === elemId) {
            if (el.classList.contains("activeNav")) {
                break;
            }
            el.classList.add("activeNav");
        } else {
            el.classList.remove("activeNav");
        }
    }
}

function changeDisplay() {

    BUT.style.display = pageYOffset > 50 ? "block" : "none";
    SIDE_MENU.style.marginRight = "0";
    let yY = pageYOffset;
    setTimeout(
        function() {

            if (pageYOffset == yY) {

                SIDE_MENU.style.marginRight = "-100%";
            }

        }, 4000);
}

//
window.onscroll = function (ev) {

    changeDisplay();
    
    getClosestToTop(); 
    // The specifications said when near the top of view port, That's why the above function is used
    // I personaly prefer to consider the section that is at the middle of the view port to be the active section, If you agree with that, All what you have to do is to uncomment the following statement, and comment the one that's above.  
    // getActiveAtMiddle(ev);

}

const QUESTIONS = ["Who is behind the site?", "What kind of services does the site offer?", "How Can I contact the admin?"],
    ANSWERS = ["Shehab Muhammad. Who is a passionate web developer, with an unstoppable thirst for knoweldge is the creator of this site.",
        "The site offers quite a range of services that includes building, maintaining, and troubleshooting websites and applications.",
        "You can contact the site developer at officialshehab96@gmail.com."
    ];

const faqElem = document.querySelector("#FAQ");
let questionIndex = 0;
const frag2 = document.createDocumentFragment();
for (const question of QUESTIONS) {
    let container = document.createElement("div"),
        newElem = document.createElement("div"),
        newBtn = document.createElement("button"),
        hiddenElem = document.createElement("div");

    newBtn.textContent = "+";
    newBtn.classList.add("expander");
    hiddenElem.textContent = ANSWERS[questionIndex++];
    hiddenElem.style.display = "none";
    newBtn.addEventListener('click', expander);
    container.classList.add("qCont");
    newElem.classList.add("question");
    newElem.textContent = question;
    container.appendChild(newElem);
    container.appendChild(newBtn);
    container.appendChild(hiddenElem)

    frag2.appendChild(container)
}
faqElem.appendChild(frag2);


function expander() {
    let target = this.nextElementSibling;
    let disVal = target.style.display,
        hi = getComputedStyle(target)["height"]
    if (disVal == "none") {
        target.style.display = "block";
        target.style.marginBottom = hi;
        //this.parentElement.style.marginBottom =  this.parentElement.style.marginBottom <= hi ? hi : this.parentElement.style.marginBottom ;
        this.textContent = "x";
    } else {
        target.style.display = "none"
        this.parentElement.style.marginBottom = '';
        this.textContent = "+";
    }

}

function readMoreOrLess(self) {
    let prev = self.previousElementSibling;
    if (prev.getAttribute("used") == 'nope') {

        self.innerHTML = '... read less.';
        prev.setAttribute("used", "yes");

        prev.previousElementSibling.innerHTML += prev.innerHTML;
    } else {

        self.innerHTML = '... read more.';
        prev.setAttribute("used", "nope");

        prev.previousElementSibling.innerHTML = prev
            .previousElementSibling.innerHTML.slice(0,
                prev.previousElementSibling.innerHTML.length - prev.innerHTML.length);
    }
}

window.addEventListener('load', function() {
    let sliceLen = 21;
    document.querySelectorAll(".item span").forEach((element, i) => {
        if (element.innerHTML.length > sliceLen) {
            let firstText = ("" + element.innerHTML).slice(0, sliceLen),
                lastText = element.innerHTML.slice(sliceLen);

            element.innerHTML = firstText;

            if (element.parentElement && element.parentElement.innerHTML) {

                element.parentElement.innerHTML +=
                    '<span used="nope" style="display:none;margin:0;padding:0;">' +
                    lastText +
                    ' </span>' +
                    '<button  class="readMore" onclick="readMoreOrLess(this)">' +
                    '... read more. </button>';
            }
        }
    });
});

// We dispatch the scroll event once the page gets loaded to get the activeSection from the beginning. 
(() => {
    window.dispatchEvent(new Event('scroll'));
})()


function fadeIn() {

    IMG_HOLDER.animate([{ // from
            opacity: 0
        },
        { // to
            opacity: 1
        }
    ], {
        duration: 1400,
        iterations: 1
    });
}

function nextSlide() {
    index++;

    if (index >= IMAGES.length) index = 0;

    IMG_HOLDER.setAttribute("src",
        BASE + IMAGES[index]);

    fadeIn();
}

function previousSlide() {
    index--;

    if (index === undefined || index < 0) index = IMAGES.length - 1;

    IMG_HOLDER.setAttribute("src",
        BASE + IMAGES[index]);

    fadeIn();

}

function autoSlideShow() {
    if (auto) {
        nextSlide();
    }
    setTimeout("autoSlideShow()",
        2500);
}

function stopShow() {
    auto = auto ? false : true;
}

autoSlideShow();

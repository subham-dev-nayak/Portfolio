gsap.to(".box1",{
    x:1500,
    duration :1.5,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"blue",
    scale:0.5,
    repeat:-1,
    yoyo:true,
})
gsap.from(".box2",{
    x:1000,
    y:700,
    duration:1,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"brown",
    repeat:-1,
    yoyo:true,
})
gsap.to(".box3",{
    x:1000,
    y:500,
    duration:3,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"green",
    stagger:0.5,
    repeat:-1,
})
gsap.from(".box4",{
    x:1500,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"goldenrod",
    stagger:0.5,
    repeat:-1,
    yoyo:true,
})
gsap.from(".text-info",{
    y:20,
    opacity:0,
    color:"darkblue",
    duration:1,
    delay:1,
    stagger:0.5,
    scale:0.5,
    repeat:2,
})
var tl = gsap.timeline()
tl.to(".box3",{
    x:1500,
    z:1600,
    rotate:360,
    duration:1.5,
    delay:1,
    repeat:1,
})
var tl = gsap.timeline()
tl.from(".nav-logo",{
    y:-30,
    delay:0.5,
    opacity:0,
    duration:1,
})
tl.from(".nav-menu",{
    y:-20,
    stagger:0.5,
    opacity:0,
    duration:1,
})
var path = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets){
path = `M 10 100 Q  ${dets.x} ${dets.y} 990 100`,
gsap.to("svg path", {
    attr: { d:path },
    duration:0.3,
    ease:"power3.out",
})
})

string .addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2",
    })
})

function myMenuFunction(){
    var menuBth = document .getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    }else{
        menuBth.className = "nav-menu";
    }
}
function downloadCV(){
    const cvLink = "Resume_compressed.pdf";
    window.open(cvLink,"_blank");
}

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",() =>{
    body.classList.toggle("dark");
});


var typingEffect = new Typed(".typedText",{
    strings: ["Frontend Developer", "Coder"],

    loop:true,
    typeSpeed: 120,
    backSpeed:100,
    backDelay:2000,
});

function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");
    if (menuBth.className === "nav-menu"){
        menuBth.className += " responsive";
    }
    else{
        menuBth.className = "nav-menu";
    }
   
}
const sr = ScrollReveal({
    origin: 'top',
    distance:"80px",
    duration: 2000,
    reset:true,
});

sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-info", {delay:200});
sr.reveal(".text-info",{delay:200});
sr.reveal(".text-info",{delay:200});
sr.reveal(".text-info", {delay:200});

sr.reveal(".project-box",{interval:200}); 
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: 'left',
    distance:"80px",
    duration:2000,
    reset:true,
})

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});

gsap.from(".text-info",{
    y:20,
    opacity:0,
    color:"red",
    duration:2,
    delay:1,
    stagger:0.5,
    scale:0.5,
})

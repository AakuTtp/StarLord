let sectionbgchnger = document.getElementById("sectioncolorchanger");
let sectiontext = document.getElementById("sectiontext");
let section_link = document.getElementById("section_link");
sectionbgchnger.addEventListener('mouseover',MySectionBg);
function MySectionBg(){
    sectionbgchnger.style.opacity = 0;
    sectiontext.style.opacity = 1;
    sectiontext.style.transitionDelay = "1s";
    section_link.style.left = "230px";
}
let fourthpart = document.getElementById('fourthpart');
var text = document.getElementById('fourthparttext');
scroll = window.pageYOffset;
document.addEventListener('scroll', function(){
    var offset =window.pageYOffset;
    scroll = offset;
    text.style.top = scroll/34 + "%"
})
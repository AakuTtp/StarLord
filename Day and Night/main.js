//Globle Variables
let nav_links = document.getElementById('nav_links');
let bars = document.getElementById('bars');
let cursor = document.getElementById('cursor');
let nav_linksA = document.querySelectorAll('header nav a');
let facebook_header = document.getElementById('facebook');
let Youtube_header = document.getElementById('youtube');
let headerbuttons = document.getElementById('headerbuttons');
let sectionlink = document.getElementById('sectiontexta');
let sectionImage = document.getElementById('sectionimg');
//Start Coding



bars.addEventListener('click', myBartoogle);
function myBartoogle(){
    bars.classList.toggle('toggle');
}
//Mouse Pointer Effect

window.addEventListener('mousemove', function(e){
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.left = x +'px';
    cursor.style.top = y +'px';
});
// mouseover on header links 
function mouseover_mouseout(){
    
    nav_links.addEventListener('mouseover', headerlinkshover);
    function headerlinkshover(){
        cursor.style.transform = 'scale(4)';
        cursor.style.background = '#000';
}
    nav_links.addEventListener('mouseout', headerlinkshoverout);
    function headerlinkshoverout(){
        cursor.style.transform = 'scale(1)';
        cursor.style.background =  'rgba(0,0,0,0.1)';
    }
    bars.addEventListener('mouseover', barsover);
    function barsover(){
        cursor.style.transform = "scale(2)";
        cursor.style.background = '#000';
    }
    bars.addEventListener('mouseout', barsout);
    function barsout(){
        cursor.style.transform = "scale(1)";
        cursor.style.background =  'rgba(0,0,0,0.1)';
    }
    facebook_header.addEventListener('mouseover', headerfacebook);
    function headerfacebook(){
        cursor.style.transform = 'scale(0.1)';
        facebook_header.style.color = "cornflowerblue";

    }
    facebook_header.addEventListener('mouseout', headerfacebookoff);
    function headerfacebookoff(){
        cursor.style.transform = 'scale(1)';
        facebook_header.style.color = "black";
        facebook_header.style.transition = '0.5s linear';
    };
    Youtube_header.addEventListener('mouseover', headeryoutube);
    function headeryoutube(){
        cursor.style.transform = 'scale(0.1)';
        Youtube_header.style.color = "red";
    }
    Youtube_header.addEventListener('mouseout', headeryoutubeoff);
    function headeryoutubeoff(){
        cursor.style.transform = 'scale(1)';
        Youtube_header.style.color = "black";

    }
    sectionImage.addEventListener('mouseover', SectionImageCursorBig);
    function SectionImageCursorBig(){
        cursor.style.transform = 'scale(9)';
        cursor.style.border = '1px solid #000';
    }
    sectionImage.addEventListener('mouseout', SectionImageCursorsmall);
    function SectionImageCursorsmall(){
        cursor.style.transform = 'scale(1)';
        cursor.style.border = '2px solid #000';
    }
}
mouseover_mouseout();
// Nav Open Or Close
nav_open = false;
let nav_open_close = function(){
    if(nav_open === false){
        nav_links.style.width = "100%";
        headerbuttons.style.left = '50%';
        headerbuttons.style.opacity = '1';
        headerbuttons.style.transition = '0.9s ease-in-out';
        let navlinksAlength = nav_linksA.length;
        for(i = 0; i < navlinksAlength; i++){
            nav_linksA[i].style.visibility = 'visible';
        }
        nav_open = true;
    }
    else if(nav_open === true){
        nav_links.style.width = '0%';
        headerbuttons.style.left = '-50%';
        headerbuttons.style.transition = '0.3s ease-in-out';
        let navlinksAlength = nav_linksA.length;
        for(i = 0; i < navlinksAlength; i++){
            nav_linksA[i].style.visibility = 'hidden';
        }
        nav_open = false;
    }
}
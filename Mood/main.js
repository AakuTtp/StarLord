invert = false;
let changeTheme = function(){
    let screen = document.querySelector('html');
    let iconcolor = document.getElementById('theme');
    if (invert === false){
        screen.style.filter = 'invert(1)';
        iconcolor.style.color = 'cornflowerblue';
        invert = true;
    }else if(invert === true){
        screen.style.filter = 'invert(0)';
        iconcolor.style.color = '#000';
        invert = false;
    }
  
}
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    const scroable = document.documentElement.scrollHeight - innerHeight;
    if(scrolled >= 650){
        let pageabout_us = document.getElementById('aboutus');
        pageabout_us.style.opacity = '1';
        pageabout_us.style.marginTop = "0";
    }
    else if(scrolled >= 20){
        let headerbox = document.getElementById('headerBox');
        headerbox.style.opacity = '1';
        headerbox.style.top = '75%';
        
    }
});
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    const scroable = document.documentElement.scrollHeight - innerHeight;
    if(scrolled >= 2400){
        let wrappergallery = document.getElementById('wrappergallery');
        wrappergallery.style.opacity = '1';
        wrappergallery.style.left= '0';
    }
});

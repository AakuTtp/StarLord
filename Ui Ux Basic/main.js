//cursor
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e){
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

//navHover
let header_a_links = document.querySelectorAll('header nav a');
header_a_links.forEach(link =>  {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor_grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor_grow');
    });

});



//Header Bars
nav_bar_wide = false;
let header_bars = document.getElementById('header_bars');
let Header = document.getElementById('header');
let header_links = document.querySelectorAll('header nav a span');
let header_wide_narrow = function(){
    if(nav_bar_wide === false){
        Header.style.width = '500px';
        let header_links_length = header_links.length;
        for(i = 0; i < header_links_length; i++){
            header_links[i].style.left = '80px';
            header_links[i].style.opacity = '1';
            header_links[i].style.transition = '1s ease-in-out';
        }
        
        nav_bar_wide = true;
    }else if (nav_bar_wide === true){
        Header.style.width = "10vh";
        let header_links_length = header_links.length;
        for(i = 0; i < header_links_length; i++){
            header_links[i].style.left = '-120px';
            header_links[i].style.opacity = '0';
            header_links[i].style.transition = '0.8s ease-in-out';
        }
        nav_bar_wide = false;
    }
}

// Main
let home = document.getElementById('home');
let portfolio = document.getElementById('portfolio');
let body = document.querySelector('body');
let homepage = document.getElementById('page1');
let portfoliopage = document.getElementById('portfoliopage');
//code Home
home.addEventListener('click', Myhome);
function Myhome(){
    body.style.background = '#303A52';
    cursor.style.background = 'transparent';
    Header.style.background = '#212838';
    header_a_links.forEach(links => {
        links.style.background = "#303A52";
        links.style.color = "#fff";
    })
    homepage.style.visibility = 'visible';
    portfoliopage.style.visibility = 'hidden';
}

// Portfolio
let sectionportfolio = document.getElementById('sectionPortfolio');
let portprofile = document.getElementById('profile');
let portfolioButton = document.getElementById('portfolioButton');
let numbersectionportfolio = document.getElementById('numbersectionTextPortfolio');
portfolio.addEventListener('click', Myportfolio);
function Myportfolio(){
    portfolio_open = false;
    if (portfolio_open === false){
        body.style.background = '#88BEF5';
        cursor.style.border = '2px dotted #000';
        Header.style.background = '#304A65';
        header_a_links.forEach(links => {
            links.style.background = "#88BEF5";
            links.style.color = "#000";
        });
        homepage.style.visibility = 'hidden';
        portfoliopage.style.visibility = 'visible';
        sectionportfolio.style.top = '0px';
        portprofile.style.right = '60px';
        portfolioButton.style.bottom = '150px';
        portfolio_open = true;
    }else if(portfolio_open === true){
        body.style.background = '#88BEF5';
        cursor.style.border = '2px dotted #000';
        Header.style.background = '#304A65';
        header_a_links.forEach(links => {
            links.style.background = "#88BEF5";
            links.style.color = "#000";
        });
        homepage.style.visibility = 'hidden';
        portfoliopage.style.visibility = 'hidden';
        sectionportfolio.style.top = '-600px';
        portprofile.style.right = '-500px';
        portfolioButton.style.bottom = '-550px';
        portfolio_open = false;
    }
    }

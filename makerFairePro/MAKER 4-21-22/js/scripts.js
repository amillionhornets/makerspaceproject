/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var pages = ['page1','page2','page3'];
var projects = ['project1','project2']
function moveRight(){
    document.getElementById(pages[0]).classList.add("hidden")
    let first = pages.shift();
    pages.push(first);
    

    document.getElementById(pages[0]).classList.remove("hidden")
    
    

}
function moveLeft(){
    document.getElementById(pages[0]).classList.add("hidden")
    let first = pages.pop();
    pages.unshift(first);
    document.getElementById(pages[0]).classList.remove("hidden")
}
function moveRightProjects(){
    document.getElementById(projects[0]).classList.add("hidden")
    let first = projects.shift();
    projects.push(first);
    document.getElementById(projects[0]).classList.remove("hidden")
}
function moveLeftProjects(){
    document.getElementById(projects[0]).classList.add("hidden")
    let first = projects.pop();
    projects.unshift(first);
    document.getElementById(projects[0]).classList.remove("hidden")
}
var featVid = ["https://www.youtube.com/embed/vErOYuzx-Fc", "https://www.youtube.com/embed/Lfa7eQJ4Bh8?rel=0", "https://www.youtube.com/embed/H8Ski_qyaYU?rel=0", "https://www.youtube.com/embed/y6soFZlC4R0?rel=0", "https://www.youtube.com/embed/tZDtihHvyAI?rel=0", "https://www.youtube.com/embed/IYtBRMIvuo0?rel=0", "https://www.youtube.com/embed/IYtBRMIvuo0?rel=0", "https://www.youtube.com/embed/-Hrl_-X57N8?rel=0", "https://www.youtube.com/embed/aG8j9ZNOjKA?rel=0", "https://www.youtube.com/embed/EYAlJhYQcG0?rel=0", "https://www.youtube.com/embed/JHN_b3YmKNA?rel=0", "https://www.youtube.com/embed/JHN_b3YmKNA?rel=0", "https://www.youtube.com/embed/yIP8LFz77uM?rel=0", "https://www.youtube.com/embed/Gp0n2BB-hE8?rel=0", "https://www.youtube.com/embed/GmwSJUbp-w4?rel=0", "https://www.youtube.com/embed/vErOYuzx-Fc?rel=0", "https://www.youtube.com/embed/yEdu_Fiy4Aw?rel=0", "https://www.youtube.com/embed/WnyWqDQBDLU?rel=0"];
var arrLength = featVid.length
function randomFeature(){
    let randomNum = parseInt(Math.floor(Math.random() * arrLength));
    document.getElementById('Featured').src = featVid[randomNum];
}
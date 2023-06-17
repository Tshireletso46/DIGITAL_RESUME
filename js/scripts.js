// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU MOBILE
if(navToggle){
    navToggle.addEventlistner('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.ckassList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink =document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when each nav__link is clicked, the show-menu gets removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ADD BLUR TO HEADER 

// EMAIL JS

// SHOW SCROLL UP

// SCROLL SECTIONS ACTIVE LINK

// SCROLL REVEAL ANIMATION 

//  Declare Variables
let body = document.querySelector('body')
let mobileHeader = document.querySelector('.mobile-header')
let menuToggle = document.querySelector('.mobile-header_menu-toggle')
let menuLinks = document.querySelectorAll('.mobile-header_link')

// Toggle the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active')
  mobileHeader.classList.toggle('mobile-header--open')
  body.classList.toggle('disable-scroll')
})

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menuToggle.classList.remove('is-active')
    mobileHeader.classList.remove('mobile-header--open')
    body.classList.remove('disable-scroll')
  })
}

// PDF
pdfjsLib.getDocument('helloworld.pdf')

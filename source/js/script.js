'use strict';

/* menu*/

let menuButton = document.querySelector('.navigation__menu-toggle');
let menuList = document.querySelector('.navigation__menu-list');

function openHideMenu() {
  if (menuButton.classList.contains('navigation__menu-toggle--hide-menu')) {
    menuButton.classList.remove('navigation__menu-toggle--hide-menu');
    menuButton.classList.add('navigation__menu-toggle--open-menu');

    menuList.classList.add('menu-list--open');
  }
  else if (menuButton.classList.contains('navigation__menu-toggle--open-menu')) {
    menuButton.classList.remove('navigation__menu-toggle--open-menu');
    menuButton.classList.add('navigation__menu-toggle--hide-menu');

    menuList.classList.remove('menu-list--open');
  }
}

menuButton.addEventListener("click", openHideMenu);

/*add goods*/

let productBuyButtons = document.querySelectorAll('.goods__cat');
let addcatPopup = document.querySelector('.addcat-popup');
let addcatButton = document.querySelector('.addcat-popup__link');
let addButton1 = document.querySelector('.product__link');
let addButton2 = document.querySelector('.process-prod__link');

function openSelectPopup() {
  if (addcatPopup.classList.contains('addcat-popup--active')) {
    addcatPopup.classList.remove('addcat-popup--active');
  }
  else {
    addcatPopup.classList.add('addcat-popup--active');
  }
}

for (let i = 0; i < productBuyButtons.length; i++) {
  productBuyButtons[i].addEventListener("click", openSelectPopup);
}

function openSelectPopupOtherButtons(button) { 
  if (button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      openSelectPopup();
    }, false);
  }
}

openSelectPopupOtherButtons(addButton1);
openSelectPopupOtherButtons(addButton2);
openSelectPopupOtherButtons(addcatButton);
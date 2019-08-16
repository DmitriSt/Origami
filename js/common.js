var leftMenu = document.getElementsByClassName('main-menu__left');
var rightMenu = document.getElementsByClassName('main-menu__right');
var leftText = document.getElementsByClassName('header__title');
var rightText = document.getElementsByClassName('header-text_dark');
var form = document.getElementById('form');
var formSourceBottom = form.getBoundingClientRect().top - window.pageYOffset;
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formPhone = document.getElementById('phone');
var submit = document.getElementById('submit');
var validIcon = document.getElementsByClassName('valid-icon');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var mobileMenuItems = document.getElementsByClassName('mobile-menu__items');
var mobileMenuClose = document.getElementsByClassName('mobile-menu__close');
var formValid = document.getElementsByClassName('form__send');
var formTextarea = document.getElementById('form__textarea');
var pattern = /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/

function inputChangeName(e) {
  var target = e.target;
  if (target.value == '' || target.value.length < 4) {
    target.nextSibling.nextSibling.style.display="none";
  } else {
    target.nextSibling.nextSibling.style.display="block";
  }
}

function inputChangeEmail(e) {
  var target = e.target;
  if (pattern.test(target.value) == false) {
    target.nextSibling.nextSibling.style.display="none";
  } else {
    target.nextSibling.nextSibling.style.display="block";
  }
}

function inputChangePhone(e) {
  var target = e.target;
  if (target.value < '0' || target.value > '9' || target.value.length < 7) {
    target.nextSibling.nextSibling.style.display="none";
  } else {
    target.nextSibling.nextSibling.style.display="block";
  }
}

var valid;
function validate() {
  valid = false;
  if (formName.value == '' || formName.value.length < 4 ||
      pattern.test(formEmail.value) == false ||
      formPhone.value < '0' || formPhone.value > '9' ||
      formTextarea.value == '' || formTextarea.value.length < 4) {
    valid = false;
} else {
  valid = true;
}
  return valid;
}

var distanceTop = form.getBoundingClientRect().top;
window.onscroll = function(){
	distanceTop = form.getBoundingClientRect().top;
	if (window.pageYOffset < distanceTop) {
		form.classList.remove('animate-form');
	} else {
		form.classList.add('animate-form');
  }
};

var init = function() {
  leftMenu[0].setAttribute('class', 'main-menu__left menu-animation-left');
  rightMenu[0].setAttribute('class', 'main-menu__right menu-animation-right');
  leftText[0].setAttribute('class', 'header__title header-title-animation');
  rightText[0].setAttribute('class', 'header-text_dark header-text-animation');

  mobileMenu[0].onclick = function() {
    mobileMenuItems[0].classList.add('open');
  }

  mobileMenuClose[0].onclick = function() {
    mobileMenuItems[0].classList.remove('open');
  }

  submit.onclick = function() {
    if (valid == true) {
      formValid[0].style.display='block';
    }
  }
}

window.onload = init;

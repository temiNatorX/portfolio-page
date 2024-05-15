function topOfPage() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error-message');


function mySunnySide(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/sunnyside-project/"
  link.target = "_blank"
  link.click()
}

function myAgeCalculator(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/age-calculator-app/"
  link.target = "_blank"
  link.click()
}

function mySocialLinks(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/social-links-profile/"
  link.target = "_blank"
  link.click()
}

function myCrowdFunding(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/crowdfunding-product/"
  link.target = "_blank"
  link.click()
}

function myIntroComponent(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/intro-component/"
  link.target = "_blank"
  link.click()
}

function myTipCalculator(){
  var link = document.createElement("a")
  link.href = "https://teminatorx.github.io/tip-calculator-app/"
  link.target = "_blank"
  link.click()
}

function formSubmit(){
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const subjectInput = document.getElementById('subject');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessages = document.querySelectorAll('.error-message');

  if (nameInput.value === '') {
    nameInput.classList.add('error');
    errorMessages[0].textContent = 'Please enter your name.';
    return false;
  } else {
    nameInput.classList.remove('error');
    errorMessages[0].textContent = '';
  }


  if (subjectInput.value === '') {
    subjectInput.classList.add('error');
    errorMessages[1].textContent = 'Please enter a subject.';
    return false;
  } else {
    subjectInput.classList.remove('error');
    errorMessages[1].textContent = '';
  }


  if (emailInput.value === '' || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    emailInput.classList.add('error');
    errorMessages[2].textContent = 'Please enter a valid email address.';
    return false;
  } else {
    emailInput.classList.remove('error');
    errorMessages[2].textContent = '';
  }

  if (messageInput.value === '') {
    messageInput.classList.add('error');
    errorMessages[3].textContent = 'Please enter your message.';
    return false;
  } else {
    messageInput.classList.remove('error');
    errorMessages[3].textContent = '';
  }
 
}
//Page selection
let landingPage = document.querySelector('.landing-page');
const problemPage = document.querySelector('.problem');
const problemHelpPage = document.querySelector('.problem-help');
const explainProblemPage = document.querySelector('.explain-problem');
const prototypePage = document.querySelector('.prototype');
const prototypeHelpPage = document.querySelector('.prototype-help');
const explainPrototypePage = document.querySelector('.explain-prototype');
const testingPage = document.querySelector('.testing');
const testingHelpPage = document.querySelector('.testing-help');

//Putting all pages on one array for easy iteration later
const pageList = [landingPage, problemPage, problemHelpPage,explainProblemPage, prototypePage, prototypeHelpPage, explainPrototypePage, testingPage, testingHelpPage];

//button selection
const startBtn = document.querySelector('#start'),  
      yesProbBtn = document.querySelector('#yes-problem'),
      noProbBtn = document.querySelector('#no-problem'), 
      probHelpDoneBtn = document.querySelector('#problem-help-done-btn');


//iterates through all pages and adds class 'display-none'
const disappearAll = function() {
  for(let i = 0; i < pageList.length; i++ ) {
    pageList[i].classList.add('display-none');
    console.log(pageList[i])
  }
}

function switchOut(page1, page2) {
  page1.classList.add('display-none');
  page2.classList.remove('display-none');
}


const startApp = function() {

}

const addButtonEventListeners = function() {
  startBtn.addEventListener('click', () => {
    switchOut(landingPage, problemPage);

  });
}



const app = function() {
  startApp();
  addButtonEventListeners();

  

}

app();

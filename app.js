//Page selection
const landingPage = document.querySelector('.landing-page');
const problemPage = document.querySelector('.problem');
const problemHelpPage = document.querySelector('.problem-help');
const explainProblemPage = document.querySelector('.explain-problem');
const ideaPage = document.querySelector('.idea');
const ideaHelpPage = document.querySelector('.idea-help');
const explainIdeaPage = document.querySelector('.explain-idea');
const prototypePage = document.querySelector('.prototype');
const prototypeHelpPage = document.querySelector('.prototype-help');
const explainPrototypePage = document.querySelector('.explain-prototype');
const testingPage = document.querySelector('.testing');
const testingHelpPage = document.querySelector('.testing-help');
const explainTestingPage = document.querySelector('.explain-testing');
const summaryPage = document.querySelector('.summary');

//Putting all pages on one array for easy iteration later
const pageList = [landingPage, problemPage, problemHelpPage,explainProblemPage,ideaPage, ideaHelpPage, explainIdeaPage, prototypePage, prototypeHelpPage, explainPrototypePage, testingPage, testingHelpPage, explainTestingPage, summaryPage];

//button selection
const startBtn = document.querySelector('#start'),  
      yesProbBtn = document.querySelector('#yes-problem'),
      noProbBtn = document.querySelector('#no-problem'), 
      probHelpDoneBtn = document.querySelector('#problem-help-done-btn'),
      doneProbBtn = document.querySelector('#done-problem'),
      yesIdeaBtn = document.querySelector('#yes-idea'),
      noIdeaBtn = document.querySelector('#no-idea'),
      ideaHelpDoneBtn = document.querySelector('#idea-help-done-btn'),
      doneIdeaBtn = document.querySelector('#done-idea'),
      yesProtBtn = document.querySelector('#yes-prototype'),
      noProtBtn = document.querySelector('#no-prototype'),
      protHelpDoneBtn = document.querySelector('#prototype-help-done-btn'),
      doneProtBtn = document.querySelector('#done-prototype'),
      yesTestBtn = document.querySelector('#yes-test'),
      noTestBtn = document.querySelector('#no-test'),
      testingHelpDoneBtn = document.querySelector('#testing-help-done-btn'),
      doneTestingBtn = document.querySelector('#done-testing'),
      restartBtn = document.querySelector('#restart');

//Text Area Selection
const probExplainBox = document.querySelector('#problem-explanation');
const ideaExplainBox = document.querySelector('#idea-explanation');
const protExplainBox = document.querySelector("#prototype-explanation");
const testingExplainBox = document.querySelector('#testing-explanation');

//Pararaph Selections
const problemSummary = document.querySelector('#problem-summary');
const ideaSummary = document.querySelector('#idea-summary');
const protSummary = document.querySelector('#prototype-summary');
const testSummary = document.querySelector('#testing-summary');

//Update summary function
const updateSummaries = function() {
  problemSummary.textContent = problemExplanation;
  ideaSummary.textContent = ideaExplanation;
  protSummary.textContent = prototypeExplanation;
  testSummary.textContent = testingExplanation;
}

//Instance Variables for User Input
let problemExplanation;
let ideaExplanation;
let prototypeExplanation;
let testingExplanation;

//Function to reset guide
const reset = function() {
  problemExplanation = '';
  ideaExplanation = '';
  prototypeExplanation = '';
  testingExplanation = '';
  switchOut(summaryPage, landingPage);

  const removeAnimations = function() {
    pageList.forEach(function(page){
      page.classList.remove('fade');
      page.classList.remove('float');
    })
  }

  removeAnimations();
}

//iterates through all pages and adds class 'display-none'
const disappearAll = function() {
  for(let i = 0; i < pageList.length; i++ ) {
    pageList[i].classList.add('display-none');
    console.log(pageList[i])
  }
}

function switchOut(page1, page2) {
  
  page1.classList.add('float');
  page2.classList.add('fade');
  setTimeout(function(){
  page1.classList.add('display-none');
  page2.classList.remove('display-none');

  // page2.classList.remove('fade');
 }, 600);
  
 page2.classList.remove('fade');
}

//Checks textarea to make sures its filled, sets returns variable with textarea.value
const checkField = function(ta, page1, page2) {
  if(ta.value === ''){
    
  } else {
    let variable = ta.value;
    ta.value = '';
    switchOut(page1, page2);
    
    return variable;
  }
}

const addButtonEventListeners = function() {
  startBtn.addEventListener('click', () => {
    switchOut(landingPage, problemPage);
  });

  yesProbBtn.addEventListener('click', () => {
    switchOut(problemPage, explainProblemPage);
  });

  probHelpDoneBtn.addEventListener('click', () => {
    switchOut(problemHelpPage, explainProblemPage);
  });

  noProbBtn.addEventListener('click', () => {
    switchOut(problemPage, problemHelpPage);
  });

  doneProbBtn.addEventListener('click', () => {

    problemExplanation = checkField(probExplainBox, explainProblemPage, ideaPage);
  });

  yesIdeaBtn.addEventListener('click', () => {
    switchOut(ideaPage, explainIdeaPage);
  });

  ideaHelpDoneBtn.addEventListener('click', () => {
    switchOut(ideaHelpPage, explainIdeaPage);
  });

  noIdeaBtn.addEventListener('click', () => {
    switchOut(ideaPage, ideaHelpPage);
  });

  doneIdeaBtn.addEventListener('click', () => {
    ideaExplanation = checkField(ideaExplainBox, explainIdeaPage, prototypePage);
  });

  yesProtBtn.addEventListener('click', () => {
    switchOut(prototypePage, explainPrototypePage);
  });

  noProtBtn.addEventListener('click',() => {
    switchOut(prototypePage, prototypeHelpPage);
  });

  protHelpDoneBtn.addEventListener('click', () => {
    switchOut(prototypeHelpPage, explainPrototypePage);
  });

  doneProtBtn.addEventListener('click', () => {
    prototypeExplanation = checkField(protExplainBox, explainPrototypePage, testingPage);
  });

  yesTestBtn.addEventListener('click', () => {
    switchOut(testingPage, explainTestingPage);
  });

  noTestBtn.addEventListener('click', () => {
    switchOut(testingPage, testingHelpPage);
  });

  testingHelpDoneBtn.addEventListener('click', () => {
    switchOut(testingHelpPage, explainTestingPage);
  });

  doneTestingBtn.addEventListener('click', () => {
    // testingExplanation = testingExplainBox.value;
    // testingExplainBox.value = '';

    testingExplanation = checkField(testingExplainBox, explainTestingPage, summaryPage);
    updateSummaries();
    });

  restartBtn.addEventListener('click', () => {
    reset();
  });
}
const app = function() {
  addButtonEventListeners();
}

app();


    let score=0;
    let numberofQuestions= 10;
    let answerArray= ['b','b','d','b','b','c','b','c','d','c'];

    // let q1 = document.forms['trivia']['q1'].value;
    // let q2= document.forms['trivia']['q2'].value;
    // let q3 = document.forms['trivia']['q3'].value;
    // let q4 = document.forms['trivia']['q4'].value;
    // let q5 = document.forms['trivia']['q5'].value;
    // let q6 = document.forms['trivia']['q6'].value;
    // let q7 = document.forms['trivia']['q7'].value;
    // let q8 = document.forms['trivia']['q8'].value;
    // let q9 = document.forms['trivia']['q9'].value;
    // let q10 = document.forms['trivia']['q10'].value;

  let questions= document.querySelectorAll("div.question")
  questions[0].style.display="block"
  questions[1].style.display="block"
  questions[2].style.display="block"
  questions[3].style.display="block"
  questions[4].style.display="block"
  questions[5].style.display="block"
  questions[6].style.display="block"
  questions[7].style.display="block"
  questions[8].style.display="block"
  questions[9].style.display="block"
  questions[10].style.display="block"

 function numberofQuestions() {
    let numberofQuestions = Math.floor(questions.random) * (questions.length);
    document.getElementById = numberofQuestions.innerHTML = questions[random]
 }


  // questions[0].style.display="hidden"
  // questions[1].style.display="hidden"
  // questions[2].style.display="hidden"
  // questions[3].style.display="hidden"
  // questions[4].style.display="hidden"
  // questions[5].style.display="hidden"
  // questions[6].style.display="hidden"
  // questions[7].style.display="hidden"
  // questions[8].style.display="hidden"
  // questions[9].style.display="hidden"
  // questions[10].style.display="hidden"



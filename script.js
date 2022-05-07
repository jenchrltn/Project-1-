function getScore(){
    let score=0;
    let numberofQuestions= 10;
    let answerArray= ['b','b','d','b','b','c','b','c','d','c'];

    let q1 = document.forms['trivia']['q1'].value;
    let q2= document.forms['trivia']['q2'].value;
    let q3 = document.forms['trivia']['q3'].value;
    let q4 = document.forms['trivia']['q4'].value;
    let q5 = document.forms['trivia']['q5'].value;
    let q6 = document.forms['trivia']['q6'].value;
    let q7 = document.forms['trivia']['q7'].value;
    let q8 = document.forms['trivia']['q8'].value;
    let q9 = document.forms['trivia']['q9'].value;
    let q10 = document.forms['trivia']['q10'].value;

    for(let  i = 1; i <= numberofQuestions; i++) {
        if (eval('q' + i) == '') { 
         alert(`wrong${i}`);
         }
        }

      for (let i= 1; i <= numberofQuestions; i++){
     }
    
     if (eval('q' + i) == answerArray[i= -1]){
         score++;
     }
    }

     



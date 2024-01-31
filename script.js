console.log("yes");
let correct = 0;
// a) Vincent van Gogh
// b) Pablo Picasso
// c) Leonardo da Vinci
// d) Michelangelo
let question = [
{
  question : "What is the capital of Australia?",
   answer :[
    {text:"Sydney",correct:"false"},
     {text:"Melbourne" , correct:"false"}, 
    {text:"Canberra" , correct:"true"},
    {text:"Perth" , correct:"false"}
   ]
},
{
    question : "Who painted the Mona Lisa?",
     answer :[
      {text:"Vincent van Gogh",correct:"false"},
       {text:"Pablo Picasso" , correct:"false"}, 
      {text:"Leonardo da Vinci" , correct:"true"},
      {text:"Michelangelo" , correct:"false"}
     ]
},
{
    question : "What is the largest ocean in the world?",
     answer :[
      {text:"Atlantic Ocean",correct:"false"},
       {text:"Indian Ocean" , correct:"false"}, 
      {text:"Arctic Ocean" , correct:"false"},
      {text:"Pacific Ocean" , correct:"true"}
     ]
  },
  {
    question : `Which planet is known as the "Red Planet"?`,
     answer :[
      {text:"Venus",correct:"false"},
       {text:"Mars" , correct:"true"}, 
      {text:"Jupiter" , correct:"false"},
      {text:"Saturn" , correct:"false"}
     ]
  },
  {
    question : `Who wrote the play "Romeo and Juliet"?`,
     answer :[
      {text:"William Shakespeare",correct:"true"},
       {text:"Jane Austen" , correct:"false"}, 
      {text:"Charles Dickens" , correct:"false"},
      {text:"F. Scott Fitzgerald" , correct:"false"}
     ]
  }









]
let questionelement = document.querySelector('#question');
let answer = document.querySelector(".answer-butoon");
let next = document.querySelector("#next-btn");
let currquestion = -1;
let score = 0;

function showquestion(){
    // resetstate();
   
let questionno = currquestion+1;
let questiontxt = question[currquestion].question;
questionelement.innerHTML = questionno+". "+questiontxt;


}
function answeroption(){
   
let options = question[currquestion].answer;
for(option of options){
const button = document.createElement("button");
button.innerHTML = option.text;
button.classList.add("btn");
button.dataset.correct = option.correct;
console.log(button.dataset.correct);
answer.appendChild(button);

// button.addEventListener("click" , selectanswer);
}

}

function resetstate(){
    let flag = true;
next.style.display = "none";
while(answer.firstChild){
    answer.removeChild(answer.firstChild);
}
// console.log("batmick");
// console.log("yes");
currquestion++;
if(currquestion == question.length)
{
    questionelement.innerHTML = `Yay you solved ${correct}/5 questions`;
}
console.log(currquestion);
showquestion();
answeroption();
let btn = document.querySelectorAll(".btn");
for(btns of btn)
{
    btns.addEventListener("click" , (event)=>{
        if(event.target.dataset.correct == "true"  )
        {
            console.log("right");
            event.target.style.background = "greenyellow";
            next.style.display = "block";
            if(flag == true)
            { correct++;}
        }
        else {
            event.target.style.background = "red";
            next.style.display = "block";
            flag = false;
        }
    })
}
}
resetstate();


next.addEventListener("click" , resetstate);

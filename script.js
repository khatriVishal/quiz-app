console.log("yes");
let correct = 0;

let question = [
{
  question : "Akash ka kisne kata?",
   answer :[
    {text:"aayushi",correct:"false"},
     {text:"mohit" , correct:"false"}, 
    {text:"kisine nahi" , correct:"false"},
    {text:"dono ne (mohit and ayushi)" , correct:"true"}
   ]
},
{
    question : "Mohit ki kitni gf hai?",
     answer :[
      {text:"1",correct:"false"},
       {text:"2" , correct:"false"}, 
      {text:"3" , correct:"false"},
      {text:"Uske toh bf hai" , correct:"true"}
     ]
},
{
    question : "Mohit ka bff kaun hai?",
     answer :[
      {text:"aditi",correct:"false"},
       {text:"bhaskar" , correct:"false"}, 
      {text:"abhishek" , correct:"false"},
      {text:"woh toh mohit hi bta sakta hai" , correct:"true"}
     ]
  },
  {
    question : "College se package ka kya umeed hai?",
     answer :[
      {text:"1-3 lpa",correct:"false"},
       {text:"3-8 lpa" , correct:"false"}, 
      {text:"8-12 lpa" , correct:"false"},
      {text:"koi ummed nhi hai" , correct:"true"}
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
    questionelement.innerHTML = `Yay you solved ${correct}/4 questions`;
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

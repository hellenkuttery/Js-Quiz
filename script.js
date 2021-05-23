console.log("bağlantıdayım")
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices
    this.answer=answer;
}

Question.prototype.AnswerCheck=function(answer){
 if (this.answer==answer){
     console.log("true")
 }else{
     console.log(false)
 }
}

function Quiz(questions){
    this.questions=questions
    this.score=0;
    this.questionIndex=0;
}
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.isFinish=function(){
   return this.questionIndex.lenght===this.questionIndex
}


Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();
    if (question.AnswerCheck(answer)) {
        this.score++
    }
    this.questionIndex++;
}

const q1=new Question("Which of the following is not a programming language?",["Java","Pyhton","HTML","C++"],"HTML")
console.log(q1)
const q2=new Question("Which of these is an interface between a user and the kernel? ",["Oracle","Shell","Linux","Window"],"Shell")
const q3=new Question(" Which of the following is not a high level programming language?",
["Assembly","Java","Python","C++"],"Assembly")

var questions=[q1,q2,q3];

var quiz=new Quiz(questions)

loadQuestion();

function loadQuestion(){
    if (quiz.isFinish()){
        // ShowResult
    }else{
        var question=quiz.getQuestion();
        var choices=question.choices;
        document.querySelector("#questionDiv").textContent=question.text
      
        for (var i=0;i<choices.length;i++){
            var element=document.querySelector(".choice"+i);
            
            element.textContent=choices[i]
            guessWhat("btn"+i,choices[i])
            

        }
}

function guessWhat(btnIndex,userAnswer){
    var btn =document.getElementById(btnIndex);
    console.log(userAnswer)
    btn.onclick=function(){
        quiz.guess(userAnswer);
        loadQuestion();
    }
}
}
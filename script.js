console.log("bağlantıdayım")
function Question(text,choizes,answer){
    this.text=text;
    this.choizes=choizes
    this.answer=answer;
}

Question.prototype.AnswerCheck=function(answer){
 if (this.answer==answer){
     console.log("true")
 }else{
     console.log(false)
 }
}

const q1=new Question("Which of the following is not a programming language?",["Java","Pyhton","HTML","C++"],"HTML")
console.log(q1)
const q2=new Question("Which of these is an interface between a user and the kernel? ",["Oracle","Shell","Linux","Window"],"Shell")
const q3=new Question(" Which of the following is not a high level programming language?",
["Assembly","Java","Python","C++"],"Assembly")


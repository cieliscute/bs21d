// $(document).ready(function(){
// $("#answer1").slideUp(,$(".question-1>.question-arrow").text("expand_less"));
// $("#answer1").slideDown(,$(".question-1>.question-arrow").text("expand_less"));
// $("#answer2").slideUp();
// $("#answer3").slideUp();
// $("#answer4").slideUp();
// $("#answer5").slideUp();
// $("#answer6").slideUp();
// });

$(".question.question-1").click(function(){
  $("#answer1").slideToggle(300);
  if(document.querySelector(".question-1 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-1 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-1 .question-arrow").textContent="expand_more";
  }
});
$(".question.question-2").click(function(){
  $("#answer2").slideToggle(300);
  if(document.querySelector(".question-2 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-2 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-2 .question-arrow").textContent="expand_more";
  }
});
$(".question.question-3").click(function(){
  $("#answer3").slideToggle(300);
  if(document.querySelector(".question-3 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-3 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-3 .question-arrow").textContent="expand_more";
  }
});
$(".question.question-4").click(function(){
  $("#answer4").slideToggle(300);
  if(document.querySelector(".question-4 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-4 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-4 .question-arrow").textContent="expand_more";
  }
});
$(".question.question-5").click(function(){
  $("#answer5").slideToggle(300);
  if(document.querySelector(".question-5 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-5 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-5 .question-arrow").textContent="expand_more";
  }
});
$(".question.question-6").click(function(){
  $("#answer6").slideToggle(300);
  if(document.querySelector(".question-6 .question-arrow").textContent=="expand_more"){
    document.querySelector(".question-6 .question-arrow").textContent="expand_less";
  }else{
    document.querySelector(".question-6 .question-arrow").textContent="expand_more";
  }
});

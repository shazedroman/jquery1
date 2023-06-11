 $(document).ready(function(){

 $("button").on("click", function(){
     $("p").hide("slow",function(){

 alert("The paragraph is now hidden");
 });
 });
 });

$(document).ready(function(){

$("button").on("click", function(){
  $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);



});
});
// animation
$(document).ready(function(){

$("button").on("click", function(){
  $(".oni").animate({left: '250px'});



});
});
// dblclick

$(document).ready(function(){

$("p").dblclick(function(){
    $(this).hide();



});
});
// mouseenter
$(document).ready(function(){

$("#p2").mouseenter(function(){
    alert("You entered p1!");



});
});
// mouseleave
$(document).ready(function(){

$("#p3").mouseleave (function(){
    alert("Bye! You now leave p1!");



});
});

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});

$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});



$(document).ready(function(){
$('#button').click(function(){
  
  var x = Math.floor(Math.random() * 6) + 1  
  switch(x){
    case 1:
  $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"})  
    break;
      case 2:
      $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "yellow"})
  $("#p").css({color: "blue"})
  $("#h3").css({color: "black"})  
    break;
      case 3:
  $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"}) 

    break;
      case 4:
      $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "red"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "pink"})  
    break;
      case 5:
      $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"})  
    break;
      case 6:
      $( "#h1" ).effect( "shake" )
  $("#h1").css({color: "black"})
  $("#p").css({color: "lawngreen"})
  $("#h3").css({color: "green"})  
    break;
  }  
  });
});
$(document).ready(function(){
$('#button').click(function(){
  
  var x = Math.floor(Math.random() * 6) + 1  
  switch(x){
    case 1:
  $(this).css({color:"lawngreen", background:"Black"})
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"})  
    break;
      case 2:
  $(this).css({color:"orange", background:"Black"})
  $("#h1").css({color: "yellow"})
  $("#p").css({color: "blue"})
  $("#h3").css({color: "black"})  
    break;
      case 3:
  $(this).css({color:"yellow", background:"purple"})
  $("#h1").css({color: "blue"})
  $("#p").css({color: "pink"})
  $("#h3").css({color: "yellow"})  
    break;
      case 4:
  $(this).css({color:"purple", background:"orange"})
  $("#h1").css({color: "red"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "pink"})  
    break;
      case 5:
  $(this).css({color:"red", background:"Black"})
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"})  
    break;
      case 6:
  $(this).css({color:"brown", background:"yellow"})
  $("#h1").css({color: "black"})
  $("#p").css({color: "lawngreen"})
  $("#h3").css({color: "green"})  
    break;
  }  
  });
});
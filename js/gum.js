$(document).ready(function(){
$('#button').click(function(){
  
  var x = Math.floor(Math.random() * 6) + 1  
  switch(x){
    case 1:
<<<<<<< HEAD
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
=======
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"}) 

    break;
      case 2:
  $("#h1").css({color: "yellow"})
  $("#p").css({color: "blue"})
  $("#h3").css({color: "black"})  
  
    break;
      case 3:
>>>>>>> ea0f1b657fb5cfcbdbe6247f32d1d085d66d445c
  $("#h1").css({color: "blue"})
  $("#p").css({color: "pink"})
  $("#h3").css({color: "yellow"})  
    break;
      case 4:
<<<<<<< HEAD
  $(this).css({color:"purple", background:"orange"})
=======
  
>>>>>>> ea0f1b657fb5cfcbdbe6247f32d1d085d66d445c
  $("#h1").css({color: "red"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "pink"})  
    break;
      case 5:
<<<<<<< HEAD
  $(this).css({color:"red", background:"Black"})
=======
 
>>>>>>> ea0f1b657fb5cfcbdbe6247f32d1d085d66d445c
  $("#h1").css({color: "purple"})
  $("#p").css({color: "orange"})
  $("#h3").css({color: "green"})  
    break;
      case 6:
<<<<<<< HEAD
  $(this).css({color:"brown", background:"yellow"})
=======
>>>>>>> ea0f1b657fb5cfcbdbe6247f32d1d085d66d445c
  $("#h1").css({color: "black"})
  $("#p").css({color: "lawngreen"})
  $("#h3").css({color: "green"})  
    break;
  }  
  });
});
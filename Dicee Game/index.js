var name1=prompt("enter player1 name");
var name2=prompt("enter player2 name");

document.querySelectorAll("p")[0].innerHTML= name1;
document.querySelectorAll("p")[1].innerHTML= name2;

var randomNumber1= Math.floor((Math.random() * 6) + 1);
//alert(randomNumber1);
var addNum1= "images/dice" + randomNumber1 + ".png";//path
//alert(addNum1);
var image1= document.querySelectorAll("img")[0];//choose the html element to affect
//alert(image1);
image1.setAttribute("src",addNum1);//choose the attribute of element to affect and set it to requirement


//for 2nd image
var randomNumber2= Math.floor((Math.random() * 6) + 1);
//alert(randomNumber1);
var addNum2= "images/dice" + randomNumber2 + ".png";//path
//alert(addNum1);
var image2= document.querySelectorAll("img")[1];//choose the html element to affect
//alert(image1);
image2.setAttribute("src",addNum2);//choose the attribute of element to affect and set it to requirement

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= name1  + " won the game";
  //alert(name1 + "won the game!");
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML= name2  + " won the game";
//  alert(name2 + "won the game!");
}else{
  document.querySelector("h1").innerHTML="Draw!";
}

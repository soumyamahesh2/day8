
//for mouse button press detect
var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0; i< noOfButtons ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var apl=this.innerHTML;
    clicked(apl);// call a anonymus function and in that call "clicked" function
    animation(apl);
  });
}//end of for loop

//for keyboard press detect
document.addEventListener("keypress", function(event){
  clicked(event.key);
  animation(event.key);
});

function clicked(parameter){
//  this.style.color= 'white';

    switch (parameter){
      case 'w':
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case 'a':
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case 's':
          var tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

          case 'd':
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case 'j':
              var crash= new Audio("sounds/crash.mp3");
              crash.play();
              break;

              case 'k':
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

                case 'l':
                  var snare= new Audio("sounds/snare.mp3");
                  snare.play();
                  break;

      }// end of switch
}// end of function- clicked
//function to create animation
function animation(keypressed){
  var findkey=document.querySelector("." + keypressed);
  findkey.classList.add("pressed");// add the animation by adding class
  //to disable the effect call remove
  setTimeout(function(){findkey.classList.remove("pressed"); }  ,  100);//anonymus function is called to remove the effect
}

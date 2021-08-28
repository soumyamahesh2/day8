//assumption made is :we hava an array with all the racial slurs words in it. let it be named as slurWords

let slurWords=['dark','inferior','c','d','e','f'];
// assume the file of twitter is in the array
let arrayOfFile=["some text in line1 with dark word","some text in line2","some text in line3","some text in line4","some text in line5","some text in line6","some text in line7","some text in line8","some text in line9","some text in line10"]
var wordCountArray=[ ];//an array to store the count of procastination words
for(var i=0; i<arrayOfFile.length; i++){
    let wordCount=0;
    slurWords.forEach(word=>{
        if(arrayOfFile[i].includes(word)){
             wordCount++;
      }
    })
    wordCountArray.push(wordCount)
    }
 var fileNo=wordCountArray.indexOf(Math.max.apply(null, wordCountArray));
 document.getElementById("root").innerHTML= " file number "+ fileNo +" has highest Profanity"

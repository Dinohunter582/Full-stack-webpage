// the variable used for this 1st question
document.getElementById("editor")
//the prompt that displays when the user loads the webpage they will be asked this question
var editor = prompt('before we start which text editor sounds the best? Visual studio, Brackets or Sublime text.');
//if condition is met this will be its first response
//if visual studio was the answer
if(editor=='Visual studio'){
    alert('yeah that one is my favorite to');
}
//if brackets was the answer
else if(editor=='Brackets'){
    alert('its okay but not really that great yet to me.');
}
//if sublime text was the answer
else if(editor=='Sublime text'){
    alert('you have very expensive taste but is well worth it though.');
}
//if none of the conditions were met
else{
    alert('I guess you didnt read the prompt at all did you.');
}

//the function for the 2nd question
function nextQuestion() {
    // the variable used for this function
    document.getElementById(choice)
    //when button is pressed this is what will pop up and then user can submit there answer
    var choice= prompt('so now that you have read what all the text editors can do which one do you like: Visual studio, Brackets, Sublime text');
    
    //if the answer to the 2nd question was viusal studio this is what the response would be
    if(choice== 'Visual studio'){
        alert('Still picking the best one right.');  
    }
    //if the answer to the 2nd question was brackets then this is what the response would be
    else if(choice== 'Brackets'){
        alert('Well if thats what you like i wont stop you.');
    }
    //if the answer to the 2nd question was answered with sublime text then this is what the response would be
    else if(choice== 'Sublime text'){
        alert('Still have expensive taste but it will probably pay off for you though.');
    }
    //if conditons for the 2nd question were not met this is the response that will be displayed
    else{
        alert('still dont like reading huh.');
    }
   
}
//declaring all global variables
//--------------------------------------------------------------------------
let onScreenText = document.getElementById("typewriter-text");
let cursor = document.getElementById("cursor");
//--------------------------------------------------------------------------


//function : adds new letter from the parameter finalText every time it's called
//--------------------------------------------------------------------------
function AddNextLetter(finalText, index){
    //to add more text to the current on screen text 
    onScreenText.innerHTML = onScreenText.innerHTML + finalText[index]; ;
}
//--------------------------------------------------------------------------


//function : highlights the text and deletes it
//--------------------------------------------------------------------------
function DeleteCurrentText(){
    //changes the background color back to the same as body background
    onScreenText.style.background = "whitesmoke";
    //removes all in tag text
    onScreenText.innerHTML = "";
    cursor.innerHTML = "|";
}
//--------------------------------------------------------------------------


//function : uses the setTimeout function in a loop to type out the letters in the parameter "string" with a delay
//--------------------------------------------------------------------------
function StartTyping(string, delay, speed){
    for(i = 0; i < string.length; i++){
        (function(i) {
            setTimeout( function (){
                //debuggin help: console.log('value is ', i);
                AddNextLetter(string,i);
                console.log((1000 * (i + 1)) / 8 );
                //the value changes the time for every iteration of the 
                //for loop so that all the letters arent typed at once when the stack is popped 
            }, delay + speed*(i+1));
        })(i);
    }
}
//--------------------------------------------------------------------------
    
// function: Creates a delete animation by changing background color and then calling the DeleteCurrentText() function
//--------------------------------------------------------------------------
function DeleteAnimation(delay){
    setTimeout(function(){
        onScreenText.style.background = "#ACCEF7";
        cursor.innerHTML = "";
        //reminder: nested setTimeout are dependent
        // so the second one is called 500ms after the first and not after window is loaded
        setTimeout(DeleteCurrentText, 500);
}, delay + 100);}
//--------------------------------------------------------------------------




//**START READING FROM HERE**
//--------------------------------------------------------------------------
let firstSentence = "original text";
let secondSentence = "final text";
let speed = 125; 
//--------------------------------------------------------------------------
StartTyping(firstSentence, 0, speed);
DeleteAnimation(firstSentence.length * speed);
StartTyping(secondSentence, 1000 + firstSentence.length * speed, speed);
//--------------------------------------------------------------------------














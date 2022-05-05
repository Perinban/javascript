'use strict';
//Document Object Model - DOM ( Modifying the Web Page / Getting the events from the User )

function showMessage(message){
    //document.getElementById('message').textContent = message;

    let var_message = document.getElementById('message'); 
    //Document calls HTMLDocument - Javascript Object
    //Object has a method and method name is getElementById. getElementById invokes native code getElementById Function - function getElementById() { [native code] }
    //Pulls and stores the value one time and by referencing the variable, the value in the variable can be used multiple times
    //It Stores the value [object HTMLHeadingElement]
    //This method returns another DOM Object which has a property called textContent 

    var_message.innerHTML = message; //Changed to innerHTML to pass <b></b> tag 
    var_message.style.color = "Red";
    var_message.style.fontWeight = "normal";
}

function changePercentOff(percentage){
    document.getElementById('percent-Off').textContent = percentage + "% OFF";
}

const header = document.getElementById('message');

header.style.color = 'Blue'; 

//Function executes at the end. So, blue will be overwriteen by Red again. So, Red color will be displayed

//In CSS property, instead of Dash here we use camelCase.

header.style.fontWeight = '800';

//Detecting Button Clicks

const button = document.getElementById("see-review");

button.addEventListener('click', function(){
    showMessage('Button Clicked');
    console.log("Button Clicked");
})

//Showing and Hiding DOM elements

button.addEventListener('click',function(){
    const review = document.getElementById("review");

    if(review.classList.contains('d-none')){ //Checking whether d-none is present or not
        review.classList.remove('d-none');    //If d-none is present, remove it
        button.textContent = 'Close Review';
    }
    else{
        review.classList.add('d-none');  //If d-none is not present, adding it
        button.textContent = 'See Review';
    }

})


//Arrays in DOM

const containers = document.getElementsByClassName('container');

//HTML Collections is similar to Array

//Hide an container
containers[2].classList.add('d-none');

//Pass this from eventHandler
function eventHandler(ctl){
    ctl.style.background = 'Yellow';
    console.log(ctl.toString()); //Pass the message from event OnClick; Returns object HTMLButtonElement
}

//Validate Regular Expression
function validateRegExp(expression, text){

    let validateExp = expression.test(text);
    console.log(validateExp);

    if(validateExp)
    {
        console.log(expression.exec(text));
        if(expression.exec(text).length > 1)
        showMessage("Possibility of Regular Expression Passed to Test Case is more than One");
        else
        showMessage(expression.exec(text)[0]);
    }
    else
    {
        showMessage('Invalid Regular Expression Matched to Test Case');
    }

}
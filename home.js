'use strict';

//To avoid declaring variables to the window. If declared in window, it will throw an error
//Declaring variables in windows is nothing but declaring without any var, const or let.

//testwindow = 'test'; //Since we have used use strict for this line it will throw an error

//alert("Hello World");  //Test Message

//showMessage("Value Passed through Function");

//console.log("Print any message in the console"); --Used for debuggging purpose

//let total = 99; - Declaring a variable

let welcome = 'Welome'; //Declaring a variable and pass the same in the function

showMessage(welcome);

console.log(window.welcome); //Since we have used let, it is not being used on window anymore. This will return undefined

//Declaring multiple variables

let price = 20,
    name = 'Hiking Boots',
    discounted = true;

showMessage(discounted); //Executes from top to bottom approach. So, discount will overwrite welcome

//Valid Variable name should start from _ $ letter
//Followed by _ $ letter number
//You cannot create a variable with number. It should start from the above list
// _ denotes that the variable going to be private in some way

let price2;
showMessage(price2);
console.log(price2); //Returns Undefined

//const price3; //Const must always have an initiator
const price3 = 50;
//price3 = 45; //const value cannot be reassigned. ie) Value can be declared only once and it cannot be altered.
showMessage(price3);
console.log(price3);

//Old way to declare a variable is done with var.

showMessage(price4); //No error will be showed ie) Here variable is used before initializing 
console.log(price4); //will return as undefined
var price4 = 20;  //In case of let, if we try the same thing, it will throw the error. 

let price5 = 20;
showMessage(price5);
price5 = price5*20;  //Numberic Calculation price5 *= 20 is similar to price5 = price5 * 20
showMessage(typeof(price5));  //Returns the number since price5 is a number datatype

let price6 = 20;
showMessage(price6++); //While excution, price6 is not incremented. It gets incremented after the execution of the process - At this stage, it will be 20.
showMessage(price6); //At this line, it gets incremented and display as 21

let price7 = 3 + 2 * 4; // 2*4 = 8 + 3 = it prints 11
showMessage(price7); //MDN Operator Precedance

//While performing decimal operations we will get garbage values.
let price8 = 1.1 + 1.2;
showMessage(price8); //It should be equal to 2.3

//Negative number
let amount = 0;
showMessage(--amount); //Returns -1 (Negative values)

let message = 'Hello World';
showMessage(typeof(message));

// \is the escape character for quotes
let message2 = 'Hello \'World\'';
showMessage(message2);

//With backtick, we can print a string. Speciality of Backtick is it supports interpolation. It can print variable within the string
let name2 = 'Perinban'; //name is a keyword and it cannot be used as variable
let message3 = `Hello ${name2}`;  //Name2 is interpolated and printed here as Hello Perinban
showMessage(message3);

//Concatenation
let name3 = "Hello"
let message4 = name3 + " World"; // + is used for concatenation
message4 = message4.toLowerCase(); //Lower case is a method to convert all the letters to the lower case
message4 = message4.length; //Length is a string property to count the no.of letters in the string
message4 = message4.toString(); //Convert number to string
message4 = Number.parseInt(message4); //Convert String to Number. Number is a constructor
showMessage(typeof message4);

//NAN - Not a Number
let message5 = Number.parseInt("A123");
showMessage(message5); //returns NaN
showMessage(typeof message5) //NaN is also a Number

let message6 = Number.parseInt("12A3");
showMessage(message6); //If there is string in the Number, it will parse the number until it finds the number. Here, it returns 12.

let saved = true; //Since it is case sensitive, for boolean it should be passed as true
showMessage(typeof saved); //It returns boolean
saved = !saved;
showMessage(saved); //Flips boolean values. It returns false

//Undefined - Not initialized a value

let saved3;
let saved2 = 20;
//Initiallly we stored some value, later we think we need to wipe out the value. So, we can wipe out using null.
saved2 = null;
showMessage(saved2); //It will not display anything. It can be viewed in console.log
showMessage(typeof saved2); //Null will be returned as object
showMessage(typeof saved3); //Undefined will be returned as undefined

//Object
let person = {
    firstName : "Perinban",
    lastName : "Parameshwaran",
    Number : 1
}

console.log(person);

showMessage(typeof person); //Returns Object

//. dot operator looks for the object and pulls out the property of the object
showMessage(typeof person.lastName); // lastName object is defined with string property

showMessage(typeof person.Number); //This will return number

if(5 === 5){
    showMessage('Yes');
}

if(5 > 10){
    showMessage('No'); //Wont be executed since it fails the condition
}

if(5 >= 5){
    showMessage('Y');
}

let state = 'FL';
let taxPercent = 0;

if(state === 'FL') //If Condition
{
    showMessage(taxPercent);
}

if(true) //Condition is always true
{
    showMessage(true);
}

//False - false, 0, empty strings ('',""), null, undefined, NaN

if ( 1.1 + 1.3 !== 2.4){   //These kind of decimal could throw of the calculations
    showMessage("Not Equal"); //This will be printed out because of the garbage value
}

//The easiest way to convert a string to number is by adding + to it.

let string = '123';
showMessage(typeof string); //Returns String
string = +string;
showMessage(typeof string); //Returns number ( it is similar to negative sign)

//To fix the decimal point issue, round off to the nearest value

if( +(1.1 + 1.3).toFixed(2) === 2.4 ){ // By adding the decimals inside paranthesis, it now changed to object and toFixed Method can be called. toFixed returns a string, so + is added to convert to decimal
    showMessage("Value Matches");
}

let decimal = (1.1 + 1.3);
showMessage(typeof(decimal)); //Returns Number

//If Else Statement
let state2 = 'FL';
let taxPercent2;

if(state2 === 'MI'){
    taxPercent2 = 10; 
}
else if(state2 == 'CA'){
    taxPercent2 = 0;
}
else{
    taxPercent2 = 8;
}

showMessage(taxPercent2); //Returns 8 as the State is FL

//Double equal will match only with values
//But triple equal will match with values as well as data. So, it is always preferred to use triple equal to.
if ( 1 === '1'){ 
    showMessage('True');
}
else{
    showMessage('False'); //Returns False since datatype is mismatching
}

//Ternary Operator

//(Condition) ? true-statement : false statement;

let price10 = 20;

let message7 = (price10 > 10) ? 'Expensive' : 'Cheap';

showMessage(message7);


if(true){
    let variable = 'yes';
    showMessage(variable);
    variable = 'no';
}

//showMessage(variable); //Variable cannot be accessed outside the block. It will throw an error incase of let statements
//Similar to let, in const we cannot access data variable inside the block value outside the block

if(true){
    var variable2 = 'yes';
    showMessage(variable2);
    variable2 = 'no';
}

showMessage(variable2); //The value passed passed outside the block and it returns no as the output incase of var.

//For loop
//Consists of three parts: Initailisation, Condition check, Incrementation/Decrementation
let j='';
for(let i=0; i<3;i++)
{
    j = j + (i).toString();
    console.log(j);
    showMessage(j); //Returns 012 - Loops executes 3 times and it came out of the loop when i becomes 3 and condition fails
}

console.log("While loop starts");
//While loop
let loop = 1;
while(true && loop < 5){
    console.log(loop);
    showMessage(loop);
    loop++;
}

console.log("Do While loop starts");
//Do while loop -> Loop executes atleast once even if the condition fails

let count = 0;
do{
    console.log(count);
    count++;
    showMessage(count);
}while(count < 5);

//Function
//It can be call over and over

//Function Declaration
function showMessage2(){
    showMessage("Test Data");
    console.log("Test Data");
}

showMessage2(); //Function call showMessage2 is executed
showMessage2();

//Function Expression
let fn = function(){
    showMessage("Function call");
    console.log("Function call");
}

fn(); //Function call
fn();

//It is best practice to always give a function a name - it will used incase of errors

let fn2 = function fncall(){
    showMessage("Function call 2");
    console.log("Function call 2");
}

fn2();
//fncall(); //We cannot call using function name. It will throw an error. fncall is not defined. Named only for debugging purpose

//Passing Information to Function - Function Parameters

let fn3 = function fnparameter(message){ //Here, message is a local variable. Can be accessed only within the function
    showMessage(message);
    console.log(message);
}

fn3("Function call 3");
fn3('Function call 4'); //Data is passed as message through the parameter

let fn4 = function multipleparameter(message1, message2){
    console.log(message1, message2);
    showMessage(typeof(message1 + message2));
    console.log(message1+message2); //Undefined + Undefined = NaN
}
fn4('First Message',' Second Message'); //Passed two parameters
fn4('Test Data 1'); //If Second parameter is not passed, it will return as undefined
fn4(null,'Test Data 2'); //Anything concatenated with the string will return data type as  string
fn4(); //If both parameters were not given, will get undefined for both -> Concatenating both the undefined will return as number

//Return Value from Function - It is not mandatory that always function return a value

let key = 42;

let fn5 = function returnvalue(value){
    let code = value * key; //Key which is declared outside the function is accessible inside the function
    return code; //If function is not returning value, we will get undefined in the output
}

let secretCode = fn5(2); //fn(5) will be replaced by return value   
showMessage(secretCode); 
//console.log(code); //code is not defined error will come since it is declared inside the function

/*Steps:
1) 2 is passed as a parameter to the fn5 function
2) In value, we get 2 and then code is calculated 2*42 and 84 will be stored in code
3) The Resultant code 84 is returned
4) fn5(2) entire function is replaced by return value (84)
5) Now 84 is printed as output
*/

//Nested Functions

let key2 = 40;

function getSecretCode(value){

    let keyGenerator = function(){
        let key = 12;
        console.log('in key generator', key); //Here Key will be 12
        return key;
    }

    let code = value * keyGenerator(); //Here value * 12 will be returned and stored in code
    console.log('in getSecretCode ', key); //Once it came out the function, now key will be taken from global variable ie) 40
    return code;

}

let secretCode2 = getSecretCode(2);
showMessage( secretCode2 ); //So finally 12*2 = 24 will be the output

changePercentOff(30); //It is passed to the changePercentOff function

changePercentOff(45);

let person2 = {}; //New empty Object. Object can be created with curly braces

//Object creation
let person3 = {
    name : 'Perinban',
    age : 25,
    flag : true
};

showMessage(person3.name);//Accessing a object

showMessage(person3.country); //If we try to access the property which does not exist in object, it will return undefined
console.log(person3.country); //Returns Undefined

//Changing a property value in the Object

person3.name = 'Sam';

showMessage(person3.name); //Person3 name has been changed from Perinban to Sam
console.log(person3);

//Another way to access an property of an object

person3['age'] = 24;

showMessage(person3.age); //Age has been changed from 25 to 24
console.log(person3);

//Symbol is a advanced datatype which is used inside an object to hide information

let mySymbol = Symbol();

let person4 = {
    name : 'Sam',
    age : 24,
    [mySymbol] : 'Secret Information'
};

showMessage(person4[mySymbol]); //Returns Secret Information

//Code which has access to Symbol property only can access the data

//Methods
//Methods are functions that can be attached to Objects 

let person5 = {
    name : 'Sam',
    age : 30,
    showInfo : function(){
        showMessage('In showInfo Method');
    }
};

person5.showInfo();

//Also, we can access the data within the object with methods

//this refers to current object

let person6 = {
    name : 'Sam',
    age : this.name, //Returns bootstrap value. Without method we cannot use the property data within object
    showInfo : function(){
        showMessage(name); //Pulls data from global variable since it does not aware of the curent object
        showMessage(this.name); //This pulls the data from current object and return Sam - By this way we can access object property data within Object
        showMessage(this.age);
    }
};

person6.showInfo();

//Since method is a function, it can do all the things which functions can do. Pass parameters and returns values.

showMessage(typeof person6.showInfo); //Returns Function - Traditionally called as Method

//Passing data to Functions - Pass by Value

let message8 = 'Hello';

function changeMessage(message){
    message = 'Hi'; //Here Hello is changed to Hi only at Parameter level not to the Original Value
}

changeMessage(message8);

showMessage(message8); //It returns Hello

//Passing Object to Functions - Pass by Reference [ We can modify properties and Methods entirely]

let person7 = {
    name : 'John',
    age : 40,
    partTime : false
};

function ageCorrection(person){
    person.age = 24 ; //Here the Original value itself got changed from 40 to 24
}

ageCorrection(person7); //It original value gets lost and replaces with the function value - Pass pointer to function

showMessage(person7.age); //So, while calling it, it returns 24.

//Standard Built in Objects

let now = new Date();

showMessage(now.toDateString()); //Returns the Current Date and convert it to String

showMessage(Math.abs(-42)); //Returns the Absolute value using the Math Object

showMessage(Math.random()); //Provides random number - can be used to generate any secret keys

let s = 'Hello';

showMessage(s.charAt(0)); //Charater at Index 0 will be returned ie) H

//Array

let values = []; //Empty Array

//Each item inside an array is called an element

let values1 = [1,2,3]; //Here we have created and also initialized array

//Another way to create array

let values2 = Array.of(1,2,3);

const values3 = ['a','b','c'];

values3[0] = 'd'; //Even we declare as const, the values inside can be altered

console.log(values3[0]); //Accessing values in the array ( Returns d )

showMessage(typeof values3); //Array is an Object

//To check whether variable is an array

showMessage(Array.isArray(values3)); //Returns True

console.log(values3[3]); //If we try to access the value which is not in the array, it will return undefined

//Manipulating Array

//Push - Add items at the end of the Array

const values4 = [0,1,2,3];

values4.push(4); //4 is added at the index 4 as the 5th element

console.log(values4); //Returns 0,1,2,3,4

//Pop - Deletes the last element in the Array

const values5 = [0,1,2,3,4];

values5.pop(); //Deletes the element 4 from the array

console.log(values5,'Values 5'); //Returns 0,1,2,3

//Shift - Moving the entire array [ Deleting the first element of the array]

const values6 = [0,1,2,3,4];

values6.shift(); //Deletes the element 0 from the array
 
console.log(values6,'Values6');  //Returns 1,2,3,4

//Unshift - Adding element to the first of the array

const values7 = [1,2,3,4];

values7.unshift(0); //Adds 0 to the beginning of the array

console.log(values7,'Values 7'); //Returns 0,1,2,3,4


//Slice - cut from position 
//Start position, End position

const values8 = [0,1,2,3,4,5];

const newvalues = values8.slice(2); //If End value is not given, it cuts till the end of the array

console.log(values8,'Values 8'); //Due to Slice, original value will not get affected - 0,1,2,3,4,5 is preserved as such
console.log(newvalues,'New values'); //Returns 2,3,4,5

const newvalues2 = values8.slice(2,3); //Cuts from index 2 and stops at index 3

console.log(newvalues2,'New Values 2') //Returns 2

const newvalues3 = values8.slice(2,4); //End position will not included in the Slice

console.log(newvalues3, 'New Values 3'); //Returns 2,3

const copyArray = values8.slice(); //It copies the entire source Array

console.log(copyArray, "Copy Array");

//Splice is for deleting
//Start position and count of characters needs to be deleted

const values9 = [0,1,2,3,4];

const newvalues4 = values9.splice(2); //If End position is not given it takes till the end

console.log(values9,"Values 9"); //Returns 0,1

console.log(newvalues4, " New values 4"); //Returns 2,3,4

const values10 = [0,1,2,3,4,5];

const newvalues5 = values10.splice(2,3); //From 2nd position it cuts three characters

console.log(values10, 'Values 10'); //Returns 0,1,5

console.log(newvalues5, "New values 5"); //Returns 2,3,4

//Split can also be used for inserting
//To insert, count of characters to be deleted should be given as 0

const values11 = [0,1,2,3,4,5];

const newvalues6 = values11.splice(2,0,6,7); //6,7 is inserted at the 2nd index

console.log(values11, "Values 11"); //Returns 0,1,6,7,2,3,4,5

console.log(newvalues6, "New values 6"); //Returns empty array

const values12 = [0,1,2,3,4,5];

const newvalues7 = values12.splice(2,2,6,7); //2 characters needs to be deleted from second position and 6,7 should be inserted at second position

console.log(values12, "Values 12"); //Returns 0,1,6,7,4,5

console.log(newvalues7, "New Values 7"); //Returns 2,3

//index of - To search within the array

const values13 = [0,1,2,3,4,5];

console.log(values13.indexOf(3)); //Returns 3 [Index 3 is the 4th element]

console.log(values13.indexOf(100)); //If invalid index element is searched through an array, it returns -1

//filter
//Another method of searching through an array

const values14 = [0,1,2,3,4,5];

const set = values14.filter(function(item){
    return item > 2; //Returns all matched condition within the array
});

console.log (values14, "Values 14"); //Original will be preserved as such and it wont be affacted because of filter

console.log(set, "Set"); //Returns 3,4,5

//Find
//Matches the first element that matches in the array

const values15 = [0,1,2,3,4,5];

const set2 = values15.find(function(item){
    return item > 2;
});

console.log(values15, "Values 15"); //original will be preserved as such by this function

console.log(set2, "Set 2"); //First Matched value is 3 and it will be returned as such

//ForEach
//Executes and Returns each element of the Array

const values16 = [0,1,2,3,4,5];

const set3 = values16.forEach(function(item){
    console.log(item, "Set 3") //Returns 0,1,2,3,4,5 in a incremental order
    showMessage(item); //Returns 5 since it is a last element in the array
});

console.log(set3); //It Returns Undefined

showMessage(containers.length); //Total no.of containers used in HTML

console.log(containers);

//Switch Statement
//Switch is used to match with cases that matches the exact criteria
//Break is mandatory for all cases including Default case
//Default case can be placed anywhere
//Does a strit comparison - Type and Value must match

let productID = 2;

productID = 1; //Returns Product 1
productID = 2; //Returns Product 2
productID = 100; //Returns Unknown Product

switch(productID){
    case 1: 
        showMessage("Product 1");
        break; //If break is not given, it will try to execute all the other cases without an ending loop.
    case 2:
        showMessage("Product 2");
        break;
    default:
        showMessage("Unknown Product");
        break;
}

//Multiple Case Statements

let color = "Light Blue";

switch(color){
    case "Red":
    case "Pink":
        showMessage("The Color is Red"); //If Case matches with Red/Pink, this statement is executed
        break;
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
        showMessage("The color is Blue"); //This statement is common for all the three blue cases
        break;
    default:
        showMessage("Unknown Color");
        break;

}

//Type and Value must match

let productID2 = '2'; //Returns String Product

switch(productID2){
    case 1: 
    case 2:
        showMessage("Number Product");
        break;
    case '1':
    case '2':
        showMessage("String Product");
        break;
    default:
        showMessage("Unknown Product");
        break;
}

//Block Scope problem
//For multiple cases, braces are important to make it as a separate block

let productID3 = 2; //Returns Case 2

switch(productID3){
    case 1: 
    {
        let message = "Case 1";
        showMessage(message);
        break;
    }
    case 2: {
        let message = "Case 2";
        showMessage(message);
        break;
    }
    default:
    {
        let message = "Unknown Case";
        showMessage(message);
        break; 
    }
}

//for in loop - Printing in a Object
// in keyword grabs all property and method names of an object

let product2 = {
    "productID" : 680,
    "name" : "Ferrari",
    "product Number": "FR-320-100",
    "color" : "Red",
    "standardCost" : 10934.23,
    "listPrice" : 21234.32,
    calculateGrossProfit: function(){
        return this.listPrice - this.standardCost;
    }
}

for(const key in product2){
    console.log("'" + key + "' = " + product2[key]);
}

//for of loop
//Iterates over any iterable one like string, array, etc.
//Returns an Object for each iteration
//Of Keyword keeps track of which item of an array is currently being accessed

let listOfProducts = [
    {
        "productID" : 680,
        "name" : "Ferrari",
        "product Number": "FR-320-100",
        "color" : "Red",
        "standardCost" : 10934.23,
        "listPrice" : 21234.32,   
    },
    {
        "productID" : 650,
        "name" : "Hyundai",
        "product Number": "HR-410-200",
        "color" : "White",
        "standardCost" : 1534.23,
        "listPrice" : 2232.32,
    },
    {
        "productID" : 900,
        "name" : "Spike",
        "product Number": "Sk-000-000",
        "color" : "Green",
        "standardCost" : 934,
        "listPrice" : 1234,
    }
];

for(const item of listOfProducts){
    console.log(JSON.stringify(item));  //Change Javascript Object to JSON string
    console.log(item); //Reurn as Object
}

//Loops Over a String

let loopString = "String";

for(const item of loopString){
    console.log(item); //Iterates over the string and print each character one by one
}

//Iterate over a string and copy to a another variable

let loopString2 = "String";

let letters = '';

for(const item of loopString2){
    letters += item; //String is copied to letters one by one character 
}

showMessage(letters); //Returns String

//Works similar to forEach

const loopArray = [0,1,2,3,4,5];

for(const item of loopArray){
    console.log(item);
}

//Prints same result
loopArray.forEach(function(item){
    console.log(item);
});

//Break and Continue
//Break - Exit the loop early
//Continue - Go to the top of the loop and starts to execute next iteration of the loop

const loopArray2 = [0,1,2,3,4,5,6];

for(const item of loopArray2){
    console.log("Iterating " + item, "break")
    if(item>3)
    break;
    console.log(item , "break"); //Returns 0,1,2,3
}

/* Result
Iterating 0 – "break"
0 – "break"
Iterating 1 – "break"
1 – "break" 
Iterating 2 – "break"
2 – "break"
[Iterating 3 – "break" 
3 – "break" 
Iterating 4 – "break"
*/

//Once it hits the break, it comes of the entire loop and wont execute further

for(const item of loopArray2){
    console.log("Iterating" + item, "Continue")
    if(item>3)
    continue;
    console.log(item, "Continue");
}

/* Result
Iterating0 – "Continue"
0 – "Continue" 
Iterating1 – "Continue" 
1 – "Continue" 
Iterating2 – "Continue"
2 – "Continue"
Iterating3 – "Continue"
3 – "Continue"
Iterating4 – "Continue"
Iterating5 – "Continue"
Iterating6 – "Continue"
*/
//Once it hits the continue, it executes only the upper part of the loop and lines below continue wont be executed

//Labaled Statement - Goto
//Not Recommended to Use
//Your code doesnt know whether it should go

even:
for(let index = 1; index <= 10; index++){
    if(index % 2 == 1){
        continue even; //Here continue will come back to label
    }
    console.log(index); //Returns 2 4 6 8 10
}

//Use Strict

//Cant use reserved words as variales

//let eval = 10;  //Throw Error
//let arguments = "some args"; //Throw Error

let result = 10;

//delete result; //Cannot delete variable in use strict 

function showMessage3(){
    showMessage(result);
}

showMessage3();

//delete showMessage3; //Cannot delete a function when strict mode is used

//Short Circuiting
//Optimization for Logical expressions
//Bypasses subsequent expressions in && or || based on truthy or falsy


let result2 = isColorRed("black") && isGreaterThan1400(1401);

function isColorRed(color){
    console.log("Is Color Red Executed");
    return color === "Red"; //Returns False
}

function isGreaterThan1400(value){
    console.log("isGreaterThan1400 Executed");
    return value > 1400;
}

//Function call can be placed anywhere due to hositing (Javascript process runs twice). So, even if it is called before the function declaration, it will be executed without any error

showMessage(result2); //Returns False

//If one of the value returns false, there is no need of checking the second condition
//So, once the first function returns false, second function isGreaterThan1400 will not get executed

//For OR expression, either one expression can be true to become true

let result3 = isColorRed("Red") || isGreaterThan1400(1401);

showMessage(result3); //Returns True

//Here, isColorRed function returns true, so, second function wont get executed

/*Exception Basics

try{
    //some code that could fail
}
catch(error){
    //Do something with the error
}
finally{
    //This code always runs
}

//Finally block is optional. Either we can set it up or not
*/

//Javascript Error Object always has name and message properties

let result4;

try{
    result4 = x / 10;
}
catch(error){
    console.log(error.message);
    showMessage(error.message);
}

//Prints out Cant find variable X

//With Finally Block

let result5;

try{
    console.log("An User made error");//Executed and gets displayed on screen
    result5 = x/10;                 //User made error
    console.log("This line will never runs"); //Once it find the error, the next line wont get executed
}
catch(error){
    console.log("In the Catch Block" + error.message); //The Error is sent to catch block to further process the error in combination of name and message object properties
}
finally{
    console.log("In finally block"); //Whatever happens, Finally will get executed at the end
    showMessage("In Finally Block");
}

//If no error occurs

let result6;
let x=100;

try{
    console.log("Process starts");  //Executes
    result6 =x/10;                  //Since x is defined it will run
    console.log("Value of X is",x); //This will get printed
    showMessage(result6);
}
catch(error){
    console.log("In Catch Block" + error.message); //This wont be executed because of successful run
}
finally{
    console.log("Finally executes always"); //This will run for both successful and error 
}

//throw
//Can throw your own custom error
//Create an Object with atleast two properties: "message" and "name"

//With Javascript error, passed the custom error message

try{
    attemptDivision();
}
catch(error){
    console.log(error.message + " - Error Type: " + error.name);
}

function attemptDivision(){
    try{
        result = y/0;
    }
    catch(error){
        //Always needs to include name and message properties
        throw{
            "name" : "Custom Error",
            "message" : "Attempt to Divide " + error.message
        };
    }
}

//Types of Error

function handleError(error){
    switch(error.name){
        case 'ReferenceError':
            console.log("Reference error:" + error.message);
            break;
        case 'RangeError':
            console.log("Range Error" + error.message);
            break;
        case 'TypeError':
            console.log('Type Error' + error.message);
            break;
        case 'URIError':
            console.log('URI Error' + error.message);
            break;
        case 'SyntaxError':
            console.log('Syntax Error' + error.message);
            break;
        case 'EvalError':
            console.log("Eval Error" + error.message);
            break;
        default:
            console.log("Unknown Error" + error.name + error.message);
            break;
    }
}

let result7;

//Z is not defined

try{
    result7 = z/10;
}
catch(error){
    handleError(error);
}


let result8 = 0;

try{
    //Range Error because number cannot have 200 significant digits. It can only 0 to 100
    result8.toPrecision(200);
}
catch(error){
    handleError(error);
}

let result9 = 0;

try{
    //Type Error because result is numeric
    result9.toUpperCase();
}
catch(error){
    handleError(error);
}

//URI error occurs when it have some invalid characters in it

let uri = "http://www.netinc.com/path%%%/filename";

try{
    decodeURI(uri);
}
catch(error){
    handleError(error);
}

//Syntax Error because quote is missing
try{
    let sum = eval("alert('Hello)");
}
catch(error){
    handleError(error);
}

//Object Data Types
//new Boolean, new Number, new String
//Use the primitive 'boolean', 'number', 'string' instead of object data types
//Because Object data types take up more memory space and slower to access

//All Object Data Types inherit from Object (not primitives)
//Object has Constructive Property
//Returns a reference to an object itself


let introDate = new Date();
let strValue = new String()
let stringdata = 'Hello';

//For primitives, it can cast into Object and make use of Constructor Property
console.log("Primitive String = " + stringdata.constructor.toString()); //It calls a String function which returns the type String
console.log("introDate = " + introDate.constructor.toString());
console.log("Str Value = " + strValue.constructor.toString() );

//Constructor provides the internal representation of the particular object

let introDate2 = new Date();
let result10;
let value17 = null;

//To check whether it is date

console.log("introDate: " + isDate(introDate2));

function isDate(date){
    return date.constructor.toString().indexOf("Date") > -1;
}

//To check whether if null or not

console.log("result = " +isNUllOrUndefined(result10) ? 'null/undefined' : ' not null');

function isNUllOrUndefined(value){
    return value === null || value === undefined;
}

//instanceOf
//Tests if inherited from Object Data Type ( Not Primtive )
//Test a specific type of object or Object itself

let dt = new Date();
let name4 = new String("Product Name"); //Initialise String Object and Store product Name
let name5 = 'Instance';
let nulldata = null;

console.log(name4); //Returns Each character of the String in each array element

console.log((dt instanceof Date).toString()); //Returns True [ dt was created from an Object Date ]
console.log((name4 instanceof String).toString() ); //Returns True
console.log((name5 instanceof String).toString()); //Primtive Data Type cannot be an instance. So, it returns false
console.log((name5 instanceof Object).toString()); //Returns False. Primitive Data types were not objects

console.log(typeof null); //Returns Object
//console.log((nulldata instanceof null).toString()); //Eventhough null type returned as object, it is not an object. So, it would throw an error if tried to find instance for the null
console.log((null instanceof Object).toString()); //Returns False. Since null is not an instance of the object

//This Keyword
//Refers to an Object
//That Object which is currently running is said to be called with this keyword
//There are some exceptions that the sometimes objects can be changed

//Javascript is running within the Global Window Object

console.log(this.toString()); //Returns Objects Window

let person8 = {
    firstName : 'Perinban',
    lastName : 'Parameshwaran',
    age : 25,
    fullName : function(){
        console.log(this.toString()); //Returns Object Object since it is an Object Literal
        return this.firstName + ' ' + this.lastName;
    }
}

//Here this is the Person Object Literal
//Object Literal is a comma separated list of name-value pairs inside of curly braces
//Those values can be properties or functions.

console.log(person8.fullName() + " Person 8"); //Prints Full Name of the Function

//Constructor Function

function Person9(first,last){
    console.log(this.toString(), "Person9"); //Returns Object Object
    this.firstName = first;
    this.lastName = last;
    console.log(this.firstName, "From Object");
    this.fullName = function(){  //This is executed only when the function is called
        console.log(this.toString(), "Person9"); //Returns Object Object
        return this.firstName + " " + this.lastName;
    }
}

let p1 = new Person9("John", "Snow");
let p2 = new Person9("Bob", "Smith");

//Here this refers to the Current Object. For first line, it would point to p1 and then to p2 object.

//console.log(Person9.fullName()); //Returns fullName is not a function
console.log(p1.fullName());  //Returns Full Name 

console.log(p2.fullName());  //Returns Full Name

console.log(p1.lastName); //Returns Last Name

//this keyword
//Different value based on execution context
//In a method: Owner Object
//In a function : Global Object or Window Object
//In a event : Element that received the event
//Call()/Apply() Methods refers to the Objects that passed in
//'use strict' also affects this keyword

//Global Scope - 'this' is mapped to global/window object
console.log("Begin:Glocal Scope");
console.log(this.toString());
console.log("this === window = " + (this === window).toString());
console.log("End Global Scope");

//If we use this keyword with 'use strict', it would trigger an error that this is Undefined
//With use strict, we cannnot declare this in the function Scope
function functionScope(){
    console.log("Function Scope Begin");
//    console.log(this.toString());
    console.log(this); //Returns Undefined since use strict is used at the Top
    console.log("this === window = " + (this === window).toString());
    //If you want to get the global window object when 'use strict' is in effect, use below statement
    console.log(window.toString()); //Returns Object Window
    console.log("End Function Scope");
}

functionScope();

//this - object literal

let product3 = {
    productID : 680,
    name : 'Ferrari',
    standardCost : 112427,
    listPrice : 123445,
    calculateGrossProfit : function(){
        return (this.listPrice - this.standardCost) //this grabs the object literal Property data value to the methods
            .toLocaleString('en-US',{
                style: 'currency', currency: 'USD'
            });
    }
};

console.log(product3.calculateGrossProfit());

let product4 = {
    standardCost : 14415,
    listPrice : 43562
}

console.log("Call Method");

console.log(product3.calculateGrossProfit.call(product3)); //This will be instance of product3
//this will do product3.listPrice - product3.standardCost

console.log(product3.calculateGrossProfit.call(product4)); //This will be an instance of product4
//this will do product4.listPrice - product4.standardCost

console.log(product3); //original is preserved as such

console.log(product4); //Original is preserved as such

console.log("Apply Method");

//Apply works the exact same way of call. But here we can pass parameters as arrays to the particular method

console.log(product3.calculateGrossProfit.apply(product3));

console.log(product3.calculateGrossProfit.apply(product4));

console.log(product3); //Original Values are retained

console.log(product4); //Original Values are retained

//Call() method takes arguments separately
//Apply() method takes arguments as an array - it should be an array

const person10 = {
    fullName : function(city,country){
        return this.firstName + " " + this.lastName + " " + city + " " + country
    }
}

const personDetails = {
    firstName : "Sam",
    lastName : "Dorman"
}

//Below is the difference between Call and Apply
console.log(person10.fullName.apply(personDetails, ["chennai", "india"]));

console.log(person10.fullName.call(personDetails, "chennai", "india"));

//this in Constructor function

function person11(first,last){
    this.firstName = first,
    this.lastName = last,
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

//Creation of instance pers1
let pers1 = new person11("Sam", "Thompson");
//Creation of instance pers2
let pers2 = new person11("Wills", "Williamon");

console.log(pers1 instanceof person11, "Instance"); //Returns true

console.log(pers1);
console.log(pers2);

console.log(pers1.fullName); //Returns function
console.log(pers1.fullName()); //Returns the execution of the function

console.log(typeof pers1); //Returns object
console.log(typeof pers1.fullName); //Returns function
console.log(typeof pers1.fullName()); // Returns String

//Spread Operator

//Expand any iterable such as a string or array into an array 
//For passing multiple arguments to method
//The syntax for spread operator uses ellipsis symbol (...)
//Always on the right side of the equal to
//IE was not supporting Spread Operator 


//String to Array
let stringdata2 = "String";

let stringdata3 = [...stringdata2]; //Copy, convert and store each character as a element in the array

console.log(stringdata3);

//Copy an Array

let arr = [0,1,2,3,4,5];

let arr2 = [...arr]; //Copy and make exact replica of the source array

console.log(arr2, "Copied array"); //Returns 0,1,2,3,4,5

arr2.push(8); //Add an element to the last of the array

let arr3 = arr.slice(0); //it also copies the array

console.log(arr3); //Returns 0,1,2,3,4,5

console.log(arr); //After making changes to the new array, original array wont get affected. It returns 0,1,2,3,4,5

console.log(arr2); //Returns 0,1,2,3,4,5,8

let _products = [
    {
        "productID" : 680,
        "name" : "Ferrari",
        "product Number": "FR-320-100",
        "color" : "Red",
        "standardCost" : 10934.23,
        "listPrice" : 21234.32,   
    },
    {
        "productID" : 650,
        "name" : "Hyundai",
        "product Number": "HR-410-200",
        "color" : "White",
        "standardCost" : 1534.23,
        "listPrice" : 2232.32,
    },
    {
        "productID" : 900,
        "name" : "Spike",
        "product Number": "Sk-000-000",
        "color" : "Green",
        "standardCost" : 934,
        "listPrice" : 1234,
    }
];

//Copy Object Array

let diff = [..._products]; //Array is copied

console.log(diff);

//But careful with Object Array
//Even though the array is copied, the underlying objects are still accessed 

//Modifying the property of the Array
diff[0].productID = 0;

//It affects the original value and it also get changed with it
console.log(_products[0].productID); //Returns 0

//The original value is lost somewhere and new value is stored in both variables
console.log(diff[0].productID); //Returns 0

//Since objects work like pointers, any changes made to the Objects affect the original value and original value will be lost completely
//Only the changed value will be stored as a new value

//Concatenate two arrays

let arr4 = [0,1,2,3,4];

let arr5 = [5,6,7,8];

let arr6 = arr4.concat(arr5);

console.log(arr6); //Returns 0,1,2,3,4,5,6,7,8
console.log(arr6.length);  //Returns 9

//Concatenation can also be done with spread operator

let arr7 = [...arr4,...arr5];

console.log(arr7); //Returns 0,1,2,3,4,5,6,7,8
console.log(arr7.length); //Returns 9

//Spread in constructor
//Helps in Objects that where we pass in multiple values to the constructor

let dt2 = new Date(2019,10,5);

console.log(dt2); //Returns Tue Nov 05 2019 00:00:00 GMT+0530 (IST)

let dateFields = [2019,10,5];

console.log(new Date(...dateFields)); //Returns Tue Nov 05 2019 00:00:00 GMT+0530 (IST)

//Spread function arguments

//In Apply method we pass serveral parameters (Here we can use spread since it requires an array)

function multipleParams(arg1, arg2, arg3){
    console.log(arg1,arg2,arg3);
}

multipleParams(1,2,3); //1-2-3

let args = [4,5,6];

//Multiple parameters can be passed easily with spread operator
multipleParams(...args); //4-5-6

//Shallow copy on object literals
//Shallow copy is the collection of copy of the collection structure not the elements
//Copy property by property one object to the other

let pers3 = {
    firstName : 'Perinban',
    lastName : 'Parameshwaran',
    age : '25'
}

let pers4 = {...pers3}; //Copied successfully 

console.log(pers4); //Returns same as pers3

//Modifying the Pers4 object
pers4.age = 30; 

//It does not affect the original pers3 object and made changes only to the pers4
console.log(pers3.age); //Returns 25

console.log(pers4.age); //Returns 30

//Filter out duplicates from Array

let arr8 = [0,1,2,3,4,5,3,4];

console.log([...new Set(arr8)]); //Returns 0,1,2,3,4,5
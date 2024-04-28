//If we declare a variable without any var, const or let, it is considered to be declared in window
//Declaring variable in the windows could cause performance issues. To avoid declaring variables to the window, use strict is being used. If declared, it will throw an error

//Global variables can be easily overwritten by other scripts which is not an safer/advisable one.

'use strict';

//testwindow = 'test'; //Since 'use strict' has been active, it will throw an error as "Can't find variable"

//JavaScripts are executed from top to bottom approach
//alert("Hello World");  //Test Message - Below lines are executed only after the successful completion of the current line ie) Alert
//Only when user clicks close in the alert box, the below lines will get executed.

showMessage("Value Passed through Function");

console.log("Print any message in the console"); //Intermediate outputs/values can be printed in console. 
//Console can be used for debugging the issues in the code.

//Declaring a variable
//let total = 99;

let welcome = 'Welome'; //Any values can be passed inside the function. Same name can be used as a variable and values in it.

showMessage(welcome); //Returns Welcome - A stored value inside welcome variable

console.log(window.welcome); //Since let has been used, welcome variable is not created at window. Hence it will return as undefined.
//window is nothing but a Object Window

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
price5 = price5*20;  //Numeric Calculation price5 *= 20 is similar to price5 = price5 * 20
showMessage(typeof(price5));  //Returns the number since price5 is a number datatype

let price6 = 20;
showMessage(price6++); //It gets incremented after the printing the value. So, it will be 20.
showMessage(price6); //At this line, it gets incremented and display as 21

let price7 = 3 + 2 * 4; // 2*4 = 8 + 3 = it prints 11
showMessage(price7); //MDN Operator Precedance

//While performing decimal operations we will get garbage values.
let price8 = 1.1 + 1.3;
showMessage(price8); //It should be equal to 2.4 but returns with some additional garbage values because of the internal calculation happens inside Javascript engine

//Negative number
let amount = 0;
showMessage(--amount); //Returns -1 (Negative values)

let message = 'Hello World';
showMessage(typeof(message)); //Returns String

// \is the escape character for quotes
let message2 = 'Hello \'World\'';
showMessage(message2); //Returns Hello 'World' 

//With backtick, we can print a string. Speciality of Backtick is it supports interpolation. It can print variable within the string
let name2 = 'Rick'; //name is a keyword and it cannot be used as variable
let message3 = `Hello ${name2}`;  //Name2 is interpolated(which means we can pass the variables and get its values)
showMessage(message3); //Returns Hello Rick

//Concatenation
let name3 = "Hello"
let message4 = name3 + " World"; // + is used for concatenation. Stores Hello World in message4
message4 = message4.toLowerCase(); //Lower case is a method to convert all the letters to the lower case
message4 = message4.length; //Length is a string property to count the no.of letters in the string which returns number type
message4 = message4.toString(); //Convert number to string
message4 = Number.parseInt(message4); //Convert String to Number. Number is a constructor
message4 = +message4; //Simple way to Convert String to a Number
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
showMessage(saved2); //NULL does not have value. Hence it does not display anything in the browser. But still it can be tracked in console.
showMessage(typeof saved2); //Null will be returned as object
showMessage(typeof saved3); //Undefined will be returned as undefined
//Programmer nullifies the value using null and Javascript sets the value as undefined if no initializer has been passed.

//Object
let person = {
    firstName : "Perinban",
    lastName : "Parameshwaran",
    Age : 25  //Multiple datatypes can be initialised within an object
}

console.log(person);

showMessage(typeof person); //Returns Object

//. dot operator looks for the object and pulls out the property of the object
showMessage(typeof person.lastName); // Returns string

showMessage(typeof person.Number); //Returns number

//Irrespective of the types such as string, Number, Boolean in the same Object, Object can hold any number of properties

if(5 === 5){   //Triple equal to compares with both value and type on both sides
    showMessage('Yes'); //Since both were equal, it will be displayed
}

if(5 > 10){
    showMessage('No'); //Wont be executed since it fails the condition
}

if(5 >= 5){
    showMessage('Y'); //Since it satisfies the condition, it will be displayed
}

let state = 'FL';
let taxPercent = 0;

if(state === 'FL') //If Condition is a conditional check where the block of code inside it will be executed only the condition gets satisfied
{
    showMessage(taxPercent); //Since the condition Satisfied, it get executed and returns 0
}

if(true) //Condition is always true. So, whatever happens, it will be executed always
{
    showMessage(true); //True will displayed to output
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

if(state2 === 'MI'){ //Condition fails
    taxPercent2 = 10; 
}
else if(state2 == 'CA'){ //Condition fails
    taxPercent2 = 0;
}
else{
    taxPercent2 = 8;
}

showMessage(taxPercent2); //Returns 8 as the State is FL and else block is executed

//Double equal will match only with values
//But triple equal will match with values as well as datatype. So, it is always preferred to use triple equal to because of its strict comparison nature
if ( 1 === '1'){ 
    showMessage('True');
}
else{
    showMessage('False'); //Returns False since datatype is mismatching
}

//Ternary Operator

//Syntax
//(Condition) ? true-statement : false statement;

let price10 = 20;

let message7 = (price10 > 10) ? 'Expensive' : 'Cheap';

showMessage(message7); //Returns Expensive since condition returns true and true statement is executed

if(true){
    let variable = 'yes';
    showMessage(variable);
    variable = 'no';
}

//showMessage(variable); //Variable cannot be accessed outside the block. It will throw an error incase of let statements

//Similar to let, const declaration works in a similar manner

if(true){
    var variable2 = 'yes';
    showMessage(variable2);
    variable2 = 'no';
}

showMessage(variable2); //The value passed passed outside the block and it returns no as the output incase of var.

//For loop
//Consists of three parts: Initailization, Condition check, Incrementation/Decrementation
let j='';
for(let i=0; i<3; i++)
{
    j = j + (i).toString();
    console.log(typeof(j)); //Retuns string thrice
    showMessage(j); //Returns 012 - Loop gets executed 3 times and stops loop execution when it fails the condition
}

console.log("While loop starts");
//While loop
let loop = 1;
while(true && loop < 5){ //Until the loop condition fails, it will executes
    console.log(loop);
    showMessage(loop); //Returns 1,2,3,4
    loop++; //Loop value incrementation happens here
}

console.log("Do While loop starts");
//Do while loop -> Loop executes atleast once even if the condition fails
//Since the condition check happens at last, block will be executed atleast once

let count = 0;
do{
    console.log(count);
    count++;           //Incrementation happens here
    showMessage(count);
}while(count < 5);    //Condition check happens here

//Function
//It can be called again and again based on the user wish

//Function Declaration
function showMessage2(){
    showMessage("Test Data");
    console.log("Test Data");
}

//Functions will get executed only when it is called. Functions can be called any number of times.
showMessage2(); //showMessage2 Function call
showMessage2();
//Here, It has been called two times, hence function block has been executed twice

//Function Expression - Another way to declare function and assign to variable
let fn = function(){
    showMessage("Function call");
    console.log("Function call");
}

fn(); //Function call
fn();

//Arrow function

//It should be started with name always and => is called as arrow
let arrowFn = () => {
    console.log("Arrow Function call");
}

arrowFn(); //Function call

//It is best practice to always give a function a name - it will used incase of errors

let fn2 = function fncall(){
    showMessage("Function call 2");
    console.log("Function call 2");
}

fn2();
//fncall(); //We cannot call using function name since it is declared to an variable. It will throw an error "fncall is not defined". It is used only for debugging purpose

//Passing Information to Function - Function Parameters

let fn3 = function fnparameter(message10){ //Here, message is a local variable. Can be accessed only within the function
    showMessage(message10);
    console.log(message10);
}

fn3("Function call 3");
fn3('Function call 4'); //Data is passed as message through the parameter
//console.log(message10);  //Throw an error "cant find variable message10" since it is an local variable

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

//Return value with Arrow function

let arrowFn2 = (message) => {
    console.log(message);
}

arrowFn2('Message'); //Passed parameter for arrow function

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
        let key2 = 12;
        console.log('in key generator', key2); //Here Key will be 12
        return key2;
    }

    let code = value * keyGenerator(); //Here value * 12 will be returned and stored in code
    console.log(code,value);
    console.log('in getSecretCode ', key2); //Once it came out the function, now key will be taken from global variable ie) 40
    return code;

}

let secretCode2 = getSecretCode(2);
showMessage( secretCode2 ); //So finally 12*2 = 24 will be the output

//changePercentOff is declared in utils.js
changePercentOff(30); //It is passed to the changePercentOff function

changePercentOff(45);

let person2 = {}; //New empty Object. Object can be created with curly braces

//Object creation
let person3 = {
    name : 'Perinban', //String
    age : 25,          //Number
    flag : true        //Boolean
};

showMessage(person3.name);//Accessing a object

showMessage(person3.country); //If we try to access the property which does not exist in object, it will return undefined
console.log(person3.country); //Returns Undefined

console.log(person3['flag']); //Another way to access an object

//Changing a property value in the Object

person3.name = 'Sam'; //Overides the existing value to Sam and old value completely gets lost

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
    age : this.name, //Returns bootstrap value from window object which is declared globally. Without method we cannot use the property data within object [Points to Window Object]
    showInfo : function(){
        showMessage(name); //Pulls data from global variable since it does not aware of the curent object
        showMessage(this.name); //This pulls the data from current object and return Sam - By this way we can access object property data within Object
        showMessage(this.age); //This points to the current Object and returns the value stored in age
    }
};

person6.showInfo(); //Executes showInfo method

//Since method is a function, it can pass parameters/returns values like functions

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
    name : 'John', //String
    age : 40,      //Number
    partTime : false //Boolean
};

function ageCorrection(person){
    //Person holds the current object pointer. So, if we change the value of it, it modifies the original value
    person.age = 24 ; //Here the Original value itself got changed from 40 to 24
}

ageCorrection(person7); //Original value stored in age gets lost and replaces with the function passed value - Work as Pointer

showMessage(person7.age); //Returns 24 as a result

//Standard Built in Objects

let now = new Date(); //Date is a constructor function where it has how the date should be created

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

let values2 = Array.of(1,2,3); //Array is also a constructor function which defines how the Array should be created

let values02 = new Array(1,2,3); //With new keyword also we can create an new Array.

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

//Slice - cut between Start position and End position
//End Position will not be considered

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

//Splice is for deleting as well as inserting
//Start position and count of characters needs to be passed for deletion
//If no.of positions needs to be deleted is passed as 0. it wont delete anything

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

console.log (values14, "Values 14"); //Original will be preserved as such and it wont be affected because of filter

console.log(set, "Set"); //Returns 3,4,5

const setmultiple = values14.filter(function(item1,item2){ //If multiple parameters passed within filter function. it copies the same data to all the parameters
    console.log(item1,item2); //Item1 and item2 posses the same values
    return item1 > 2;
});

console.log(setmultiple); //Returns 3,4,5

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

//Containers defined in utils.js

showMessage(containers.length); //Total no.of container class used in index.html ie) 8

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
    console.log(JSON.stringify(item));  //Change Javascript Object to JSON(Javascript Object Notation) string
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

for(const item in loopArray){
   console.log(loopArray[item]); //Returns 0,1,2,3,4.5 in the way how it stored inside arrays ie) Number
   console.log(item); //Returns 0,1,2,3,4,5 as Strings
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
    console.log(item, "Continue"); //Line wont get executed after it condition fails with continue
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
let strValue = new String();
let stringdata = 'Hello';
console.log(String); //It calls String native function()
console.log(String.constructor); //It calls function native function() function

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
    },
    fullName2 : () => {
        return 'Perinban Parameshwaran';
    },
    fullName3 : () => {
        return this.firstName + ' ' + this.lastName;
    }
}

//Here this is the Person Object Literal
//Object Literal is a comma separated list of name-value pairs inside of curly braces
//Those values can be properties or functions.
//This keyword does not work with arrow fuction

console.log(person8.fullName() + " Person 8"); //Prints Full Name of the Function
console.log(person8.fullName2()); // Print Full Name of function created using arrow function
console.log(person8.fullName3()); // Returns undefined undefined

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

let pers4 = {...pers3}; //Objects can be copied using flower brackets 

console.log(pers4); //Returns same as pers3

//Modifying the Pers4 object
pers4.age = 30; 

//It does not affect the original pers3 object and made changes only to the pers4
console.log(pers3.age); //Returns 25

console.log(pers4.age); //Returns 30

//Filter out duplicates from Array

let arr8 = [0,1,2,3,4,5,3,4];

console.log([...new Set(arr8)]); //Returns 0,1,2,3,4,5

//Regular Expressions

//Creation of regular Expression Literal

let re = /ab+c/; //One way to create regular expression

let re2 = new RegExp('ab+c'); //Another way to create regular expression

//exec() -> Executes a search for a match in a string. It returns an array of information or null if mismacth

let myRe =  /d(b+)d/g;

let myArray = myRe.exec("cdbbdbsbz");

console.log(myArray); //Returns ["dbbd", "bb"]

//If do not need to access the properties of regular expression, use the below 

let myArray2 = /d(b+)d/g.exec('cdbbdbsbz'); //Returns the same result

console.log(myArray2);

//Using Object

let myRe2 = new RegExp('d(b+)d','g');

let myArray3 = myRe2.exec('cdbbdbsbz');

console.log(myArray3); //Returns same result

//Validation of Color Hex

//The Pattern for Hex color code
//It generally starts with an # and an 6 digit color code starts from A-F or 0-9

// [] -> Square brackers can be used to group a range of acceptable characters

// Forward slashes generally indicate the delimiters that indicate start and end of the expression

//An example) # AB 02 34 - Hex code generally starts with an  hash and AB indicates Red, 02 indicates Blue and 34 indicates Green

let myRe3 = /#[ABCDEF0123456789]/;

let myArray4 = myRe3.exec("#AB1234");

//test -> Tests for match in a string. It returns true or false
let myRegValidate = myRe3.test("#AB1234")

console.log(myArray4); //It returns #A which indicates the logic only for the first character alone but we should be validating all the character
console.log(myRegValidate); //Returns true since it appears to be in a string

//There are three basic quantifier characters
// ? (question mark) -> meaning match - 0 or 1 times
// * (asterisk) -> meaning match 0 or more times
// + (plus characters) -> meaning match 1 or more times

//In our case, it should match 1 or more times, so we go with + character

//validateRegExp -> Declared in utils.js

validateRegExp(/#[ABCDEF0123456789]+/,"#ABCDEF");  //Returns true and [#ABCDEF]

//Instead of writing all the charater which makes a lengthier regular expression, we can simplify the expression by grouping
validateRegExp(/#[A-F0-9]+/,"#ABCDEF"); //Returns true and returns the same result
//Note if we are going to group it should be an sequential characters

//What if we forgot to mention an hash. To make the hash as optional, we have to add ? mark to the hash
// ? -> Represents it is optional
validateRegExp(/#?[A-F0-9]+/,"ABCDEF"); //Returns True and required value ABCDEF

//It validates all the character now
//But for a proper hex code, the hex should be 3 or 6 character only
//Here it validates all the character and returns the true and value

validateRegExp(/#?[A-F0-9]+/,"#ABCDEF55124567145"); //Validates and return as true which is a wrong one
validateRegExp(/#?[A-F0-9]+/,"#AB"); //This is also an invalid hex code

//To fix this, we can use curly braces
// {} -> denotes that the how many characters we are going to match

validateRegExp(/#?[A-F0-9]{6}/,"#AB"); //Returns False since it is not an valid Hex code

// 3 characters is also a valid hex character

validateRegExp(/#?[A-F0-9]{6}/,"#ABC"); //It is throwing an error which is an wrong one

//To fix this, we can use pipe characters
// | -> which denotes or and collectively consider both the expressions as matches

validateRegExp(/#?[A-F0-9]{6}|[A-F0-9]{3}/,"#ABC"); //It is considered as true but it returns only ABC where hash is missing in second case
//Hash should be an common for both
//To fix this, we can group the regular expression using paranthesis
// () -> used to group the regular expression which will be available common for both

validateRegExp(/#?([A-F0-9]{6}|[A-F0-9]{3})/,"#ABC"); //Returns true and two results ABC and #ABC both were correct
//Braces have secondary function. Sub pattern is now added as match array so we return two results.

//Lower case is also a valid hex number
validateRegExp(/#?([A-F0-9]{6}|[A-F0-9]{3})/,"abc"); //Returns Invalid Regular Expression

//To fix this, either we can add lower case to the condition or irrespectively exclude case condition

validateRegExp(/#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/,"abcd"); //For this case, it considers the first 3 characters and take as valid input
//Returns true with abc

//Second way is to add pattern modifier to the regular expression, this will make the character insensitive

validateRegExp(/#?([A-F0-9]{6}|[A-F0-9]{3})/i,"abc"); //Returns true and abc as result

//Regular expression search for the string until it finds out the exact match

validateRegExp(/#?([A-F0-9]{6}|[A-F0-9]{3})/i,"test abc"); //This returns true and abc as result which is not a correct way

//To fix this,
//We need to anchor the regular expression
//Tell it to start match at the very beginning of the input and very end of the input
// ^ will anchor at the very beginning of the input
// $ will anchor at the very end of the input

validateRegExp(/^#?([A-F0-9]{6}|[A-F0-9]{3})$/i,"abcd"); //This returns false and how it should exactly work

//What if we got some whitespace
validateRegExp(/^#?([A-F0-9]{6}|[A-F0-9]{3})$/i,"  abc   "); //This returns false but it should be true

//To eliminate the whitespace
//Shorthande code \s* used to eliminate all type of spaces
validateRegExp(/^\s*#?([A-F0-9]{6}|[A-F0-9]{3})\s*$/i, "    abc     "); //Returns true and abc as the output
//It is suggested to trim spaces before passing the characters to the regular expression in Javascript itself


//Basic Syntax
/*
?*+{#} Quantifiers
[...] Character ranges
\s Shorthand character codes
(...|...) Grouping and alternation
^...$ Anchors
i Modifiers
*/

//Character Classes - Can list one or more character classes
// []
// [abcdef] - can give individual characters
// [a-f] - can give dash character ie) Sequence of Character
// We can invert the character classs by adding caret(^)
// [^abcdef] - other than abcdef


validateRegExp(/^\s*#?([^g-z]{6}|[^g-z]{3})\s*$/i,"      abc "); //Returns true and abc as the ouptut

//If we want to use literal dash for comparison it should be either in first or last in matching expression

let myRe4 = /[--/a-z0-9]/;

//Caret character
//It should be given at end - It would be treated as literal

let myRe5 = /[A-Za-z^]/;

//Brackets character - Simplest way to escape them with backtick

let myRe6 = /[A-Z\[]/;

//Wildcard
// . (dot)
//dot will match anything except new line character
//When using dot in character class, it loses its special meaning and just will be worked as plain dot
// .(dot) + Quantifier = will make the process very slow

//Other Quantifiers
// {n} - exactly n times
// {n,} - n or more times (unlimited)
// {n,m} - between n and m times
// {,m} - between 0 and m times same as {0,m}. It is always better to use {0,m}

//Regex will start to match from left to right
//Using negating character class will speed up the regular expression while brack tracking
//It is better than using dot wildcard in combination with the quantifier 

// Example - /<a[^>]+>strings<\/a>/
//Repetition limit is in the order of 2 billion for regular expression

//Always keep left most branch as most desire one
// | (pipe) alteration will take the lowest precendance as important
//Here so we kept 6 at the beginning and 3rd at the end since it takes first as always important
//ie) For six letters, it also has 3 letters so it will first take that 3 letters as match and close the output in some processers
validateRegExp(/^\s*#?([^g-z]{6}|[^g-z]{3})\s*$/i,"abcdef"); //Returns true and abc as the output

//Matching with Ip adress

let ipaddr = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})/;
//First will match with 250 to 255
//Second will match with 200 to 249
//Third will match anything between 0 to 199
//Literal dot and a complete pattern to match three imes
//For last one, we need to repeat it without the dot

validateRegExp(ipaddr,"192.189.2.2"); //Returns True

validateRegExp(ipaddr,"258.189.2.2"); //Returns False

/*Match Array
[0] - Complete Match
[1] - Match against sub pattern 1
[2] - Match against sub pattern 2
[3] - Match against sub pattern 3
and so on
*/ 

//Submatch order will be determined by the order of the paranthesis

let test2 = /(abc)+((d[e]*f)?123){2}/;

//Here 3 paranthesis were there, which means three sub groups will be created

// \b is a word boundary like first and last of the word

//Backslash escaping
//Remove special meaning from meta-charaters
//Give special meaning to ordinary characters

//For example)
/*
 [  ] ( ) | . ? * + { } ^ $ \ / (delimiter)
 These special meaning will be turned to literals if used with backslash
 \[
*/

//Anything which we put between \Q and \E will be considered as literal and it will not interpreted by regex compiler
// $regex = '\b\Q' + $validated + '\E\b';

//Another way
// $regex = '\b' + re.quote( $validated ) + '\b'; //quote is a special function

//Javascript does not have escape characters

function escapeInputString (str){
    return str.replace(/[[\]\/\\{}()|?+^$*.-]/g, "\\$&");
}

//Template Literal

//Template literal is called as string literal in javascript
//Make all the strings into a single string
//Change quotes to backticks
//Add interoplation to variables with dollar sign and curly braces
//In Template literal, how we sent the data in the same format the data gets printed including newline, spaces
//Also, you can add symbols inside template literal

let person12 = {
    firstName : "Sam",
    lastName : "Billy"
};

function person13(message){
    //return "My Name is "+ person12.firstName +  " " +  person12.lastName;  //Instead of long text
    console.log(`My Name is
${"MR." + person12.firstName}
${person12.lastName}`); //In the same format, the data will be printed in console
    return String.raw `My Name is ${person12.firstName} ${person12.lastName} \t`; //It can be changed with template literal
}

showMessage(person13(message));

//\t is interpreted as special character in HTML.
//\t is used to create tabs in HTML
//Infront of template literal, if we use String.raw it could print as such
//After adding String.raw, \t is printed in the output
//String.raw takes the complete string of the template literal and renders it raw including any escape and special characters
//String.raw is actually a tag for the template literal
//We call it a tag because the template literal is now tagged with a function
//Tag acts as a pre-rendering function
//Infront of template only tag can be added

function person14(message){
    //return "My Name is "+ person12.firstName +  " " +  person12.lastName;  //Instead of long text
    console.log(`My Name is
${"MR." + person12.firstName}
${person12.lastName}`); //In the same format, the data will be printed in console
    //Only one item can be tagged before string literal
    //So, have removed String.raw
    return highlightText `My Name is <br>${person12.firstName} <br>${person12.lastName} \t`; //It can be changed with template literal
}

//strings and values are the combination of the Template Literal
//Normal strings will come with strings and interpolation values will come as values
//Always strings count will be higher than values
//So, we are using i-1 for values
function highlightText(strings, ...values){
    let str = '';
    console.log(strings); //Returns ["My Name is ", " ", " \t"]
    console.log(values); //Returns ["Sam", "Billy"]
    for(let i = 0; i<strings.raw.length; i++ ){
        if(i>0){
            str += `<b>${values[i-1]}</b>`;
            //Since we have used innerHTML, line breaks in the template literal wont be working
            //So, if we really need line breaks, we can make use of <br> tags. 
        }
        //strings array has a raw function which is similar to String.raw
        //Also we cannot pass raw to the values
        //It is added to print \t
        str += strings.raw[i];
    }
    return str; //Now it prints My Name is Sam Billy \t
}

showMessage(person14(message));

//Object.freeze
const arr9 = [0,1,2];

arr9[0] = 22; //Even though it is declared as const, the contents in the const array can be changed

showMessage(arr9);

//To not to make any change of the value, we should use object.freeze

const arr10 = Object.freeze([0,1,2]);

//arr10[0] = 22; //This line is pretty useless. No changes will be happened
//arr10[1] = 45;

showMessage(arr10); //Returns 0,1,2

//Destructuring Syntax

let arr11 = [0,1,2,3,4];

/*
let a = arr11[0];
let b = arr11[1];
let c = arr11[2];
let d = arr11[3];
let e = arr11[4];
*/

//When the index is higher, it could be really hard and assign to each values
//Hard to maintain
//Also, we need to make sure that manually entered index is correct or not
//To fix, we can make use of destructuring syntax

//let[a, b, c, d, e] = arr11; //Destructuring syntax

//For more readbility, it can be declared in separate line as well

let[
    a,
    b,
    c,
    d,
    e
    ] = arr11; //This will still work and produce the same result

console.log(a.toString() + b + c + d + e); //If one is converted to string, all the other variables will work as string
                                           //Return 01234


//It is not mandatory to always match the count of left and right side (variables and no.of values) in Destructuring Syntax

let arr12 = [0,1,2,3,4,5];

let [a1,b1,c1,d1] = arr12;

console.log(a1.toString() + b1 + c1 + d1 ); //Returns 0,1,2,3
//How many variables were given, the respective value will be assigned

//This wont abort the process
let arr13 = [0,1,2,3];

let [a2, b2, c2, d2, e2, f2] = arr13;

//For the additional variables, undefined will be assigned automatically
//Whatever there, it will take, for not matching ones it will take assigned

console.log( a2.toString() + b2 + c2 + d2 + e2 + f2 );

let arr14 = [0,1,2,3];

let [] = arr14; //This wont throw an error but nothing will be assigned

let arr15;

//let [a3,b3,d3] = arr15; //This will throw an error undefined is not an object. -> Here we cannot assign it

//console.log(a3 + b3 + d3);

//If I dont know the length of the array or the array value is more
//We can declare like below

let arr16 = [0,1,2,3,4,5,6,7];

let [a3,b3,d3,...moreargs] = arr16; //All the remaining will be stored as array in moreargs

console.log(moreargs); //This will return 3,4,5,6,7

//Also, we can enter default value, incase value is not there, it will take the default value

let arr17 = [0,1,2];

let [a4,
    b4,
    c4,
    d4 = 3] = arr17;

console.log(a4.toString() + b4 + c4 + d4); //Returns 0,1,2,3

//Also, we can deconstruct objects
 
let person15 = {
    firstName : 'William',
    lastName : 'Clinton'
}

let {firstName: temp_a, lastName: temp_b} = person15; //firstName will be stored in temp_a and lastName will be stored in temp_b

console.log(temp_a + " " + temp_b); //Returns William Clinton

//It is not mandatory to give new variable name

let person16 = {
    firstName : 'Sam',
    lastName : 'Anderson'
}

//let {firstName, lastName} = person16;

//console.log(firstName + " " + lastName); //Returns Sam Anderson

//Also, we can assign default values

let person17 = {
    firstName : "David",
    lastName : 'Clark'
}

//Same property name should be passed in destructuring object.  Otherwise it will return as Undefined
let {temp_c, lastName, temp_e = 25} = person17;

console.log(temp_c + " " + lastName + " is " + temp_e); //For Temp_c it is return as Undefined

//To search a string in a text, string.search() is not an optimized solution
//Suppose if we know for a person doctor, he/she will use the abbreviation only at the beginning as dr
//For MD, it will be always at end.
//For this cases, startsWith(), endsWith() and includes() can be used for better optimum results than string.search()

function searchString(...message){

    for(let i = 0; i < message.length; i++){
        message[i] = message[i].trim().toLowerCase(); //Trimmed and Converted to Lower Case for Data availability
        if(message[i].startsWith("dr")){
            showMessage("Doctor"); //Executes for Dr Ram
            console.log("Doctor");
        }
        else if(message[i].endsWith("md")){
            showMessage("Doctor of Medicine"); //Executes for Sam MD
            console.log("Doctor of Medicine");
        }
        else if(message[i].includes("house")){
            showMessage("Nice House"); //Executes for This house is great
            console.log("Nice House");
        }
        else{
            showMessage('Unmatching Sentence');
        }
    }

}

searchString("Dr Ram", "Sam MD","This house is great"); //Passed multiple values and captured as array to test multiple values at a single time

//startsWith, endsWith and includes does not work with SwitchCase statement

//Numbers - Safe Integer
//When we are using large numbers, because of the inside round of numbers, we will lose up the data.

//For example,
console.log(9007199254740992 + 1); //Returns 9007199254740992
//1 wont be added because of the internal mechanism

//Until the number falls between Max safe integer, we wont be facing any issues
console.log(Number.MAX_SAFE_INTEGER); //Returns 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); //Returns -9007199254740991

//To verify this, we can make use of Number.isSafeInteger function

console.log(Number.isSafeInteger(98)); //Returns True

console.log(Number.isSafeInteger(9007199254740992)); //Returns False

//This is similar to the Number.isInteger function
//Checks whether the given number is integer or not

console.log(Number.isInteger(25)); //Returns True

console.log(Number.isInteger(25.3)); //Returns False

console.log(Number.isInteger(Infinity)); //Returns False

console.log(Number.isInteger(false)); //Returns False

console.log(Number.isInteger(25.0)); //25.0 is similar to 25. So, it returns True

console.log(Number.isInteger("")); //Empty string is not an integer. So, it returns false

//Symbol
//Symbol is a primitive data type that can be used as a identifier for object properties
//Symbols are globally unique unguessable values

let id = Symbol("My id");

console.log(id); //Returns Symbol(My Id)

console.log(typeof id); //Returns Symbol

console.log(id.toString()); //Converts Symbol to String and print Symbol(My Id) as the output

//You cannot see a value that is stored inside because it is always hidden to us
//Symbol is not the value of the symbol

let id2 = Symbol("My id");

console.log(id === id2); //Returns False since both were unique
//Whenever we create a symbol, it will new and unique value

//But we can reuse the same Symbol again using Symbol.for

let id3 = Symbol.for("My id");
let id4 = Symbol.for("My id");

console.log(id3 === id4); //Returns true
//These were the same symbols retrived from the global registry

//Symbols in Object
let loan = {
    name : "Barry",
    [Symbol.for("income")]: 15000
}

//To access the property of the Symbol,

console.log(loan[Symbol.for('income')]); //Returns 15000

//When we query the properties of the Symbol, it wont shown up

console.log(Object.getOwnPropertyNames(loan)); //Returns only Name
//Basically Symbol is completely hidden

//To find it,
console.log(Object.getOwnPropertySymbols(loan)); //Returns Symbol(income)

//Self executing function
(function(){
    showMessage("Self Executing Function");
    console.log("Self Executing Function");
})(); //It executes on the own

//Object
//Object is a essentially a way for grouping the information into single variable
//Instead of multiple variables, we can pass as a single object
//Object  not just pass an information but functionality too like methods


//Create a Object using object literal
let person18 = {
    firstName : "Sam",
    lastName : "Weston"
}

showMessage(person18.firstName); //Returns Sam
//Here firstName and lastName were object literals

//To add a new property, we dont need to go and edit the code again and again
//Simply we can easily add it because of its dynamic nature

person18.age = 25;

showMessage(person18.age); //Returns 25 
console.log(person18);  //Returns entire Object with the inclusion of age property

//Adding Methods to the Object

person18.isAdult = function(){
    return this.age  >= 18;
    //this is used to reference other properties on the object within the object
}

showMessage(person18.isAdult()); //Returns True since age crosses 18

//Passing the function through the variables

function registerUser(first, last){
    let person = {
        firstName : first,
        lastName : last
    }
    showMessage(person.firstName); //Returns Helly
    console.log(person);

    person.firstName = "Sam"; //Kelly has been changed to Sam. Old value will get lost here
    return person.firstName + " " + person.lastName;
}

registerUser("Helly","kate"); //Value passed through function
//Here it will be passed as pass by Reference method

console.log(registerUser("Helly","kate")); //Returns Sam Kate [Helly has been changed to Sam]

//ShortHand Syntax

function registerUser2(firstName, lastName){
    let person = {
        firstName : firstName,
        lastName : lastName
    }
    showMessage(person.firstName);
}

registerUser2("Sam", "Weston");

//Here property name and variable passed through the function have same names, so, it can be declared as below,

function registerUser3(firstName, lastName){
    let person = {
        firstName,
        lastName
    }
    showMessage(person.firstName);
    console.log(person);
}

registerUser3("Sam","Weston");

//This is a simple way to create an person object and set the firstName property to a variable that is also named firstName
//Thats the property shorthand Syntax

//Methods for shortHand Syntax 

let person19 = {
    firstName : "Jim",
    lastName : "Cooper",
    age : 25,
    isAdult : function(){
        return this.age >=  18;
    }
}

//Here isAdult is an Method used in the Object

//Object Literal Method Declaration ShortHand Syntax

let person20 = {
    firstName : "Jim",
    lastName : "Cooper",
    age : 18,
    isAdult() { //Short Hand Syntax for Method
        return this.age >= 18; //Since age is equal to 18, it will return true
    }
}

showMessage(person20.isAdult()); //Returns True

//This function method is specific to Object Literal
//We cannnot create a same way function outside the object

//Javascript provides a object Object 
//There are several functions that we can use for inspecting, manipulating, etc with the Objects

console.log(Object.keys(person20)); //Returns all the properties of the object as an array Object

showMessage(Object.keys(person20).length); //Returns 4 since it has 4 properties [firstName, lastName, age and isAdult Method]

//Similar to Object.Key we can make use of for in loop (which is an most effective way)

for(let propertyName in person20){
    console.log(propertyName); //Print all the property names one by one
}

//Javascript Equality Operators
/*
 == (double equal to ) -> Only the match the value not the type. Rarely Used
=== (triple equal to ) -> Match the value and the type . Mostly used
Object.is -> Similar to === (triple equal to ) except few mathematical differences. It is less likely to be used
*/

//Object.is
//Pass two objects in it, it will return true or false if they are equal or not

showMessage(Object.is(person19.lastName,person20.lastName)); //Returns True

//Because of the below reasons we wont be using double equal to in most of the cases
console.log("42" == 42); //Returns True

console.log(0 == false); //Returns True

console.log(null == undefined); //Returns True

console.log( "" == 0); //Returns true

console.log( [1,2] == "1,2"); //Returns True

//Main difference between triple equal to (===) and Object.is
//In triple equal to, NaN is not equal to NaN(Not a number) whereas in Object.is NaN is equal to NaN
//In triple equal to +0 equal to -0 whereas in Object.is, +0 is not equal to -0

console.log( NaN === NaN ); //Returns false

console.log( Object.is(NaN, NaN) ); //Returns True

console.log( +0 === -0 ); //Returns True

console.log( Object.is(+0,-0) ); //Returns False

//Both the triple equal to and Object.is are type safe

console.log(42 === '42'); //Returns False

console.log( Object.is(42,"42") ); //Returns False

//When we compare two objects, it will always return false since they both store in a different memory address

Object.is(person19,person20); //Returns False

//It does not compare the value contain within the Object but rather the memory address of these Objects

//For primitive types, it compare the values rather than memory addresses. Only for the Object it compares the memory since they are pointer based

let string1 = "String";

let string2 = "String";

console.log( Object.is(string1,string2) ); //Returns True

//Object.assign
//it is used to copy or merge the properties of one object to the another object

let person21 = {
    firstName : "King",
    lastName : "Lee"
}

let person22 = {} //Empty Object

//Copy to Object person22 from person21 using Object.assign
//Syntax will be destination, source

Object.assign(person22,person21);

console.log(person22); //Prints the copied data same as person21

let person23 = {
    firstName : "Sam",
    lastName : "Anderson"
}

let person24 = {
    age : 27
}

Object.assign(person24,person23);

console.log(person24); //Returns age as the firstPropery and then firstName and lastName

console.log(person23); //Returns firstName and lastName

person23.firstName = "William";

console.log(person23);

console.log(person24); //Changing the value in person23 does not affect in person24

//If have same property in object

let person25 = {
    firstName : "William",
    lastName : "Tesly"
}

let person26 = {
    firstName : "Sam",
    lastName : "Jamison"
}

Object.assign(person26, person25);

console.log(person25);

console.log(person26); //If have same property, the old values will be overwritten and new values will be stored. Old values will be completely losed
//Both will return William and Tesly

let person27 = {
    firstName : "Jamie",
    lastName : "Jamieson"
}

let healthStats = {
    height : 68,
    weight : 150
}

function mergeHealthStats(person,healthStats){
    return Object.assign(person,healthStats);
}

let mergedPerson = mergeHealthStats(person27,healthStats);

console.log(mergedPerson); //It creates a combination of both objects

console.log(person27); //Even though it is assigned to a variable, object can be mutable. So, person27 is also gets affected when we are using Object.assign
//Original data will get lost

console.log(healthStats);

//Good immutability practice says that the function really ever mutate the objects that are passed into it.
//Object.assign actually takes an unlimited properties

//To fix this,

let person28 = {
    firstName : "Jamie",
    lastName : "Jamieson"
}

function mergeHealthStats2(person,healthStats){
    return Object.assign({}, person, healthStats); //It will copy everything to the left most object. Hence creating an empty object could fix this
}

let mergedPerson2 = mergeHealthStats2(person28,healthStats);

console.log(mergedPerson2); //Stores both the object properties to the empty object and return it here

console.log(person28); //It does not get affected and original values are returned as such. 

console.log(healthStats);

//Constructor function

function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}
//this always refers to Object
//Which Object it refers to depends on the context of the code which was executed at that time
//When Person was executed, this was referring an new empty object. Thats what new keyword does
//New creates a new object and sets the context of the Keyword to the new object

let person29 = new Person('Sam','King');
//person29 is a created as a instance of the Person object like a constructor class

console.log(person29);

//Object.Create 
//Whenever we tried to create an object, back of the hood it is getting created using Object.create
//This could be little complex

let person30 = Object.create(
    Object.prototype,
    {
        firstName : {
            value : 'Sam',
            enumerable : true,
            writable : true,
            configurable : true
        },
        lastName :{
            value : 'King',
            enumerable : true,
            writable : true,
            configurable : true
        }
    }
)

console.log(person30); //It creates the Object with firstName Sam and lastName King

//Bracket Notation

let person31 = {
    firstName :  "Jim",
    lastName : "Sashi"
}

//Instead of dot operator, we could see bracket notation and pass the property as a string to get the value of the object property
showMessage(person31['lastName']); //Returns Sashi

//Suppose if we have space or invalid characters in the property name, we could not use dot operator
//At that case, we need to go with bracket notation

let person32 = {
    firstName : "Sam",
    lastName : "Anderson",
    "max age" : 80,
    "hair color" : 'black'
}

showMessage(person32["max age"]); //Returns 80. Here we cannot able to use dot operator because of the space in the property name

//Variable that contains the property name and we require to get that value of the property
//At that case, brackets would be useful

let propertyName2 = 'hair color';

showMessage(person32[propertyName2]); //Returns Black

//Another usage is with for in loop to looping and printing the values of the object properties

for(let property in person32){
    console.log(property); //It holds the property
    console.log(person32[property]); //Returns all the property values one by one
}

//Property is more than just a name and value
//Every property has a property descriptor that we can use to see the attributes of the property 
//To get the property descriptor, we use Object.getOWnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(person32,"firstName"));
//Returns value, writable, enumerable and configurable

//Writable property defines that the properties value can be changed from the initial value or not
//Object properties can be changed with Object.defineProperty method

Object.defineProperty(person32, 'firstName', {writable:false});

console.log(Object.getOwnPropertyDescriptor(person32, "firstName")); //Returns Writable as false

//person32.firstName = 'William'; //Returns Error [ Attempted to assign to read only property ]

Object.defineProperty(person32, 'firstName', {writable:true});

console.log(Object.getOwnPropertyDescriptor(person32,'firstName')); //Changed back writable to true

person32.firstName = "William";

console.log(person32); //Firstname has been changed to William

//What happens when non-writable property contains an object

let person33 = {
    name : {
        firstName : "William",
        lastName : "Shakespeare"
    },
    age : 25
};

console.log(person33);

Object.defineProperty(person33,"name", {writable : false});

console.log(Object.getOwnPropertyDescriptor(person33, "name"));

person33["name"].firstName = 'Sam'; //Even though we changed to writable to false, still we can write the value to firstName since it has its own property

console.log(person33); //Returns firstName as Sam

person33['name'].middleName = 'N'; //It allows to add new property as well

console.log(person33); //Returns the new values with middleName

//But if we try to change the property, it would fail

//person33['name'] = {}; //Returns Error attempted to write a read only property

//Simply we can say as name property is a pointer to the object in memory
//When it makes as read-only,it just preventing the pointer being changed.

//Also, we can prevent the Object properties being changed as well using Object.freeze

Object.freeze(person33["name"]);

//person33['name'].additionalName = "S"; //Returns error that Attempted to assign to read only property

//person33['name'].firstName = "William"; //Prevents changing the value if used Object.freeze

//We cannot unfreeze an Frozen Object

//Enumerable Attribute
//By default, all the properties in the Object are enumerable
//which means we can enumerate them using for in loop and list them with Object.keys

let person34 = {
    firstName : "Sam",
    lastName : "Anderson"
}

for(let propertyName3 in person34){
    console.log(person34[propertyName3]);
}

Object.defineProperty(person34,"firstName", {enumerable:false});

for(let propertyName4 in person34){
    console.log(person34[propertyName4]); //Sam wont be printed here since enumerable set to false
}

person34.firstName = "William";

console.log(person34); //Values can be changed and William will be printed here

console.log(Object.keys(person34)); //Displays only lastName. FirstName wont be coming out since enumerable is set as false

//Setting enumerable to false also affects the JSON serialisation of the object

console.log(JSON.stringify(person34)); //Displays only lastName and firstName wont be printed

//Configurable property locks down the property to prevent the property descriptors themselves being changed
//It also prevents the property being deleted from the Object

let person35 = {
    firstName : "Sam",
    lastName : "Weston"
}

//delete person35.firstName; //Able to delete it since by default all the properties set to true

//console(person35);

Object.defineProperty(person35,"firstName",{configurable:false});

console.log(Object.getOwnPropertyDescriptor(person35, 'firstName'));

//Object.defineProperty(person35,"firstName",{enumerable:false}); //Cannot able to change enumerable attribute because of configurable false
Object.defineProperty(person35,"firstName" ,{writable : false}); //But writable works able to change to false even though configurable set to false

console.log(Object.getOwnPropertyDescriptor(person35, 'firstName'));

//Object.defineProperty(person35, "firstName", {configurable: true}); //Once configurable changed to false, we again cannot change it to true - This will throw error 

//delete person35.firstName; //Once configurable set to false, we cannot delete a property

let person36 = {
    name : {
        firstName : "Sam",
        lastName : "Billings"
    },
    age : 25
};

//Create full name using getter
//Get function is a getter

Object.defineProperty(person36, 'fullName', {
    get: function(){
        return this.name.firstName + " " + this.name.lastName;
    }
});

console.log(person36);

console.log(person36.fullName); //Returns Sam Billings

console.log(Object.keys(person36)); //Returns name and age property

console.log(Object.getOwnPropertyDescriptor(person36, "fullName"));
//Returns Get: function, Set: undefined, enumerable: false and configurable: false

//Suppose we need to set firstName and lastName based on fullName. At that case, setters could be handy

let person37 = {
    fullName : "Sam Billings",
    age : 25
}

Object.defineProperty(person37, "fullName", {
    set: function(value){
        let nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
});

person37.fullName = "Sam Billings"; //Here we are setting the property of the fullName only then Setter will get executed

console.log(person37); //Returns age, firstName and lastName

console.log(person37.fullName); //This will return undefined

console.log(Object.keys(person37)); //Returns fullName, age, firstName and lastName

console.log(person37.firstName); //Returns Sam

console.log(Object.getOwnPropertyDescriptor(person37, "fullName"));
//Returns get: undefined, set:function, enumerable:true and configurble: true

console.log(Object.getOwnPropertyDescriptor(person37, "firstName"));
//Returns value: "Sam", writable: true, enumerable : true and configurable: true

//Prototypes
//Prototypes is an object that exists on every function in Javascript

function myFunction(){
}

console.log(myFunction.prototype); //Returns myFunction {}

let myFunction2 = function(){
}

console.log(myFunction2.prototype); //Returns myFunction2 {}

//Either way we create a function, prototype property will be always present in a function

let person38 = {
    firstName : "sam",
    lastName : "Billings"
}

console.log(person38.prototype); //Returns undefined for Object

//To view the Object prototype,

console.log(person38.__proto__); //Returns {} it is an empty object

//Object Prototype and function prototype are used differently

//Function Prototype
//A function prototype is an object instance that will become the prototype for all objects created using a function as a constructor

//Object Prototype
//An object prototype is the Object instance from which the object is inherited

//Its either function or object prototype -> Both were just a instance of an object in memory

//When a function is created, a new prototype object is created in memory an attached to function behind the scenes
//If that function is then used a constructor function with the new keyword, the new object that is created has a proto property that is pointing to the same object in memory
//That is called function prototype

//Person constructor function

function Person1(first,last){
    this.firstName  = first,
    this.lastName = last
};

console.log(Person1.prototype); //Returns Person1 {}  -> It is an empty person object

let sam = new Person1("Sam", "Billings");

console.log(sam.__proto__); //Returns Person1 {} -> it is also empty object of type Person1

console.log(Person1.prototype === sam.__proto__); //Since they are same instance, it returns true

//Change the prototype property

Person1.prototype.age = 29;

console.log(Person1); //This will return same Person1 function

console.log(sam); //This will return the instance of the Person1 
//Person1 { firstName: "Sam", lastName: "Billings", age: 29}

console.log(Person1.prototype); //Prototype age is being add here
//Returns Person1 { age:29 }

console.log(sam.__proto__); //this also returns the same
//Returns Person1 { age:29 }

let clinton = new Person1("William", "Clinton"); //Creation of new instance of Object Person1

console.log(clinton);

console.log(Person1.prototype);

console.log(clinton.__proto__); //Returns the same 
//Returns Person1 { age:29 }

//If I try  to change anything

clinton.__proto__.age = 20;

//Changed age will be reflected in all. Since all were stored in the same memory
console.log(sam.__proto__); //Returns Person1 { age: 20 }

console.log(clinton.__proto__); //Returns Person1 { age: 20 }

console.log(Person1.prototype); //Returns Person1 { age: 20 }

//Object instance that is a function prototype becomes the prototype of all the objects created from that prototype
//So adding a property to a function's prototype affects all the Objects that are constructed using that function

//Here, If i change Person1.prototype.age it changes for all
//If any constructor prototype age is changed, it changes for all
//But if we change all for single Object instead of prototype,

sam.age = 40;

console.log(sam.age); //Returns 40
console.log(clinton.age); //Returns 20 - Here it is not affected

//Here what is happening is we are not changing the prototype age property, instead adding a new property to sam. So, clinton.age were not affected
//But still sam have access to both prototype as well

console.log(sam.age); //Returns 40
console.log(sam.__proto__.age); //Returns 20

console.log(Object.keys(sam)); //Returns firstName, lastName and age

delete sam.age; //Delete the age property

console.log(sam.age); //It takes the value from prototype and returns 20
//Javascript checks the value for the property, if it does not find it. it just checks for the prototype whether it has the value or not. If it has, it just returns it.

console.log(sam.hasOwnProperty('age')); //Returns false. Since it does not have age property. It just gets value from Prototype

//Whatever the above scenarios properties do, it can do on functions and Objects or methods as well

//Basically instance property overides the prototype properties

//Change function prototype to a new object

function Person2(firstName,lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person2.prototype.age = 18;

let sam2 = new Person2("Sam", "Vikings");

//Create a new instance property age for sam2 which overides the prototype property
sam2.age = 20;

console.log(sam2); //Returns age as 20

let lia = new Person2("Lia", "Michael");

console.log(lia);

//Change function prototype to a new object

Person2.prototype = { age: 30 };

console.log(sam2); //Returns age as 20 since it has age property in it

console.log(lia.age); //Returns 18 since we are completely changing the object

let chris = new Person2("Chris", "Woakes");

console.log(chris.age); //Returns 30. The new Objects which gets created after the complete change of prototype attains the new value

console.log(Person2.prototype); //Returns {age: 30}

console.log(lia.age); //Returns 18 but still lia holds the old prototype value

//When we point out to a new object, a new instance will be created. Totally now it has 2 instances

console.log(lia.__proto__); //Returns Person2 { age:18 }

console.log(sam2.__proto__); //Returns Person2 { age: 18 }

console.log(chris.__proto__); //Returns { age:30 } -> Here Person2 object is not showing only it returns the newly created object which we pointed to a different storage memory

//Above Objects have multiple layers of inheritance

console.log(chris.__proto__.__proto__); //Returns empty object

console.log(sam2.__proto__.__proto__); //Returns empty object

console.log(chris.__proto__.__proto__.__proto__); //Returns null
//Basically sam2 have a Person2 Object instance prototype and inturn Person2 have Object prototype. Like that inheritance goes on.
//This Object prototype was created from Object constructor
//The last prototype chain value was null basically which means Object constructor has no prototype
//NULL indicates the end of the chain

function Person4(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    console.log(this); //Student Object

    Object.defineProperty(this, 'fullName',{
        get: function(){
            return this.firstName + " " + this.lastName;
        },
        enumerable:true
    });

}

function Student(firstName, lastName, age){

    console.log(this); //Student Object constructor  ie) Student { }

    Person4.call(this,firstName,lastName,age);

    this._enrollmentCourses = [];

    this.enroll = function(courseId){
        this._enrollmentCourses.push(courseId);
    }

    this.getCourses = function(){
        return this.fullName +  "'s Enrolled courses are: " +
         this._enrollmentCourses.join('. '); //Join returns array as a string
    };
    
}

console.log(Student.prototype); //Student Object
console.log(Student.prototype.constructor); //Returns the entire Student function

Student.prototype = Object.create(Person4.prototype); //To access all the properties including getters and methods instead of only firstName, lastName and age

//After setting up Person4 Prototype,
console.log(Student.prototype.constructor); //Returns Person4 property

//To undo the side effect assigning to Person4 property, assigning back to Student Object
Student.prototype.constructor = Student;

console.log(Student.prototype.constructor); //Returns Student Object

//All prototypes have a constructor property
//That points to the function that we used to create it

let ron = new Student("Ron", "Weasely", 17);

ron.enroll('CA205');
ron.enroll('MA101');
ron.enroll('PS010');

console.log(ron);

console.log(ron.__proto__); //Student Object

console.log(ron.__proto__.__proto__); //Person4 Object

console.log(ron.__proto__.__proto__.__proto__); //Object Constructor

console.log(ron.__proto__.__proto__.__proto__.__proto__); //Returns null

console.log(ron.getCourses());

//Inheritance Chain
//Student Object -> Person4 Object -> Object Constructor -> Returns Nulls 
var age = 23;
console.log(age);

//let age_let = 40;
//console.log(age_let);


if(true) // if nothing is mentioned , then if loop won't execute
{
    var age = 30;
}
console.log("Printing var age = " + age); //Printing var = age value 
 

/* 
if(false)
{
    let age = 30;
}
console.log("Printing let age = " + age); //Printing let = age value 

 */


/* let age1 = 40;
if(true)
{
    let age1 = 30;
    console.log(age1);//30
}
console.log(age1);//40 
 */



/* 
age = 40;
if(true)
{
    age = 30;
    console.log(age);//30
}
console.log(age);//30
 */


 let age3 = 40;
if(true)
{
    // if we don't use let or var then this is considered as a global this property
    age3 = 30;
    console.log(age3);//30
}
console.log(age3);//30
 

/* const age = 40;
age = 60;//Re-assignment of a value to a constant variable is not possible 
console.log(age);
 */

/* const array_variable = [1,2,3,4,5];
console.log(array_variable);//[1,2,3,4,5]

array_variable.push(6);
console.log(array_variable);//[1,2,3,4,5,6] Because it is holding pointer address and not the values 

const object = {name : "John"};
console.log(object);

object.name = "Ross";
console.log(object);
 */


/* age = 50;
console.log(age);

let age;//ReferenceError: Cannot access 'age' before initialization
 */

/* let age;
age = 100;
console.log(age);//100

 */

/* 

function f1()
{
    age1 = 45;
}
let age1;
f1();
console.log(age1);//45 after function is called then the value inside the variables will be executed 

//Before using the variable , is should be initialized first 


 */






/* 

function f()
{
    console.log("Hello Programmer");
}

f();//Hello Programmer

//Newer way to represent the code

var function_variable = () => {
console.log("Newer way to represent code");
}

function_variable();//Newer way to represent code

//If only 1 line of code is present , then don't use curly braces
var function_variable_1 = () => console.log("Newer way to represent code in 1 line");
    
    
    function_variable_1();//Newer way to represent code in 1 line 

    

//() is used for sending parameters 




 */

/* 

var sendingParameters = (a,b) =>{

    console.log("Value of a = " + a);
    console.log("Value of b = " + b);
    console.log("Addition of both = " + a+b);

 
    return (a*b);
};

console.log(sendingParameters(3,4));//12

var IgnoringExtraParameters = (d) => d+10

console.log(IgnoringExtraParameters(3,4,5));//13 Values such as 4 or5 are ignored 

//if only 1 parameter we have we can remove parenthesis

var IgnoringExtraParameters_1 = d => d+100

console.log(IgnoringExtraParameters_1(30,40,50));//130 Ignores values such as 40 or 50 

 */
 



/* 
setInterval(function(){
console.log("Hello World");
},1000);

 */

/* 
setInterval(() => 
{
    console.log("Hello World")},1000);
    
 */

    
function t()
{
    console.log(this);
    document.write(this); // object can't be printed on a browser
}
t();
 

/* 
function compare(num1,num2=5)
{
    console.log("num1 = " + num1);//5
    console.log("num2 = " + num2);//5
    return num1==num2;//true
}
console.log(compare(5));
 */


//Objects 




let name_change = "facelift developing website";
let age_change = 34;
let age_key = "age_change";// using string as a variable for error prone reasons
let hello = function(){};
let Programmer_variable = "Programmer_function";


let Object_variable =
{
    name_change,
    [age_key] : age_change,
    hello()
    {
        console.log(this.name_change + " " + this.age_change + " " + this.hello());
    },
     Programmer_function()//Using a variable as a function name
    {
        console.log(this.name_change + " " + this.age_change);
    } 
}

console.log(Object_variable);
 



function sum(Array){
    let result = 0;

    for(var i=0;i<arguments.length;i++)
    {
        result+= arguments[i];
    }
    return result;
}

console.log(sum(10,20,30));//60



//ECMA6 rest operator
function sum1(...RandomArray){
    let result = 0;

    for(var i=0;i<RandomArray.length;i++)
    {
        result+= RandomArray[i];
    }
    return result;
}

console.log(sum1(10,20,30));//60
 

//console.log(Math.max(1,2,3,15,4,5));//will accept only list of  numbers , not array of numbers 

var Numbers_variable = [1,2,3,4,5];

console.log(...Numbers_variable);




//Converting and combining 2 jSON objects into a list 
var object1_variable = 
{
    FirstCollege : "Mindtree",
    LastCollege : "Developer",
    School : ["ABC","DEF"]

}

var object2_variable = 
{
    FirstCollege : "Google",
    LastCollege : "Tester",
    FirstOffice : "Bangalore",
    LastOffice : "Hyderabad"
}

console.log({...object1_variable,...object2_variable});
 







let Numbers_variable1 = [1,2,3,4,5];

//for loop in arrays
for(let loop_numbers of Numbers_variable1) // of is used to loop over arrays
{
    console.log("Printing value = " + loop_numbers);
}


var object2_variable1 = 
{
    FirstCollege : "Google",
    LastCollege : "Tester",
    FirstOffice : "Bangalore",
    LastOffice : "Hyderabad",
    School : ["ABC","DEF"]

}

for(let loop_numbers1 in object2_variable1) //in is used to loop over objects
{
    console.log("printing object properties = " + loop_numbers1);
}

for(let loop_numbers2 in object2_variable1) //in is used to loop over objects
{
    console.log("printing object property values = " + object2_variable1[loop_numbers2]);
}

 






//Printing complex strings in a simple way
let firstName = "google";
let age_1 =  35;

var text = "Hello , welcome to " + firstName + " started around " + age_1 + "years ago";
console.log(text);

var text_new = `Hello  ${firstName + "&^%$"} , "Welcome to programming language" + 'changes have been made in the code' .
 " Started around  ${age_1} years ago `;
console.log(text_new);
 


 


//Using split operator to assign numbers 

let array_numbers = [4,5,6,];

let [a,...b] = array_numbers;
console.log("a = " + a + " b = " + b); //a = 4 b = 5,6

//let [g] = array_numbers;//insert a comma to skip a value (destructuring of arrays)
//console.log("g = " + g + " t = " + t);


let bn = 24;
let bd = 56;

[bd,bn] = [bn,bd];

console.log("bd = " + bd + " bn = " + bn);

 






//Destructuring object properties
let object3_variable = 
{
    name : "facebook",
    age : 45,
    hello : function()
    {
        console.log("welcome to hello world");
    }
}

let {name : CompanyName_US,hello : welcome_anotherVariable} = object3_variable;

console.log("name property value = " + CompanyName_US);
welcome_anotherVariable();
 




// trying another destructuring arrays 

let PrintingObject = 
{
    firstName : "Facebook and Google",
    lastName : "Development and Testing",
    doExist : true,

    helloProgrammer : function()
    {
        console.log("welcome to programming world");

    }

}

let {firstName : assigningDifferentName ,helloProgrammer : assigningDifferentFunction } = PrintingObject;

console.log(assigningDifferentName);
assigningDifferentFunction();

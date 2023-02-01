// forEach is used when we want to pick all elements from an array one by one and  pass it to a function



/* 
console.log("ModuleA log1 loaded");
import {FullName, College, FullName1 as f1 , College1 as c1, FullName2, College2, Object1} from "./Module2.js";

console.log("Displaying the words in browser from exported Module2 to imported Module1 " + FullName);

console.log("Trying on August and September " + FullName);

console.log(`${FullName} ${College}`);
console.log(`${f1} ${c1}`);
console.log(`${FullName2} ${College2}`);


console.log("ModuleA log2 loaded");

Object1.name = "Name changed to Bharat";

console.log(Object1.name);
 */


import {MessageBody} from "./Module2.js";

MessageBody("hello Message() body method");


import {GreetMessage_Class} from "./Module2.js";
let a = new GreetMessage_Class();
a.GreetMessage_Method();


let mySet = Object.create(null);
mySet.ID = true;

if (mySet.ID)
{
    console.log("mySet.ID exists " + mySet.ID);
}

let object1 = {};
let object2 = {};

let myMap = Object.create(null);

//myMap.[object1] = "hello world";

//console.log(myMap[object1]);//hello world
//console.log(myMap[object2]);//hello world

let mySet_Variable = new Set();
mySet_Variable.add("Hello");
mySet_Variable.add(13);
mySet_Variable.add(13);
mySet_Variable.add(object1);
mySet_Variable.add(object2);
console.log(mySet_Variable.size);//2

let array_variable = new Array(2,3,4,4,4,5);
console.log("Array length = " + array_variable.length);//Array length = 6

let set_variable = new Set([2,3,4,4,4,5]);
console.log("Set length = " + set_variable.size);//Set length = 4

let chainSet = new Set().add("Hello").add("world").add("Country");
console.log("Length of chainSet = " + chainSet.size);//Length of chainSet = 3
console.log("ChainSet has 'world' value = " + chainSet.has("world"));//ChainSet has 'world' value = true

chainSet.delete("Country");
console.log(chainSet);



let mySet1 = new Set();
let key = {};
mySet1.add(key);
console.log(mySet1.size);



let myMap1 = new Map();
myMap1.set("fName","Software Associate");
myMap1.set("age",23);
console.log("FullName given to Map = " + myMap1.get("fName")); //FullName given to Map = Software Associate


//Using JSON objects as keys

let Object1 = {};
let Object2 = {};

let ObjectKey_Map = new Map();
ObjectKey_Map.set(Object1 , "Mechanical Engineer");
ObjectKey_Map.set(Object2 , "Electronics and Communication Engineer");
ObjectKey_Map.set("CollegeName","Placement");

console.log(ObjectKey_Map);

console.log("Value of Object1 JSON object = " + ObjectKey_Map.get(Object1)); //Value of Object1 JSON object = Mechanical Engineer
console.log("No of key value pairs = " + ObjectKey_Map.size);//3

//Using has method to check if element exists
console.log("Does element Object1 exists? Ans:- " + ObjectKey_Map.has(Object1));//true
console.log("Does element CollegeName exists? Ans:- " + ObjectKey_Map.has("CollegeName"));//true

//Deleting key values
ObjectKey_Map.delete("CollegeName");
ObjectKey_Map.delete(Object2);
console.log("No of elements present in Map are = " + ObjectKey_Map.size);
console.log("Does object2 exists? Ans:-" + ObjectKey_Map.has(Object2));

//Clear method is used to delete all key value pairs
ObjectKey_Map.clear();
console.log("No of elements present = " + ObjectKey_Map.size);


let myMap2 = new Map([
    ["fName","Alphabet Company"],
    ["lName","Parent Airlines"]
]);

//entries
for (let CustomEntry of myMap2.entries())
{
    console.log(`Entries are = ${(CustomEntry)}`);
    //Entries are =  fName => Alphabet Company
    //Entries are =  lName => Parent Airlines
}

for (let [Custom_created_key,Custom_created_value] of myMap2)
{
    console.log(`Entries are =  ${(Custom_created_key)} => ${(Custom_created_value)}`);
    //Entries are =  fName => Alphabet Company
    //Entries are =  lName => Parent Airlines
}
//keys
for (let CustomKeys of myMap2.keys())
{
    console.log("Keys are = " + CustomKeys);
    //Keys are = fName
    //Keys are = lName
}
//Values
for (let CustomValue of myMap2.values())
{
    console.log("Values are = " + CustomValue);
    //Values are = Alphabet Company
    //Values are = Parent Airlines
}



var Number_Array = [2,4,6,8,9,7];

Number_Array.forEach(takeElement_andPrint);

function takeElement_andPrint(input_fromArray)
{
    console.log("current number = " + input_fromArray);
}

 Number_Array.forEach(Array_function);

function Array_function(element,index)
{
    console.log("Array["+index+"] = " + element);
}









 

var myMap3 =  new Map([
    ["fName","Electronics and Communication"],
    ["lName","Mechanical Engineering"]
]);


myMap3.forEach(MapFunction);

function MapFunction(value,key,callingMap)
{
    console.log("Key[" + key + "] and " + "Value[" + value + "]");
    console.log(callingMap == myMap3)
}


var mySet4 = new Set([2,2,4,6,8,9,7]);
mySet4.forEach(Set_function);

function Set_function(element,index)
{
    console.log("key_Set["+index+"] = " + element);
}










let myWeakMAp = new WeakMap();
let object1_new = {};
myWeakMAp.set(object1_new,"JSONObject_Value");
console.log("Key value of WeakMap JSON object = " + myWeakMAp.get(object1_new)); //Key value of WeakMap JSON object = JSONObject_Value
object1_new = {};

console.log("Key value of WeakMap JSON object = " + myWeakMAp.get(object1_new)); //Key value of WeakMap JSON object = undefined






let s = Symbol("First Symbol");
console.log("type of created S symbol = " + typeof s); //type of created S symbol = symbol
console.log("Description of symbol = " + s.toString()); //Description of symbol = Symbol(First Symbol)
console.log(Symbol.keyFor(s)); // undefined 



let s1 = Symbol("Test");
let s2 = Symbol("Test");

console.log(s1 == s2);//false

//Adding symbols to global registry
let S4 = Symbol.for("Register Symbol");
let S5 = Symbol.for("Register Symbol");
console.log(S4 == S5);//true

//retrieving the ID for Symbol
console.log(Symbol.keyFor(S4));//Register Symbol
console.log(Symbol.keyFor(S5));//Register Symbol





let FullName = Symbol("Symbol description");

let ObjectNew2 =
    {
        [FullName] : "Symbol Constructor variable property value"
    }

    console.log(Object.getOwnPropertyNames(ObjectNew2));
    console.log(Object.getOwnPropertySymbols(ObjectNew2));


    /*
let Array = [1,2,3,4];
let Number = 34;
let String = "Hello World";
let Object = {
    FullName : "Google Developer"
}

console.log("Given Array = " + typeof Array[Symbol.iterator]);//Given Array = function
console.log("Given Number = " + typeof Number[Symbol.iterator]);//Given Number = undefined
console.log("Given String = " + typeof String[Symbol.iterator]);//Given String = function
console.log("Given Object = " + typeof Object[Symbol.iterator]);//Given Object = undefined
*/


/*
let Iterable = [1,2,3,4];

function CreateIterator(array)
{
    count = 0;
    return
    {
        next : function()
        {
            return
            {

            }
        }
    }
}
*/


function *CreateGenerator()
{
    yield 1;
    console.log("After 1st yield");
    yield 2;

}

let YieldVariable = CreateGenerator();

console.log(YieldVariable.next());
console.log(YieldVariable.next());
console.log(YieldVariable.next());



function *differentGeneratorTypes()
{
    yield 1;
    yield true;
    yield {
        firstName : "Google Development",
        doPersonExist :true,
        NoEmployees : 23,
        printAddress : function()
        {
         console.log("This is a random object getting displayed from function");   
        },
        namesArray : ["word1",23,true,function()
    {
        console.log("hello world from generator function");
    }]
    }
}


var ge = differentGeneratorTypes();

console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

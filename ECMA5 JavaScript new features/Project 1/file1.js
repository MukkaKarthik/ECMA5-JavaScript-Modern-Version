

let x=50;
console.log("Value of x = " + x);


class Person
{
    constructor(name)
    {
        this.firstName = name;
    }
}

let Person_variable = new Person("Bangalore");

console.log("Name given through constructor class = " + Person_variable.firstName);


 
function Employee()
{
    this.detail = "New York";


}

var google = new Employee();
console.log(google);
console.log(google.detail);



//Constructor and class functions
class Student
{
    constructor(fullname)
    {
        this.firstName = fullname;

    }
    welcome()
    {
        console.log(`this is welcome function . Calling constructor variable = ${this.firstName}`
        );
    }
}

var stu = new Student("Leela Web development calling from object");
stu.welcome();


//Inheritence classes 

class Student_ECE extends Student
{
    
    constructor(full_age)
    {
        super("Child calling parent");
        this.child_age = full_age;
    }

    welcome()
    {
        console.log("Welcome from child class");
    }

    welcomeTwice()
    {
        //calling parent method
        super.welcome();//Output = this is welcome function . Calling constructor variable = Child calling parent
        
        //calling child method 
        this.welcome();//Output = Welcome from child class 
    }
}

var inheri_Student_ECE = new Student_ECE(34);
//inheri_Student_ECE.welcome();//Welcome from child class

inheri_Student_ECE.welcomeTwice();



class Helper_class
{
     getMessage(message1)
    {
        console.log(message1);
    }
}

//calling method using 

 

var helper_variable = new Helper_class();
helper_variable.getMessage("Sending message from object");//Sending message from object



//declaring method as static . Object creation not required 
class static_Helper_class
{
     static getMessage(message1)
    {
        console.log(message1);
    }
}


static_Helper_class.getMessage("Sending static message");//Sending static message


//getters and setters methods 
class House
{
    constructor(name_received)
    {
        this._name1 = name_received;
    }

    get fullName_firstLast()
    {
        return this._name1.toUpperCase();
    }

    set fullName_firstLast(Value)
    {
        this._name1 = Value;

        if(Value.length > 2)
        {
            console.log("Name has been successfully set");
        }
        else
        {
            console.log("Entered value of the name is less than 2 ");
        }
    }
}

var hu = new House("Palm Avenue , Pune");
console.log("changing full name as = " + hu.fullName_firstLast);

hu.fullName_firstLast = "Hinjewadi, Mindtree (Maharashtra)";
console.log("changing full name via set function as = " + hu.fullName_firstLast);



//Extending arrays but not working

/* 
class ExtendingArray extends Array
{
    multiplyBy5(value)
    {
        let CalculatedArray = [];
        this.forEach(value => CalculatedArray.push(value * 5));
        return CalculatedArray;
    }
}

var EA = new ExtendingArray();
ExtendingArray.push(1);
ExtendingArray.push(2);
ExtendingArray.push(3);
ExtendingArray.push(4);
ExtendingArray.push(5);


console.log(EA.multiplyBy5());

 */





//Symbols
var sym = Symbol("debugging console");
var another_sym = Symbol("debugging console");

console.log(sym.toString());//Symbol(debugging console)
console.log(typeof sym);//symbol

console.log(sym == another_sym);//false

var object3 = {
    date : 23,
    [sym] : 100
}

console.log(object3);
console.log(object3[sym]);//100

//Using for loop , we can't access symbol . Symbol can be accessed only using objectname.[<<Symbol Name>>]
for(let f in object3)
{
    console.log(f);//date
    console.log(object3[f]);//23
}







//sharing symbols
let s1 = Symbol.for("age");
let s2 = Symbol.for("age");
console.log(s1 == s2);//true


let object4 = 
{
    gender : "Male",
};

function InsertAge()
{
    var s3 = Symbol.for("age");
    object4[s3] = 45;
}

InsertAge();

console.log("s1 = " + object4[s1]);
console.log("s2 = " + object4[s2]);



 


//Converting array to a number using Symbol functions 
var number1 = [1,2,3,4,5];
number1[Symbol.toPrimitive] = function()
{
    return 100;
}


console.log(number1);
console.log(number1[Symbol.toPrimitive] );
console.log(number1[Symbol.toPrimitive]() );


//Iterator function

var number2 = [4,5,6];
console.log(number2[Symbol.iterator]);//ƒ values() { [native code] }






var number3 = number2[Symbol.iterator]();//Array Iterator {}
console.log(number3.next());//{value: 4, done: false}done: false value: 4[[Prototype]]: Object
console.log(number3.next());//{value: 5, done: false}done: false value: 4[[Prototype]]: Object
console.log(number3.next());//{value: 6, done: false}done: false value: 4[[Prototype]]: Object
console.log(number3.next());//{value: undefined, done: true}done: false value: 4[[Prototype]]: Object


 


/* 


//Iterators code is not working 
number2[Symbol.iterator] = function()
{
    return
    {
        nextChanged : function g(){
            return
            {
                done : false;
                valueChanged : 10
            }

        };
    }
}


var number4 = number2[Symbol.iterator];
console.log(number4.g());

var person2 =
{
    fullname1 : "Web developer",
    [Symbol.iterator] : function()
    {
        return
        {
            next : ()=>
            {
                return
                {
                    done : false;
                    valueChanged23 : 56;
                }
            }
        }
    }
}



 */
console.log("check after this line");





//Generators in functions
function *select()
{
    yield 1;
    yield 2;
}

var iter = select();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


function *selection()
{
    yield "Sports";
    yield 20;
    yield "Cooking";
    yield 45;
}

var object5 = 
{
    [Symbol.iterator] : selection,
}

for(var element of object5)
{
    console.log(element);

    
} 





function *generator1(EndValue)
{

    for(var i=1; i<EndValue ; i++)
    {
        try
        {
            yield i;
        }
        catch(e)
        {
            console.log(e);
        }
       
    }

}

var iter1 = generator1(3);

console.log(iter1.next());
console.log(iter1.next("Error Occurred"));
console.log(iter1.next());
console.log(iter1.next());


 

// Promises are guaranteed results but not for the accurate time , it will execute when heap memory and stack is free

//Promises
let pr = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve("done");
    },5000);
});

pr.then(function(data)
{
    console.log(data);
})



 



//Chaining of promises  

function wait2seconds(seconds)
{
    return new Promise(function(resolve,reject)
    {
        if(seconds > 8)
        {
        reject("Iteration rejected");    
        }       
        else
        {
            setTimeout(function(){
                seconds+=2;
                
                resolve(seconds);
                },2000);
        }
        
    
    }
        
    );
}


wait2seconds(2).

        then(wait2seconds).

            then(wait2seconds).

                then(function(seconds)
                {
                console.log("Returned promised value from then method = "+ seconds);//8
                }).catch(function(error)
                {
                        console.log(error);
                })


                
 






var pr1 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        resolve("Resolved");
    },1000)

});


var pr2 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        reject("Rejected");
    },2000)

});

Promise.all([pr1,pr2])

.then(function(data)
{
console.log(data);
})

.catch(function(error)
{
    console.log(error);
});

//Output :- rejected 



 







var pr3 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        resolve("Resolved pr3");
    },3000)

});


var pr4 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        reject("Rejected pr4");
    },2000)

});

Promise.all([pr4,pr3])

.then(function(data)
{
console.log(data);
})

.catch(function(error)
{
    console.log(error);
});



 //Output :- Rejected pr4




 



 


var pr5 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        resolve("Resolved pr5");
    },3000)

});


var pr6 = new Promise(function(resolve,reject)
{

    setTimeout(function()
    {
        reject("Rejected pr6");
    },2000)

});

// In race whichever promise executes first , that output will be shown regardless of resolve or reject
Promise.race([pr5,pr6])

.then(function(data)
{
console.log(data);
})

.catch(function(error)
{
    console.log(error);
});
 




 



//Combining 2 objects 
 
let object6 = 
{
    name2 : "Developer"
};

let object7 =
{
    full_age1 : 34
}

let object8 = Object.assign(object6,object7);
console.log(object8);//{name2: 'Developer', full_age1: 34}


//Combining 2 classes using 2 objects 

class class1
{
    constructor()
    {
        this.name4 = "Leela Web development";
    }
}

class class2
{
    constructor()
    {
        this.full_age4 = 56;
    }
}

var class_variable1 = new class1();
var class_variable2 = new class2();

let Combined_class = Object.assign(class_variable1,class_variable2);
console.log(Combined_class); //class1 {name4: 'Leela Web development', full_age4: 56}

console.log(class_variable1 instanceof class1);//true
console.log(class_variable2 instanceof class2);//true

console.log(Combined_class instanceof class1);//true
console.log(Combined_class instanceof class2);//false



//Setting prototypes

var Employee1 = 
{
}

var Employee2 = 
{
    name3 : "Chris"
}

Object.setPrototypeOf(Employee1,Employee2);

console.log(Employee1.__proto__ == Employee2);//true

console.log(Employee2);//{name3: 'Chris'}

console.log(Employee1);//{}

//When removed name3 property from Employee1 

console.log(Employee1.name3);//Chris
 


 



//Object various methods 
let number5 = -19;

let number6 = 19;

let num2 = "string Word"

let num3 = 5.67;

let num4 = -7.86;

let num5 = -6.32;

console.log("Sign of -19 = " + Math.sign(number5));//Sign of -19 = -1

console.log("Sign of 19 = " + Math.sign(number6));//Sign of 19 = 1

//console.log("Sign of string = " + Math.sign(num2));//Sign of string = NaN

console.log("Trunc of 5.67 = " + Math.trunc(num3));//Trunc of 5.67 = 5

console.log("Floor of -7.86 = " + Math.floor(num4));//Floor of -7.86 = 8

console.log("Floor of -6.32 = " + Math.floor(num5));//Floor of -6.32 = -7


let word1 = "Dictionary";

console.log(word1.startsWith("Di"));//true

console.log(word1.startsWith("di"));//false

console.log(word1.endsWith("ry"));//true

console.log(word1.endsWith("RY"));//false

console.log(word1.includes("tio"));//true not case-sensitive

 


let a1 = Array(4);
console.log(a1);

let a2 = Array.of(15,12,3,4,53);
console.log(a2);//[15, 12, 3, 4, 53]

let a3 = Array.from(a2,(Value) => (Value * 2));
console.log(a3);//[30, 24, 6, 8, 106]

a3.fill(100);
console.log(a3);//[100, 100, 100, 100, 100]

a2.fill(50,1,3);
console.log(a2);//[15, 50, 50, 4, 53]


//find method 
let a10 = [
    {name17 : "Orange" , quantity : 12},
    {name17 : "Apple" , quantity : 16},
    {name17 : "Mango" , quantity : 18},
    {name17 : "Banana" , quantity : 15}
];


function findApple(fruitObject)
{

    return fruitObject.name17 == "Apple";
}

console.log(a10.find(findApple));//{name17: 'Apple', quantity: 16}

 






//Maps and functions 
let fruit1 = 
{
    name : "Custard Apple"
};

let vegetable1 =
{
    name : "Carrot"
}


var basket = new Map();
console.log("Basket size = " + basket.size);//Basket size = 0

basket.set("Fruit_Variable1",fruit1);
console.log(basket);
basket.set("Vegetable_Variable2",vegetable1);
console.log(basket);
console.log("Basket size = " + basket.size);//Basket size = 2


//data will be overridden but not added
basket.set("Vegetable_Variable2",vegetable1);
console.log("Basket size = " + basket.size);//Basket size = 2





console.log(basket.keys());//MapIterator {'Fruit_Variable1', 'Vegetable_Variable2'}
console.log(basket.values);
console.log(basket.values());


//Obtaining keys
for(let key1 of basket)
{
    console.log(key1);
    
  
    //Output :-

    /*
    (2) ['Fruit_Variable1', {…}]
0: "Fruit_Variable1"
1: {name: 'Custard Apple'}
name: "Custard Apple"
[[Prototype]]: 
Objectlength: 2
[[Prototype]]: Array(0)
*/
}


//Obtaining values 
for(let key2 of basket.values())
{
  console.log(key2);
  
  /*
  Output :- 
{name: 'Custard Apple'}
 {name: 'Carrot'}
*/
}

//Obtaining both keys and values 

for(let entries of basket.entries())
{
    console.log(entries);


    /*
    Output :-
    ["Fruit_Variable1"] {
    name : "Custard Apple"
};

    ["Vegetable_Variable2"] {
        name : "Carrot"
    }
    */
    

}


for(let entries1 of basket)// .entries() is an optional value . will receive the same output as entries 
{
    console.log(entries1);


    /*
    Output :-
    ["Fruit_Variable1"] {
    name : "Custard Apple"
};

    ["Vegetable_Variable2"] {
        name : "Carrot"
    }
    */
    console.log(basket.get("Fruit_Variable1"));//{name: 'Custard Apple'}
    

}

/* 

basket.delete("Vegetable_Variable2");
console.log(basket.size);//1
console.log(basket.get("Vegetable_Variable2"));//undefined
console.log(basket.get("Fruit_Variable1"));//{name: 'Custard Apple'}

//deleting the entire basket 

basket.clear();
console.log(basket.size);//0
 

 */



/*

// this Weak maps code is not working

//Introducing weak maps 
let fruit2 = 
{
    name : "Custard Apple"
};

let vegetable2 =
{
    name : "Carrot"
}

let weakKey3 = {a : 2};
let weakKey4 = {b : 3};

let WeakBasket = new WeakMap();

WeakBasket.set({name : fruit2},"value1");
WeakBasket.set({key2 : weakKey4},"value2");

console.log(WeakBasket);

*/




 










let WeakObject1 = {a : 1};
let WeakObject2 = {b : 1};
let WeakObject3 = {b : 1};
//let WeakObject2 = {b : 1};// shows error in the browser as "WeakObject2 has already been declared"


let weakSet1 = new WeakSet([WeakObject1,WeakObject2,WeakObject3,WeakObject2]);
console.log(weakSet1);
console.log("WeakObject3 present = " + weakSet1.has(WeakObject3));//WeakObject3 present = true
console.log("WeakObject2 present = " + weakSet1.has(WeakObject2));

//console.log("weakSet1 size = " + weakSet1.size());//weakSet1 size = undefined




 








class Person2
{
    constructor(acceptName)
    {
        this.name_variable = acceptName;
    }
}

var p1 = Reflect.construct(Person2,["Indian Army"]);
console.log(p1);//Person2 {name_variable: 'Indian Army'}
console.log(p1 instanceof Person2);//true
console.log(p1.__proto__ == Person2.prototype);//true 


function Sample()
{

}

var p2 = Reflect.construct(Person2,["Western Army"],Sample);
console.log(Person2.prototype == Sample.prototype);//false
console.log(p2.__proto__ == Sample.prototype);//true



 








class Students
{
    constructor(name4,age4)
    {
        this.name_here = name4;
        this.age_here = age4;
    }

    helloBoth()
    {
        console.log( + "Hello , My name is " + this.name_here  +"\n his age is changed = " + this.age_here);
    }
}

Students.prototype.age_property = 75;

var stu1 = Reflect.construct(Students,["Matt Le Blanc",35]);
stu1.helloBoth();//Hello , My name is Matt Le Blanc his age is changed = 35

var stu2 = new Students("Romeo",89);
//stu1.helloBoth.bind(stu2)(); //using binding functions as per ECMA5 version 

Reflect.apply(stu1.helloBoth,stu2,[]);//Hello , My name is Romeo his age is changed = 89

console.log(Reflect.getPrototypeOf(stu2));//{age_property: 75, constructor: ƒ, helloBoth: ƒ}

console.log(Reflect.getPrototypeOf(stu2) == Students.prototype);//true 


console.log(Reflect.getPrototypeOf(Students));//ƒ () { [native code] }

var changed_prototype = 
{
    email : "abc@gmail.com",

    describeFunction : function()
    {
        console.log("function inside variable");
    }
}

Reflect.setPrototypeOf(Students,changed_prototype); // setting the prototype of class to a variable prototype  
console.log(Reflect.getPrototypeOf(Students));//{email: 'abc@gmail.com', describeFunction: ƒ}
console.log(Reflect.getPrototypeOf(stu1) == changed_prototype.prototype);//false
console.log(Reflect.getPrototypeOf(stu2) == changed_prototype.prototype);//false
console.log(Reflect.getPrototypeOf(stu2) == Students.prototype);//true
console.log(Reflect.getPrototypeOf(Students) == changed_prototype);//true











//Properties using reflect API
 
class check_properties
{
    constructor(fullname1,full_age1)
    {
        this.fullname_received = fullname1;
        this.fullage_received = full_age1;
    }

}


var pr10 = Reflect.construct(check_properties,["FullStack Developer",56]);

console.log(pr10);


console.log(Reflect.get(pr10,"fullname_received"));//FullStack Developer

Reflect.set(pr10,"fullname_received","Facebook CEO");

console.log(Reflect.get(pr10,"fullname_received"));//Facebook CEO

console.log(Reflect.has(pr10,"fullname_received"))//true

console.log(Reflect.ownKeys(pr10)); //['fullname_received', 'fullage_received'] , shows only core properties but not getter and setter properties





 









//Create and Delete properties of the object using Reflect API

class office
{
    constructor(type_name,type_age)
    {
        this.office_name = type_name;
        this.office_age = type_age;
    }
}

var office_variable = Reflect.construct(office,["Manager",56]);
console.log(office);
/*Output :-
class office
{
    constructor(type_name,type_age)
    {
        this.office_name = type_name;
        this.office_age = type_age;
    }
}
*/

console.log(office_variable);//office {office_name: 'Manager', office_age: 56}
console.log(Reflect.get(office_variable,"office_name"));//Manager

Reflect.defineProperty(office_variable,"Hobby",{
    writable : true,
    value : ["Cooking","Reading","Cleaning"]
});

console.log(office_variable);//office {office_name: 'Manager', office_age: 56, Hobby: Array(3)}

Reflect.defineProperty(office,"Habits",{
    writable : true,//can change the value of property but can't be delete
    configurable : true,//this is used so that we can delete this property
    value : ["Gym","Utube","Social Media"],

     
    /*Output :-
    class office
{
    constructor(type_name,type_age)
    {
        this.office_name = type_name;
        this.office_age = type_age;
    }
}
    */

});
console.log(office); // By doing this way we can't insert properties to a class using Reflect API . It is possible only via objects 


console.log(Reflect.ownKeys(office_variable));//['office_name', 'office_age', 'Hobby']
Reflect.set(office_variable,"Hobby",["Gym_setfunction","UTube_setfunction","Social_function"]);//changing values of a property "hobby" using set API 
console.log(Reflect.get(office_variable,"Hobby"));//['Gym_setfunction', 'UTube_setfunction', 'Social_function']

console.log(Reflect.get(office_variable,"office_name"));// Manager

delete office_variable.office_name;//Using ECMA5 version 
console.log(office_variable);//office {office_age: 56, Hobby: Array(3)}

Reflect.deleteProperty(office_variable,"Hobby");//this line is not working
console.log(Reflect.get(office_variable,"Hobby"));
console.log(office_variable);



//Locking Objects 
console.log("Object is locked = " + Reflect.isExtensible(office_variable));//true

Reflect.preventExtensions(office_variable);
console.log("Object is locked = " + Reflect.isExtensible(office_variable));//false



 


//Proxy

//Code is not working
let aspirant =
{
    name : "UPSC",
    email : "facelift@google.combination",
    liftValue : 23,
    doesLiftExist : true
}

let handler =
{
    get: function(obj,key) 
    {
        return key in obj ? obj[key] : "Does not exist";
    }

    
}

var proxy1 = new Proxy(aspirant,handler);
console.log(aspirant.name);
console.log(aspirant.email);



// Importing values from other JavaScript file

//due to compatibility issues export and import are not working

/* 
import { KeyValue,test ,LaptopBuying_Values } from "./file2Project1";

console.log(KeyValue);
test();

var p = new LaptopBuying_Values();
console.log(p.ConcatenationFunction()); */
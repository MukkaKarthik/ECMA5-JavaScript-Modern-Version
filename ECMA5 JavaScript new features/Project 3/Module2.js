 let FullName = "Software developer";
 let College = "Institute of Technology";

 let FullName1 = "Software developer1";
 let College1 = "Institute of Technology1";

 let FullName2 = "Software developer2";
 let College2 = "Institute of Technology2";

 let Object1 =
     {
      name : "India"
     };

export {FullName,College,FullName1,FullName2,College1,College2,Object1}

 console.log("Module B loaded");



export function MessageBody(message)
{
    console.log("Message coming from 2nd Module , this message should be exported");
    console.log(message);
}


 export class GreetMessage_Class
 {
     constructor() {
         console.log("Invoking constructor method");
     }

     GreetMessage_Method()
     {
         console.log("Invoking GreetMessage_Method() method");
     }
 }

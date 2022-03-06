// Operators : 
//                       Assisgnment Opertor


// var x = 6;
// var y = 6;
// console.log("Both are equals"+x==y);  //false
// console.log(x==y); //true
//                        Arithmetic Operator


// console.log(3+3);
// console.log(10-3);
// console.log(3/3);
// console.log(3*3);
//                        String Concatination Operator(+)


// console.log("Hello"+"Gyzz");
// console.log(3**3);//27 , 3*3*3 exponentiation operator(**)
// console.log(3*3);// 9
// console.log(10*-1);// -10
// console.log(10 ** -1);// 0.1
// var num1=5;
// var num2='5';
// console.log(num1==num2);//true : only check the value
// console.log(num1===num2);//false : check value and also data type





// var myName = 'sahil rajput';
// var myAge = 26
// console.log(myName);
// console.log(myAge);





//                         6 datatypes that are primitive
//                         Types:


// undefined :typesofinstance==="undifined"
// Boolean : typesofinstance==="bolean"
// Number : typesofinstance==="number"
// String : typesofinstance==="string"
// BigInt : typesofinstance==="bigint"
// Symbol : typesofinstance==="symbol"
// var myName = "Sahil Rajput"
// console.log(myName);
// console.log(typeof(myName));


// //                      number
// var myAge = 20; 
// console.log(myAge);
// console.log(typeof(myAge));


// //                       boolean
// var iAmSahil=true;
// console.log(iAmSahil);
// console.log(typeof(iAmSahil));


//                          NaN
// NaN===NaN;//false
// Number.NaN===NaN;//false 
// isNaN(NaN);//true
// isNaN(Number.NaN);//true                
// Number.isNaN(NaN);//true 
// console.log(NaN===NaN);


//                        if else
// var tomr="rain";
// if(tomr=="rain"){
// console.log("take raincoat");
// }
// else{
//     console.log("No Need raincoat");
// }


 //                        Challenge leap year
// var year = 2004;
// debugger;
// if(year%4==0&&year%100!==0){
//     console.log('Leap');
// }
// else if(year%400==0){
//     console.log('Leap');

// }
// else{
//     console.log('Not Leap');

// }



//                         truthy falsy
//                       5 falsy value in javascript
//=> 0,"",undifined,null,NaN,false** is falsy values
// if(score=10){
//  console.log('OMG , we loss');
// }else{
//     console.log('yes , we won');
// }



//                        ternary Operator
// var age=19;
//var show = (age>=18)?true:false;
// var age=19;
// console.log((age>=18)?"you are eligibal":"Not Eligible");



//                       Switch 
//find area of rectangle,circle and traingle;
// var length=6,base=3,height=8;
// var breadth = 8;
// var radius = 3;
// var area="rectangle";
// switch(area){
// case "rectangle":
// console.log("Area of Rectangle : "+length*breadth);
// break;
// case "circle":
// console.log("Area of Circle : "+3.14*radius*radius);
// break;
// case "triangle":
// console.log("Area of Triangle : "+0.5*base*height);
// break;
// default:
// console.log("Not Define");
// break;
//}  


//                      While Loop 
// var num=1;
// //block scope
// while(num<=10){
// console.log(num+" ");
// num++;
// }


//                       Do While Loop
// var num=20;
// do{
//     console.log(num+" ");
//     num++;
// }while(num<=10);
// console.log("\nAfter Loop : "+num+" ");
//          For Loop
// for(var num =0;num<=10;num++){
//     console.log(num);
// }
// for(var x=1;x<=10;x++){
//     console.log("8*"+x+" = "+8*x);
// }


//              Functions
// myFun();
// function myFun(){//will not execute
//     var a=9;
//     var b=7;
// console.log(""+a+b);
// }              
//             Function parameters and function argument

// function myFun(a,b,c){   
// console.log(""+a+b+c);}
// myFun(4,6,8);

//                Anomynous function
// var funexp = function(a,b){//function without name called anomynous function
//     return total=a+b;//this all expersion is called anomynous function expression
// }
// console.log(funexp(3,4));
// var sum = funexp(4,5);
// console.log(sum);


//ECMAScript ES6 6th eddition in 2015,ES7 7th eddition in 2016 .... ES11 6th eddition in 2020
//                 Let Vs Const Vs Var
//                 var=>function scope
//                 let and const=>block scope
// var myName ="Sahil"
// console.log(myName);
// myName="Rajput"
// console.log(myName);

// let myName ="Sahil"
// console.log(myName);
// myName="Rajput"
// console.log(myName);

// const myName ="Sahil"
// console.log(myName);
// myName="Rajput"//error myName will not change again
// console.log(myName);

// function biodata(){
// var myName="Sahil";
// let myName="Sahil"
// const myName="Sahil"
// console.log(myName);}

// if(true){
//     // var myLastName="Rajput";
//     // let myLastName="Rajput";
//     const myLastName="Rajput";
// console.log("Inner "+myName);
// console.log("Inner "+myLastName);
// }
// console.log("Outer "+myName);
// console.log("Outer "+myLastName);
// }
// biodata();

//          Template literals (Template Strings)
// for(let num=1;num<=10;num++){
//     let tableof=12;
//     console.log(`${tableof} * ${num} = ${tableof*num}`);
// }

//                Default Parameters
// function mult(a,b){
//     return a*b;
// }
// console.log(mult(4));//Nan

// function mult(a,b=5){//default value=5
//     return a*b;
// }
// console.log(mult(4));

//                    Arrow function
//first make function then call 
// const mult=(a,b)=>{
//     return `Multiplication of two numbers is ${a*b}`;
// }
// console.log(mult(3,4));

// const mult=(a,b)=>{
//     return `Multiplication of two numbers is ${(a=9)*(b=8)}`;
// }
// console.log(mult(3,4));

// const mult=(a,b)=>`Multiplication of two numbers is ${(a=9)*(b=8)}`;
// console.log(mult(3,4));

// const mult=(a,b)=>`Multiplication of two numbers is ${(a=9)*(b=8)}`
// console.log(mult(3,4));

//              Arrays in javascript
//var myFriend = new Array;//not mendatory
// function mu(a,b){
//     return a+b;
// }
// var myFriend=['sahil','mridul',true,90,'mayank',mu(2,8)];
// for(let i=0;i<myFriend.length;i++){
//     console.log(myFriend[i]);
// }
// for(let element in myFriend){//provide index number
//     console.log(element);}

// for(let element of myFriend){//provide values one by one
//     console.log(element);}
//  myFriend.forEach(function(elements,index,Array){
// console.log(elements+" Index: "+index+" Araay: "+Array);
//  });
//              By Arrow function
// myFriend.forEach((elements,index,Array)=>{
//     console.log(elements+" Index: "+index+" Araay: "+Array);
//      });
//
//             Arrays Methods
//1.  indexOf()
// console.log(myFriend.indexOf('mridul'));
// myFriend.sort();
// for(let element of myFriend){//provide values one by one
//         console.log(element);}

//               CRUD

//push
// const animals = ["dog","lion","tiger","bitch"];
// animals.push("Pig");//return the new length of array
// // console.log(animals.push("Pig"));//length of new array
// animals.push("cow","horse");
// console.log(animals);

//Unshift
// animals.unshift("Horse");//insert at first index
// console.log(animals);// return updated length

// const myNumber=[1,2,3,5];
// myNumber.push(6);
// console.log(myNumber);

//Pop (remove from last)

// console.log(animals.pop());//last will remove and also return that which will going to remove
// console.log(animals);

//Shift (remove from first)
// console.log(animals.shift());
// console.log(animals);

// Challenge (splice method)
// const month =['jan','march','april','june'];
// const newMonth=month.splice(4,0,'july');//add july at 4 index return empty array
// console.log(month);//[] will gave the values how much elements is deleted
// console.log(newMonth);
//                    search and delete
// const indexOfMonth=month.indexOf('march');
// if(indexOfMonth>=0){
//     const updatedmonth=month.splice(indexOfMonth,1,'march');//remove july at index 1 and remove only 1 element 
//     console.log(month);//will gave the values how much elements is deleted(['march'])
//     console.log(updatedmonth); 
// }
// else{
// console.log('not found');
// }
//                infinity
// const indexOfMonth=month.indexOf('march');
// if(indexOfMonth>=0){
//     const updatedmonth=month.splice(indexOfMonth,Infinity);//remove all after march 
//     console.log(month);//will gave the values how much elements is deleted
//     console.log(updatedmonth); 
// }
// else{
// console.log('not found');
// }
//                      Map
// const array1 = [1,2,3,4,5];
// let newArr=array1.map((currentElem,index,arr)=>{//return a new array containing the     result of calling a function on every element in this array
// return currentElem>3;
// });
// console.log(array1)
// console.log(newArr)//[false,false,false,true,true]

// let newArr = array1.map((currElem,index,arr)=>{//return new array but does'nt mutating new array
// return `Index no. = ${index} and the value is ${currElem} belong to ${arr}`
// });//also chainable
// console.log(newArr);
// let newArr1 = array1.forEach((currElem,index,arr)=>{//return new array but does'nt mutating new array
//     return `Index no. = ${index} and the value is ${currElem} belong to ${arr}`
//     }); not chainable
//     console.log(newArr1);//undefined
// let arr=[24,45,6,7,5];
// let arrsqr =arr.map((currElem)=>{
// return Math.sqrt(currElem);
// });
// console.log(arrsqr);

//chaining method
// let arr=[2,3,4,5,5];
// let arr2=arr.map((curem)=>{
// return curem*2;
// }).filter((curElem)=>{
// return curElem>6;
// });
// console.log(arr2);

// Search
//  var myFriendNames=["sahil1","sahil2","sa"];
// console.log(myFriendNames.includes("sahil2"));//true

//find (no overloading)
// const prices = [200,300,400,500,600];
// //price<400
// const find=prices.find((currVal)=>{//only get first satisfied value
// return currVal<400;
// });
// console.log(find);

//find index (get only one data but gave index number)
// console.log(prices.findIndex((curr)=>curr<400));//both find and findIndex gave -1 when value not found

//filter() return array of satisfying elem else gave empty array
// const prices = [200,300,400,500,600,700,30];
// const newPriceTag = prices.filter((elem,index)=>{
// return elem<400;
// });
// console.log(newPriceTag);

//Sort and compare(sort according to utf-16)
// const month=['march',"jan","feb","april"];
// console.log(month.sort());

// const month=[1,4,10,2,5,2];//sorting by converting it in to string sot every number start with 1 is less 2 in strings
// console.log(month.sort());
 
// Reduce Method
//convert 3d and 2d array in 1d array
// let arr=[5,6,2];
// let sum =arr.reduce((accumulator,curentElem,index,arr)=>{
// return accumulator+=curentElem;
// });
// console.log(sum);

// let arr=[2,3,4,5,5];
// let arr2=arr.map((curem)=>{
// return curem*2;
// }).filter((curElem)=>{
// return curElem>6;
// }).reduce((accumulator,curentElem,index,arr)=>{
//      return accumulator+=curentElem;
//     });
// console.log(arr2);
//initial values
// let arr =[5,6,2];
// let sum = arr.reduce((accumlator,curElem)=>{
// return accumlator+=curElem;
// },7);
// console.log(sum);
// const arr=[['sahil','sahil2'],
// ['sahil','sahil2'],
// ['sahil','sahil2'],
// ['sahil','sahil2'],
// ['sahil','sahil2']
// ];
// let flatarr = arr.reduce((acum,curval)=>{
// return acum.concat(curval);
// });
// console.log(flatarr);

//*************************************************/
//***************STRING IN JAVASCRIPT***************
//*************************************************/

// can be primitive by using string literals , objects,using string constructor
// let myName ="Sahil"
// let myLastName="Rajput"
// let fullName=new String("Sahil rajput");//not use because output will contain name string also
// console.log(fullName);//[string: 'Sahil rajput']
// console.log(myName);

//                 Length
// let myName ="Sahil Rajput"
// console.log(myName.length);//give length of string

//                Escape Character use for add "" in string
// let anySentence="we are so called \"viking\" from the north";
// console.log(anySentence);// \"viking\" add double quotes

// let anySentence='we are so called "viking" from the north';
// console.log(anySentence);// when we use '' then we no need backspace

//                  indexOf
// const mybioData = 'I Am Sahil Rajput'//case sensitive
// console.log(mybioData.indexOf('Sahil'));//in case of not found it will gave -1
// console.log(mybioData.indexOf("a",8));//start searching from 8 index number


//                 Last
// const mybioData = 'I Am Sahil Rajput'//case sensitive
// console.log(mybioData.lastIndexOf('a',10));//start from 10 to 1 index

//          searching  a string in a string
// const mybioData = 'I Am Sahil Rajput'//case sensitive
// let sData=mybioData.search("Sahil");//return position
// console.log(sData);// cannot take secound argument as start position

//          Extracting string parts
//Three methods
//slice(start,end)//return the extracted part in a new string end position is not mendatory

// var str="apple,mango,bananna";
// let rs =str.slice(0,4);//appl 4 index will not include,original str not change 
// let rs =str.slice(5,-2);//start from 5 and print all but leave last 2 only
// console.log(rs);
//substring(start,end)
//substr(start,length)

// Challenge : create string contains only 13 character
// let myTweets="qedwEFDW FWQ FQWR FQ RWV RWAV ERV QER FW FWQ FEW FR V AERRV DF VAR VER V AV FAD V ADFV G VW RETV EF V FD VE V WER V FDV F VR W ERV F DV  FDA ERV F DAV FADVASD RE V RF V FD V EF VCAFSV AV "
// let myActual = myTweets.slice(0,13);
// console.log(myActual);
// console.log(myTweets.length);


//                        Substring method //same as slice but not take -index
// let str="sahil,mayank,bhalu";
// // let res=str.substring(0,4);
// // let res=str.substring(4,-7);//start from 0 to 4 index 

// console.log(res);


//                          substr //secound parameter take length
// let str="sahil,mayank,bhalu";
// // let res=str.substr(2,6);//start from 2 to 2+6 index not take neagative values
// let res=str.substr(-4);//print last 4 
// console.log(res);



//                          Replacing String Content()
// let str="sahil,mayank,bhalu";
// let rep = str.replace('mayank','mohak beta');//replace first mayank with mohak beta
// console.log(rep);


//                         Extract String Character

// charAt()
// let str="Hello world";
// console.log(str.charAt(0));// give H

// //charCodeAt // gave unicode
// console.log(str.charCodeAt(0));// give integer 72
//return unicode of last character
// console.log(str.charCodeAt(str.length-1));

// property Access ecma5
// console.log(str[0]);


//                         Other usefull method
// let myName="Sahil Rajput";
// console.log(myName.toUpperCase());
// console.log(myName);
// console.log(myName.toLowerCase());
// console.log(myName);

// let fName="sahil";
// let lname="rajput";
// console.log(fName.concat(lname));
// console.log(fName.concat("  ",lname));
// console.log(fName);
// console.log(lname);

// var str="          Hello World!"
// console.log(str.trim());
// console.log(str)

//             string to array
// var txt="a,b|,c ,d";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));  




//                          DATE AND TIME
//Date
//4 ways to create date
// 1. Date(),
// 2. new Date(year,month,day,hours,minutes,seconds,milliseconds),
// 3. new Date(milliseconds),
// 4. new Date(date string)

// let currDate=new Date();// current date with year,month,day,hours,minutes,seconds,milliseconds
// console.log(currDate);

// let currDate = new Date();// current date with year,month,day,hours,minutes,seconds,milliseconds
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(new Date().toTimeString());
// console.log(Date.now())//milisecond 1 jan 1970
// var d=new Date(2021,5,24,10,33,30,0);//year,month,day,hours,minute,secound,millisecound
// console.log(d.toLocaleString());
// var d=new Date(2021);//year,month,day,hours,minute,secound,millisecound
// console.log(d.toLocaleString());
// var d=new Date("October 13,2021 11:13:00");//year,month,day,hours,minute,secound,millisecound
// console.log(d.toLocaleString());
// var d = new Date(2551651621658);
// console.log(d.toLocaleString());


// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDay());
// console.log(curDate.getDate());

//gave in millisecound
// const curDate = new Date();
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

//       Time Method
// const curTime=new Date();
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// const curTime=new Date();
// console.log(curTime.setHours(4));//in milliseconds
// console.log(curTime.setMinutes(58));
// console.log(curTime.setSeconds(56));
// console.log(curTime.setMilliseconds(12));

// only time , data , both
// console.log(new Date().toLocaleTimeString());//08:15:52 am
// console.log(new Date().toLocaleDateString());// 16/7/2021



//            Math Object

//Math.PI;
// console.log(Math.PI);//3.141592653589793

//math.round();
// console.log(Math.round(9.434));//9

//Math.pow();
// console.log(Math.pow(2,3));
// console.log(2**3);

//Math.sqrt()
// console.log(Math.sqrt(23));

//Math.abs(x)//return positive absolute value
// console.log(Math.abs(-55));

//Math.ceil();
// console.log(Math.ceil(99.1));//100

//Math.floor(x)
// console.log(Math.floor(33.6));//33

//Math.min()
// console.log(Math.min(3,5,3,5,3223,));//3

//Math.max()
// console.log(Math.max(3,5,3,5,3223,));//3223

//Math.random()
// console.log(Math.random());//0,1 random values
// console.log(Math.random()*10);//0,9 random values

//Math.trunc()
// console.log(Math.trunc(4.6));//4
// console.log(Math.trunc(-4.6));//-4
//if argument is positive then it is equal Math.floor otherwise Math.ceil

//*********************DOM*************************/

//document is child of window
//ex document.body.background="red";
//document.body(),.head() gave the content 
//.location,.body.childNodes,.body.children
//.body.hasChildNodes


//**********************Time***********************/



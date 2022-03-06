// function whatIsInAName(collection, source) {
//     var arr = [];

//     // Only change code below this line
//    // console.log(Object.keys(collection[0])[0]);
//     var l = Object.keys(source);
//  // console.log(collection[l]);
// //   var a =collection[0].split();
//   console.log(l);

//     // Only change code above this line
   
//   }
//   var obj = { first: 'someVal' };
//     //console.log(obj[Object.keys(obj)[0]]); //returns 'someVal'
//    // console.log(obj);
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//   { first: "Mercutio", last: null }, 
//   {  last: "Capulet" }],
//    { last: "Capulet" });
// function spinalCase(str) {
//     var ar = str.split(" ");
//     console.log(ar);
//     var rslt="";
//     var ar1;
//      ar1=ar[0].toLowerCase();
//       rslt=`${ar1}`;
//     for(var i=1;i<ar.length;i++){
      
//       rslt+="-"+ar[i].toLowerCase();
     
//     }
//     console.log(rslt);
//     return rslt;
//   }
  
  // spinalCase('This Is Spinal Tap');

// const person = {
//   fname:"John",
//   lname:"Doe",
//   age:25
// }; 

// let txt = "";
// for (let x in person) {

//   txt += person.x+ " ";
//   console.log(person);
// }

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//   car1: "Ford",
//   car2: "BMW",
//   car3: "Fiat"
//   }
// }
// console.log(myObj[0]);


// function whatIsInAName(collection, source) {
//  var arr = JSON.stringify(collection);
//  var arr1 = arr.split("}");
//  console.log(arr1[0]);
//   // return arr;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// function whatIsInAName(collection, source) {
  // var srcKeys = Object.keys(source);
  // console.log(srcKeys[0]);
  // return collection.filter(function(obj) {
  //   debugger;
  //   for (var i = 0; i < srcKeys.length; i++) {
  //     if (
  //       !obj.hasOwnProperty(srcKeys[i]) ||
  //       obj[srcKeys[i]] !== source[srcKeys[i]]
  //     ) 
  //       return false;
      
  //   }
    
  //   return true;
  // });
// }
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// );

// function translatePigLatin(str){
// var i=0;
// var s="";
// if(str[0]!='a'&&str[0]!='i'&&str[0]!='e'&&str[0]!='o'&&str[0]!='u'){
// for(var i=1;i<str.length;i++){
// if(str[i]=='a'||str[i]=='i'||str[i]=='e'||str[i]=='o'||str[i]=='u'){
// s += str.substr(i,str.length);
// console.log(s);
// console.log(i);
// break;
// }
// }
// s+=str.substr(0,i)+"ay";
// console.log(s);
// return s;
// }s=str+"way";
// return s;
// }
// translatePigLatin("california");
// function fearNotLetter(str) {
//   var x = str[0].charCodeAt();
//   x++;
//   for(var i=1;i<str.length;i++){
//     if(x==str[i].charCodeAt()){
//       x++;
//     }
//     else{
//       console.log(String.fromCharCode(x));
//       break;
//     }
//   }
  
// }

// fearNotLetter("abce");
// function uniteUnique(...arr) {
//   debugger;
//   console.log(arr);
//   var a = arr[0];
//   var a1=[];
//     for(var i=1;i<arr.length;i++){
//     a1=arr[i];
//     for(var j=0;j<a1.length;j++){
//       if(a.indexOf(a1[j])==-1){
//         a.push(a1[j]);
//       }
//     }
//   }
//   console.log(a);
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// function convertHTML(str) {
//   str.replace("&","&amp;");
//   str.replace(">","&gt;");
//   str.replace("<","&lt;");
//   str.replace("'","&apos;");  str.replace('"',"&quot;");
// console.log(str);
// }
// convertHTML("Dolce & Gabbana");
// function pairElement(str) {
//   var a=[];
//   var j=0;
//   for(var i=0;i<str.length;i++){
//     if(str[i]=='A'){
//       a.push('A','T');
//       console.log(a);
      
//     }else if(str[i]=='T'){
//       a.push('T','A');
//       console.log(a);

//     }else if(str[i]=='C'){
//       a.push('C','G');
//       console.log(a);
//     }else if(str[i]=='G'){
//       a.push('G','C');
//       console.log(a);
//     }
//   }
//   console.log(a);
//   return a;
// }
// pairElement("GCG");
// function sumFibs(num) {
//   var i, Sum = 0;
//   for(i = 1; i <= num; i++)
//   {
//   	if ( i%2 != 0 ) 
//   	{
//   		printf("%d  ", i);
//         Sum = Sum + i;
//   	}
//   }

//   return 0;
// }

// sumFibs(4);
// function smallestCommons(arr) {
//   debugger;
//   var a=arr[1];
//   var b=arr[0];
//   var f=0;
// if(arr[0]<arr[1]){
//   a=arr[0];
//   b=arr[1];
// }
//   var num=Math.max(...arr);
//   while(true){
//     f=0;
    
//     for(var i=a;i<=b;i++){
//       if(num%i!=0){
//         f=1;
//         break;
//       }
//     }
//     if(f==0){
//       console.log(num);
//       break;
//      // return i;
//     }
//     num++;
//     //console.log(num);
//   }
  

// }
// smallestCommons([1,5]);

// function dropElements(arr, func) {
//   var a=[];
//   for(var i=0;i<arr.length;i++){
//     if(func(arr[i])===true){
//       console.log(arr[i]);
//       a.push(arr[i]);
//     }
//     else
//        {
//          arr.shift();
//        }
//   }
//   console.log(a);
//   return arr;
// }
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   console.log(arr);
//   return arr;
// }

// // test here
// dropElements([1, 2, 3, 4], function(n) {
//   return n >= 3;
// });
// function steamrollArray(arr) {
//   var a = arr
//   return arr;
// }

// steamrollArray([1, [2], [3, [[4]]]]);
// function binaryAgent(str) {
//   const inputStr = str.split(' ');
//   const output = [];
//   inputStr.forEach(item => {output.push(String.fromCharCode(parseInt(item, 2)))});
//     var r="";
//     for(var i=0;i<output.length;i++){
//       r+=output[i];
//     }
//    console.log(r);
//    return r;
   
//   }
  
//   binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
// function truthCheck(collection, pre) {
//   debugger;
//   var f=0;
//  for(var i=0;i<collection.length;i++){
//    if(!collection[i].hasOwnProperty(pre)||collection[i][pre]===false){
//      console.log(false);
//      console.log(collection[i][pre]);
//      return false;
//    }
//    else{   
//    }
//  }
// }

// truthCheck([{"single": "double"}, {"single": "d"}], "single")
// function addTogether(...a) {

 
//   if(typeof a[0]==='number'){
//     console.log(a[0] ," is a number");
//   }
//   console.log(a[1]);
//   if(a[1]===undefined){
//     console.log("need to return");
//     return undefined;
//   }
//   if(typeof a[1]==='number'){
//     console.log(a[1]," is a number");
//   }
//   else{
//     console.log("not a nubr");
//   }
 


// }

// addTogether(2,"def");

// function steamrollArray(arr) {
//   var rslt = arr;
//    while(true){
//      var f =true;
//      for(var e of rslt){
//        if(Array.isArray(e)){
//          f = false;
//          rslt = flat(rslt);
//          console.log(rslt);
//          break;
//        }
//      }
//      if(f){
       
//        return rslt;
//      }
//    }
   
//  }
//  const flat=(arr)=>{
//    var r=[];
//    for(let element of arr){
//      if(Array.isArray(element)){
//       for(let ie of element){
       
//         r.push(ie); 
//       }
//      }
//      else{
//        r.push(element);
//      }
//    }
//    return r;
//  }
//  console.log(steamrollArray([1, [2], [3, [[4]]]]));
 

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(obj=>{
    return {
      name:obj.name,
      orbitalPeriod:Math.round(2*Math.PI*Math.sqrt(
      Math.pow(
      earthRadius+obj.avgAlt,3)/GM))
    }
  });
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);




//Regular Expersions
// console.log("Regular Expersion by code with harry");
// let reg = /harry/g; //regular exp literal /g use for make global search all the harry one by one
//reg = /harry/i;//case in sensitive match all type of harry capital or not but not global
// console.log(reg);// /harry/
// console.log(reg.source);//harry

// let s = "This is js tutorial by harry from code with harry";
//Function to Match Expression

// 1. exex()-->This function will return an array for match or null for no match
// let result = reg.exec(s);//index 23
// console.log(result)//
// result = reg.exec(s);//index 44 if harry no available after 23 it will return null
// console.log(result)//

// 2. test()-->Return true or false
//let result = reg.test(s);
//console.log(result); //true if match

// 3. match()-->it will return an array of results or null
// let result = s.match(reg);
// console.log(result);//array of two harry

// 4. search()-->return index of first match else -1
// let result = s.search(reg);
// console.log(result);//24 

// 5. replace()-->Return new string with all replacements
// let result = s.replace(reg,"Sahil");//This is js tutorial by Sahil from code with Sahil
// console.log(result);

// MetaCharacter Symbols

// let str = "harry is  harry is code with harry";
//  let regex = /hary/;
// regex=/^har/;//means experssion will start with
// regex = /ry$/;//match last of string
// regex = /h.rry/;//match any one character between h and r
// regex = /h*rry/;//match any 0 or many character between h and r
// regex=/ha?rryi?/;// a and r optional
// str = "h*arry is  harry is code with harry";
// regex=/h\*arry/;//match * presentz or not
// str = "harry is  harry is code with harry";
// let result = regex.exec(str);
// console.log(result);
// if(regex.test(str))
// console.log(`The String ${str} matches the expression ${regex.source}`);
// else{
//     console.log(" not matches");
// }
//lets look in to some meta character


// let str = "harry bhai";
// let regex = /h[a-z]rry/;//match if a-z is present between h and r
//  regex = /h[ryu]rry/;//match if r,y u is present between h and r
//  regex = /h[^ryu]rry/;//match if r,y u is not present between h and r
//  //Multiple charcter set
//  regex=/h[^rty]rr[^k]/;//mutiple characterset
//  str = "harry bhai";
//  regex=/h[a-zA-Z]rry/;
//  str = "harry9 bhai";
//  regex=/h[a-zA-Z]rr[y0-9]/;//h a-z or A-Z between h,r and y and 0-9 after r 
// Quantifier

//groupings - we use pranthesis
// regex=/har{2}y/;//2 r shuld be present
// regex=/har{0,2}y/;//0-2 r shuld be present
// regex = /(har){2}([0-9]r){3}/;//harhar3r3r3r
// str = "harhar3r3r3ry  bhai";
// let result = regex.exec(str);
// if(regex.test(str))
// console.log(`The String ${str} matches the expression ${regex.source}`);
// else{
//     console.log(" not matches");
// }

//Charcter Classes
let regex = /\w rry/;//word charcter  _or alphabet or number
let str = "saxx_d1r";
regex = /\w+d1r/;//after 1 or more then one character
str = "saxx_ d1r";
regex=/\Wd1r/;//non word 
regex=/\W+ry/;// \W+means more than one non word character
regex=/\d6363/ ;
regex=/number \d6363/ ;
str = "saxx_    d1   rynumber 86363636";
regex=/\D86/
str = "saxx_    d1   rynumber s86363636";
regex=/\D+347/
str = "sdsd347";
regex=/\s+347/;///more then one match whitespace character
str = "sdsd 347";
regex=/\S+347/;///more then one match non-whitespace character
str = "sdsd347";
regex=/347r\b/;///check space after  373r
str = "sdsd347r r";

//Assertion
regex = /h(?=y)/;//check y after h
str="hy"
regex = /h(?!=y)/;//check not y after h
str="hey"
let result = regex.exec(str);
if(regex.test(str))
console.log(`The String ${str} matches the expression ${regex.source}`);
else{
    console.log(" not matches");
}
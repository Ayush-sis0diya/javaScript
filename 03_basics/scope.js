let a = 100;
const b = 200;
var c = 300;

if(true) {
 let a = 10;
 const b = 30;
 console.log("inner :" , a); // inner : 10
}

console.log(a);  //a =>100 because of a is declared globally;

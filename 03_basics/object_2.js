const tinderUSer = new Object();

tinderUSer.id = "1234ABC"
tinderUSer.name ="ayush"

// object inside an object
const regular = {
    email:"ayss@haas",
    fullname:{
        username:{
            firstname:"ayush",
            lastname: "choudhary"
        }
    }
}
 
// console.log(regular.fullname.username);


// console.log(Object.keys(regular))   // [ 'email', 'fullname' ]

// console.log(Object.values(regular))
//  [
//   'ayss@haas',
//   { username: { firstname: 'ayush', lastname: 'choudhary' } }
// ] 

console.log(Object.entries(regular)) //[ [ 'email', 'ayss@haas' ], [ 'fullname', { username: [Object] } ] ]
// there are two type of memory /
// heap(non primitive data type) and stack(primitive data type)

//stack memory use primitive data type

let name = "ayush";
let name1 = name;  //// here "name" send its copy value insstead of orignal value to "name1"
//console.log([name , name1]); // [ 'ayush', 'ayush' ]



// change the value of name1 
name1 = "kiran"; // as in stack memory the copy of the orignal value is used by "name1" so when you change the value of name1 the name value is not change;
//console.log([name , name1]); // [ 'ayush', 'kiran' ]



//****************************heap memory************************* */

//heap(non primitive data type)

let user = {
    name : "ayush",
    email : "ayush@google.com"
}

let user2 = user;
console.log(user2.name); //ayush

// change the value of user 2 name 

user2.name='kiran';
console.log([user,user2]);
//   { name: 'kiran', email: 'ayush@google.com' }
//   { name: 'kiran', email: 'ayush@google.com'//
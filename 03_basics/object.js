// object litrals
const mysum = Symbol("key1");

const Jsuser = {
    name: "Ayush",
    "full name": "Ayush Sisodiya",
    [mysum]: "mykey1", //[Symbol(key1)]: 'mykey1'
    age: 21,
    location: "Indore",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLogin: ["monday","Saturday"]
}


// console.log(Jsuser.name);
// console.log(Jsuser["full name"]);
// console.log(["name"]);
// console.log(Jsuser);




Jsuser.greeting = function(){
    console.log(`hello js user, ${this.name}`); 
}
console.log(Jsuser.greeting()); // hello js user, Ayush
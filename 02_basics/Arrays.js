const arr = [1,2,3,4,5,6];

// console.log(arr.indexOf(4)); //3

const a = arr.push(7);
//console.log(arr); //[ 1,2,3,4,5,6,7]

const b = arr.pop();
// console.log(arr); //[ 1,2,3,4,5,6,7] ==> [ 1, 2, 3, 4, 5, 6 ]

// const c = arr.join();
// console.log(arr);
// console.log(typeof(arr[1]));






// slice vs splice 
const num = arr.slice(0,4); //[ 1, 2, 3, 4 ]
// console.log(arr)  [[ 1, 2, 3, 4, 5, 6 ]]

const num1 = arr.splice(0,4); //[ 1, 2, 3, 4 ]
// console.log(arr); // [[ 5, 6 ]]


const marvel = ["spidy","thor","iron"];
const dc = ["batamn","supers","flash"];

// marvel.push(dc);
// console.log(marvel); [ 'spidy', 'thor', 'iron', [ 'batamn', 'supers', 'flash' ] ]



///  CONCATE 
// marvel.concat(dc);
// console.log(marvel); [ 'spidy', 'thor', 'iron', [ 'batamn', 'supers', 'flash' ] ]
//  const ayush = marvel.concat(dc);
//  console.log(ayush);



//spread

// const AB = [...marvel,...dc]
// // console.log(AB); [ 'spidy', 'thor', 'iron', 'batamn', 'supers', 'flash' ]


//flat

// const array = [1,2,3,[4,5,[6,7]]];
// const array2 = array.flat(Infinity);
// // console.log(array2); [1,2,3,4,5,6,7]

//isArray



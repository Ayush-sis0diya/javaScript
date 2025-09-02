// filter

// const arr = [1,2,3,4,5,6,7,8]

// const number = arr.filter((num) =>{
//     return num > 4;
// })
// console.log(number);  //[ 5, 6, 7, 8 ]


// map

// const arr = [1,4,9]

// const number = arr.map((num) =>{
//     return Math.sqrt(num);
// })
// console.log(number);  //[ 1, 2, 3 ]


// REDUCE

const number = [1,2,3,4,6]

const sum = number.reduce((acc,curval) =>{
    return acc+curval
},0)
console.log(sum); //16
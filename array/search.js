// this file is for seaching methods on a given array

// 1 indexof() - finding the index of a given elem

const fruits = ["apple" , "orange", "banana","orange" , "mango"];

let Position = fruits.indexOf("banana");
// console.log(Position);

// 2 lastIndexOf() - find the index but search from the end (last elm);

let secondPst = fruits.lastIndexOf("orange")
// console.log(secondPst);


//3 includes() - returning boolean according to the  elm present or not

let isPresent = fruits.includes("mango")
// console.log(isPresent);

// 4 find () - returning the elem if passees the condition 

let num = [1,2,43,4,,6,7,7]

let first = num.find((n)=> n>18);

// console.log(first);

// 5 findIndex() - returning the index of elem if passess the condition

let indFirst = num.findIndex((n)=> n>18)

// console.log(indFirst);

 
// 6 findLast() - returning the   last elem if pase the condition

// not supported in the node currently 

// 7 findlastIndex()- as acpected but not supporting currently








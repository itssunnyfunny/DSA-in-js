// iterating on the given array
const arr = [1,2,3,4,6,5]

//1 for each - it is for itarating on the array don't return any thing i guess
let text = ""
arr.forEach(myfunction)
 function myfunction(value) {
    text += value + "<br>"
 }
// console.log(text);

//2 map() - it creates new array with performing a function of it

 const newArr = arr.map((n)=> n*10)
//  console.log(newArr);

 //3  filter - create a new array with the elm who passes the test(certain conditions)

 const fltArr = newArr.filter((n)=> n<40)

//  console.log(fltArr);

 // 4 flatMap() - map over a array then creates new array with flatting the array
 const fatArr =  arr.flatMap((n)=> n*2)
//  console.log(fatArr);

//5 reduce() - return a value from the array with a given intial value first argument(n) is intial value

const sum = arr.reduce((n,e)=> {return n+e},10)
// console.log(sum);



 

 
 

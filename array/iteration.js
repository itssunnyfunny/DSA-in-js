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



// 6 reduceRight() - similar to reduce 

const rsum = arr.reduceRight((n,e)=> n+e)

//  console.log(rsum);

 //////////////

 // 7 every() - return boolean according to condition given if all elem passes it will return true

 const age = [12,43,65,17,18,54]

 const isThis = arr.every((n)=>n>18)
//  console.log(isThis);

 //8 some() - same as every but if any elem passes the conditin it will return true

 const isThat = age.some((n)=> n>18)
//  console.log(isThat);


// 9  Array.from() - create a array from a given string 

 const str = "shani yadav"

  const strArr = Array.from(str)
//   console.log(strArr);


  //10 with() - enter the elem in the given array without alter the original array / in 2023

  const months = ['january' , 'fabruary', 'marc', 'April'];

//  const newMonths =months.With(2,'march')
//  console.log(newMonths); 
// not supported currentlly

// 11 spread(...) spreading the given array and do what is you want

 const newArray = [...age, 0,0,43,0, ...arr]
 console.log(newArray);
 
 
  
 
 

 
 

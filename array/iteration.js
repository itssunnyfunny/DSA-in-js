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

 console.log(fltArr);
 
 

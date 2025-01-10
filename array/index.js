// do lot of array and str functions 
const arr = [1,2,45,5,34,5,67,7,6];



// @@@@ returning or converting to string @@@@ //

//1 length

//console.log(arr.length);


//2 toString = return a string

 const str = arr.toString()


 //3 at - what is the value at index
 arr.at(4)

 //4 join - return a string

  const jin = arr.join('@')


  // @@@@@@@@@@@ removing adding into the array @@@@@@@@@@@@ //

  //5 pop() - remove the last elm of the attach array

  arr.pop() 


  //6 push() - adding a elm to a array from last
  arr.push(100)


//7 shift - remove the first elm of array

arr.shift()


//8 unshift() - add a new elm at the starting of array

arr.unshift(1)

// @@@@@@ Merging Arrays @@@@@@ //

//9 concat() - returning new array with two arrays or new elm

const arr2 = [0, 0, 0, 0,0]
const arr3 = [1,0,1,0,1,0,1]

const newArr = arr.concat(arr2,arr3,100000)
// console.log(newArr);

// 10 splice() - cutting / removing the elem
arr.splice(0,1);
// console.log(arr);
// adding new elem and canbe deleted samutationaly 1) index, 2) nub of elem that is removed ,3) after 2) all the arguments as new elems 

arr.splice(1,1, 12,43)
// console.log(arr);


//11 slice() - creating a new array with the elem of another array 

const narr = [12,34,12,645,54,65,3434,3434,34331,657,3432273,]

const narr1 = narr.slice(0,5)
console.log(narr1);





  
  


  
 


 

 

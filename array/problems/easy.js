// 1 sum of given array
const arr = [1,2,3,5,5,2,,2,2,2]

function sumOfAll(arr) {
  return  arr.reduce((p, a)=> a+p)
}


//2 max value in a array
//2 max value in a arrayW
//2 max value in a array

function maxVal(arr) {
    return Math.max.apply(null, arr)
}


// 3 even numbers

function isEven(arr) {
    return arr.filter((n) => n%2 === 0)
}

// 4 reverse the given array

function reverse(arr) {
    // return arr.reverse()
  
    for (let i = 0; i < Math.floor(arr.length /2); i++) {
        let length = arr.length -1 -i;
        
      let  k = arr[i];
        arr[i] = arr[length]
        arr[length] = k;
        
    }
    return arr
}
const reversed = reverse(arr)





// 5 calculate the occurrence of a num

function countOcc(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count ++;
        }
        
    }
    return count;
}



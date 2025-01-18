// its for sorting the arrays


// Alphabetical sorting

// 1 sort() - sorting the array alphabetically
const fruits = ["banana", "orange", "apple", "mango"];
//  fruits.sort()
// console.log(sorted);

// 2 reverse() - reversing the given array

// fruits.reverse()
// console.log(fruits);

//3 toSort() - returning a new sorted array

// not supported yet in my node version

// 4 toreverse() - returning a new reversed array
 
// not supprted in my node yet


// Numeric Sort

// 5 sort()-  the array contains num
const nub = [1,45,657,199, 4, 2,]
// sorting accendinglly
nub.sort((a, b)=> a-b)
// console.log(nub);

// 6 sort() - in decending order

nub.sort((a,b)=> b-a)

// console.log(nub);

// 7 sort() - randomly 

nub.sort(function(){return 0.5 - Math.random()})

// console.log(nub);

// 8 find min value() - 
function minValue(arr) {
    return Math.min.apply(null, arr)
}

const min = minValue(nub)
// console.log(min);


// 9 find the max value of given array

function maxValue(arr) {
    return Math.max.apply(null, arr)
}


const max = maxValue(nub)
// console.log(max);


// 10
// ### Fisher Yales Method ### //

let points = [23, 5334, 6, 3, 25, 71, 3];

console.log("Original array:", points);

for (let i = points.length - 1; i > 0; i--) { // i-- is the correct i write i++ by mistake that runs infinite loop
  let j = Math.floor(Math.random() * (i + 1));
  console.log(`Swapping index ${i} with index ${j}`);
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log("Shuffled array:", points);

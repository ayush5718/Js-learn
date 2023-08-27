// const arr=[1,2,3,4,5]
// console.log(arr); // this will print the whole array
// console.log(arr[2]); // this will print the array value which is on index 3

//+++++++++++++++++++++++++++++++++++++++++++ shallow copy
//  shallow copy stores the reference of the object while on the other hand deep copy stores the copy of the objects 

// arr.push(9) // add 9 in last of array
// arr.pop() // this pop is for removing an element from an array
// console.log(arr);

const arr1=[1,2,3,4]
const arr2=[5,6,7,8]

// const arr3= arr1.concat(arr2)  // this ar3 is contaning both the merged array 
// console.log(arr3[4]);  //  this will print 5

// const arr3=[...arr1, ...arr2] // mergeing two array using spread operator
// console.log(arr3);
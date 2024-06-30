/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

/************************************************** */
// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array:", arr1);
/*If you log the first  array to the console, you'll see that when we  
pushed the fourth element into the 2nd array,  it was also pushed into the first array.
This is because the second array is  not actually a copy of the first,  
it's a new variable which points to the same  object as the other variable. Because of this,  
anything we do to the second array will  be done to the first and vice versa.  */


/************************************************** */
// Copying an array
let arr3 =[4, 5, 6];
let arr4 = [...arr3];
/* create a new variable, array 4, and then "spread" the first array into it, 
using this three dots syntax. This operator “spreads” the values of the third array 
into the fourth, giving you a simple way to create an entirely new object. 
If you push a new element, like 7, into the fourth array, you can see by logging 
both arrays to the console that the third remains untouched.  */

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);


/************************************************** */
// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
/* To make a copy of the object, I can simply “spread” object 1 into a new object, called object 2.
I can then add a new property to the second object, and the first remains untouched. */
let obj3 = {...obj1, b: 5};
/*Additionally, if you want to change one of the values in the original object, you can do that  
by simply overwriting it in the new object. In object 3, I’m first spreading object 1, and  
then overwriting b from 2 to 5. If I log this to the console, the first object is still untouched,  
and the third object has the same property values, except for b which has been overwritten. */

console.log("First object", obj1);
console.log("Second object", obj2);
console.log("Third object", obj3);


/************************************************** */
// Copying only part of an array/object
let arr5 =[...arr1, {...obj1}, ...arr3, "x", "y", "z"];
/*It's worth noting that the spread operator doesn't need to make up the entirety of the object or  
array you create with it. In other words, if I wanted to combine several of the objects we've  
worked with so far into a new object, I can define something like array 5, and inside it I can spread 
the first array, the first object by spreading it within curly braces, the third array, and three 
arbitrary values like x, y, and z. If I then log this new array to the console, you'll see it contains 
all the elements of the first and third arrays as well as a copy of the first object, 
and our three new elements. */

console.log(arr5);

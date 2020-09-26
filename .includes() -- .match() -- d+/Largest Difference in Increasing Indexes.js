/*
Summary: Write a function which takes an array data of numbers and returns the largest 
difference in indexes j - i such that data[i] <= data[j]

Long Description:

The largestDifference takes an array of numbers. That array is not sorted. Do not sort 
it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or 
equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.
*/

var largestDifference = function(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
     for (let j = data.length - 1; j >= i; j--) {
       if (data[j] >= data[i]) {result.push(j - i)
                               break;}
     }
    } return Math.max(...result);
  };
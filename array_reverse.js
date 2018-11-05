'use strict';
firstOne = ['string', 5, 7]
function reverseArray(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray[i] = arr[firstOne.length - (i + 1)];
  }
  return newArray;
}

reverseArray(firstOne);
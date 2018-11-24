'use strict';

function binarySearch (arr, value) {
  let start = [0];
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (arr[middle] !== value && start < stop) {
    if (value < arr[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  return value;
}

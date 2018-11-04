const addMe = (arr, number) => {
  let mid = (arr.length / 2);
  for (var i = arr.length - 1; i >= mid; i--) {
    arr[i + 1] = arr[i];
  }
  arr[mid] = number;
  return arr;
};

addMe([1, 2, 3, 5], 4);

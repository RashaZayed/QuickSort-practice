function quickSorting(arr, low, high) {
  if (low < high) {
    var p = partition(arr, low, high);
    quickSorting(arr, low, p - 1);
    quickSorting(arr, p + 1, high);
  }
}
function swap(arr, num1, num2) {
  var temp;
  temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

function partition(arr, low, high) {
  var pivot = arr[high];
  i = low - 1;
  var j;
  for (j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}
var arr = [5, 6, 3, 8, 2, 8, 4, 9];
quickSorting(arr, 0, 7);
console.log(arr);

function quickSorting(arr, low, high) {
  if (low < high) {
    var p = partition(arr, low, high);
    quickSorting(arr, low, p - 1);
    quickSorting(arr, p + 1, high);
  }
}
function swap(num1, num2) {
  var temp;
  temp = num1;
  num1 = num2;
  num2 = temp;
}

function partition(arr, low, high) {
  var pivot = arr[high];
  i = low - 1;
  var j;
  for (j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr[j], arr[i]);
    }
  }
  swap(arr[i + 1], arr[high]);
  return i + 1;
}

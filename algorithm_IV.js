function greaterthanY(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  return count;
}

function maxminavg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log(max, min, avg);
}

function replaceNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}

function removeVals(arr, start, end) {
  arr.splice(start, end - start + 1);
  return arr;
}

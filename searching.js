//generate code for search algorithms

//generate code for linear search
function linearSearchCode() {
  let code = `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`;
  return code;
}

//generate code for binary search
function binarySearchCode() {
  let code = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`;
  return code;
}

//generate code for jump search
function jumpSearchCode() {
  let code = `function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }
  if (arr[prev] === target) {
    return prev;
  }
  return -1;
}`;
  return code;
}

//generate code for interpolation search
function interpolationSearchCode() {
  let code = `function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  return -1;
}`;
  return code;
}

//generate code for exponential search
function exponentialSearchCode() {
  let code = `function exponentialSearch(arr, target) {
  let n = arr.length;
  if (arr[0] === target) {
    return 0;
  }
  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }
  return binarySearch(arr, target, i / 2, Math.min(i, n));
}`;
  return code;
}

//generate code for ternary search
function ternarySearchCode() {
  let code = `function ternarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid1 = low + Math.floor((high - low) / 3);
    let mid2 = high - Math.floor((high - low) / 3);
    if (arr[mid1] === target) {
      return mid1;
    } else if (arr[mid2] === target) {
      return mid2;
    } else if (arr[mid1] > target) {
      high = mid1 - 1;
    } else if (arr[mid2] < target) {
      low = mid2 + 1;
    } else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
  return -1;
}`;
  return code;
}

//generate code for fibonacci search
function fibonacciSearchCode() {
  let code = `function fibonacciSearch(arr, target) {
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;
  let n = arr.length;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }
  let offset = -1;
  while (fibM > 1) {
    let i = Math.min(offset + fibM2, n - 1);
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }
  return -1;
}`;
  return code;
}

//generate code for jump search
function jumpSearchCode() {
  let code = `function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }
  if (arr[prev] === target) {
    return prev;
  }
  return -1;
}`;
  return code;
}

//generate code for exponential search
function exponentialSearchCode() {
  let code = `function exponentialSearch(arr, target) {
  let n = arr.length;
  if (arr[0] === target) {
    return 0;
  }
  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }
  return binarySearch(arr, target, i / 2, Math.min(i, n));
}`;
  return code;
}

//generate code for ternary search
function ternarySearchCode() {
  let code = `function ternarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid1 = low + Math.floor((high - low) / 3);
    let mid2 = high - Math.floor((high - low) / 3);
    if (arr[mid1] === target) {
      return mid1;
    } else if (arr[mid2] === target) {
      return mid2;
    } else if (arr[mid1] > target) {
      high = mid1 - 1;
    } else if (arr[mid2] < target) {
      low = mid2 + 1;
    } else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
  return -1;
}`;
  return code;
}


function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
  
    let min = arr[0];
    let max = arr[0];
  
    arr.forEach(val => {
      if (val < min) min = val;
      if (val > max) max = val;
    });
  
    return { min, max };
  }
  
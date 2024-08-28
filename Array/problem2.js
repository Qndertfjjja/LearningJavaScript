function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
  
    return arr.reduce((acc, val) => {
      return {
        min: Math.min(acc.min, val),
        max: Math.max(acc.max, val)
      };
    }, { min: arr[0], max: arr[0] });
  }
  
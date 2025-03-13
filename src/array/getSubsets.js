function getSubsets(arr) {
  const subsetArr = [];
  const N = arr.length;
  for (let i = 0; i < 1 << N; i++) {
    const subset = [];
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    subsetArr.push(subset);
  }
  return subsetArr;
}

console.log(getSubsets([1, 2, 3]));

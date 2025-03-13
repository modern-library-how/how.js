function getSubsets<T>(arr: T[]): T[][] {
  const N: number = arr.length;
  const subsetArr: T[][] = [];
  for (let i = 0; i < 1 << N; i++) {
    const subset: T[] = [];
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
console.log(getSubsets(['hi', 'bye']));

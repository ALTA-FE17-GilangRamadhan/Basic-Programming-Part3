function meanMedian(arrayInput: number[]): number[] {
  // Your Code Here
  let sum: number = 0;
  let len: number = arrayInput.length;
  let mapArr: number[] = arrayInput.map((x) => (sum += x));
  let mean: number = sum / len;
  let median: number = 0;

  if (len % 2 == 0) {
    median += (arrayInput[len / 2 - 1] + arrayInput[len / 2]) / 2;
  } else {
    median += arrayInput[Math.floor(len / 2)];
  }

  return [mean, median];
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
console.log(meanMedian([25, 12, 15, 30, 40, 38, 27, 15]));

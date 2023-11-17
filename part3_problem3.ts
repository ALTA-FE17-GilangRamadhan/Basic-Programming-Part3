function removeDuplicates(array: number[]): number | string {
  // Your Code Here
  let newArr: number[] = [];

  for (let val of array) {
    if (!newArr.includes(val)) {
      newArr.push(val);
    }
  }

  let result: string = "panjang array: " + newArr.length + "\n" + "Array: " + newArr;

  return result;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4

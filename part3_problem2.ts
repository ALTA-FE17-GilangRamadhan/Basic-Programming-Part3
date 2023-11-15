function joinArrayRemoveDuplicate(arrayA: string[], arrayB: Array<string>): Array<string> {
  // Your Code Here
  let joinArr: string[] = [];

  for (let val of arrayA) {
    joinArr.push(val);
  }

  for (let val of arrayB) {
    joinArr.push(val);
  }

  let removeDup: string[] = [];

  for (let val of joinArr) {
    if (!removeDup.includes(val)) {
      removeDup.push(val);
    }
  }

  return removeDup;
}

console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// ["samsung", "apple", "sony", "xiaomi"]

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
// ["football", "basketball"]

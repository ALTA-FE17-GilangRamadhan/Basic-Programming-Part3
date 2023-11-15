function compareString(a: string, b: string): string {
  // Your Code Here
  let str1: string = "";
  let str2: string = "";
  if (a.length > b.length) {
    str1 += a;
    str2 += b;
  } else {
    str1 += b;
    str2 += a;
  }

  let result: string = "";

  for (let i: number = 0; i < str2.length; i++) {
    for (let j: number = 0; j <= str1.length; j++) {
      if (str2[i] == str1[j]) {
        result += str2[i];
        break;
      }
    }
  }

  return result;
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
console.log(compareString("HARIMAU", "MAU")); // MAU
console.log(compareString("SERIGALA", "ERI")); // ERI

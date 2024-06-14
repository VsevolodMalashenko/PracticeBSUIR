const arrayOfDigits = (array) => {
  var count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < 10) {
      count = count + array[i]
    }
  }
  return count
}

console.log(arrayOfDigits([1, 2, 11, 5, 0])) // 8
console.log(arrayOfDigits([10, 15, 0, 16])) // 0
console.log(arrayOfDigits([5, 9, 1, 14])) // 15

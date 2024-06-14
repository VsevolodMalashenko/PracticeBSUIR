'use strict'

const checkArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        return true
      }
    }
  }
  return false
}

console.log(checkArray([1, 2, 3])) // false
console.log(checkArray([1, 2, 3, 2, 4])) // true
console.log(checkArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // false
console.log(checkArray([9, 8, 7, 54, 2, 1, 54, 5])) // true
console.log(checkArray([1, 1])) // true

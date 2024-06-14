function variables() {
  var variable1 = 1
  let variable2 = 2
  const variable3 = 3
}

variables()

console.log(variable1) // ReferenceError: variable1 is not defined
console.log(variable2) // ReferenceError: variable2 is not defined
console.log(variable3) // ReferenceError: variable3 is not defined

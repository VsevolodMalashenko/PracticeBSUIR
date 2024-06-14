function numberLength(num) {
  const digits = num.toString().length
  return `Количество цифр в числе ${num}: ${digits}`
}

console.log(numberLength(56456456464345)) // Количество цифр в числе 56456456464345: 14
console.log(numberLength(1)) // Количество цифр в числе 1: 1
console.log(numberLength(123)) // Количество цифр в числе 123: 3
console.log(numberLength(67843)) // Количество цифр в числе 67843: 5
console.log(numberLength(12312313135346475685)) // Количество цифр в числе 12312313135346475000: 20

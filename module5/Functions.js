function generateStr(length) {
  const allSymbols =
    '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  let randomStr = ''

  for (let i = 0; i < length; i++) {
    randomIndex = Math.floor(Math.random() * allSymbols.length)
    randomStr += allSymbols.charAt(randomIndex)
  }
  return randomStr
}

console.log(generateStr(15))
console.log(generateStr(10))
console.log(generateStr(5))

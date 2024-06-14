const isEmptyArray = function (array) {
  if (array.length == 0) {
    throw new Error('Массив пуст')
  }
}

isEmptyArray([1, 2])
isEmptyArray([]) // Error: Массив пуст
isEmptyArray([1, 5, 193])

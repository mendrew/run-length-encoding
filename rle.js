/**
 * Дана строка, состоящая из букв A-Z:
 * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая на выходе даст строку вида:
 * "A4B3C2XYZD4E3F3A6B28"
 * И сгенерирует любую ошибку, если на вход пришла невалидная строка.
 *
 * Пояснение:
 * 1. если символ встречается 1 раз, он остается без изменений
 * 2. если символ повторяется более 1 раза, к нему добавляется количество повторений
 */

function getNewResultString(resultString, previousLetter, numberOfOccurrence) {
  const numberString = numberOfOccurrence === 1 ? '' : numberOfOccurrence
  return `${resultString}${previousLetter}${numberString}`
}

export default function rle(inputString) {
  const azRegexp = /^[A-Z]+$/
  if (!azRegexp.test(inputString)) {
    throw new Error('Input string is not valid')
  }

  if (inputString.length === 1) {
    return inputString
  }

  let resultString = ''
  let numberOfOccurrence = 1;

  const inputStringArray = [...inputString]
  for (let index = 1; index < inputString.length; index++) {
    const currentLetter = inputStringArray[index]
    const previousLetter = inputStringArray[index - 1]
    const sameLetter = previousLetter === currentLetter
    if (sameLetter) {
      numberOfOccurrence++
    }

    const letterChanged = previousLetter !== currentLetter
    if (letterChanged) {
      resultString = getNewResultString(
        resultString, previousLetter, numberOfOccurrence)
      numberOfOccurrence = 1
    }

    const lastLetter = index === inputStringArray.length - 1
    if (lastLetter) {
      resultString = getNewResultString(
        resultString, currentLetter, numberOfOccurrence)
    }
  }

  return resultString
}

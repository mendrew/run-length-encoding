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

function getNumberOfOccurrenceString(numberOfOccurrence) {
  if (numberOfOccurrence > 1) {
    return `${numberOfOccurrence}`
  }

  return ''
}

function getNewResultString(resultString, previousLetter, numberOfOccurrence) {
  const numberString = getNumberOfOccurrenceString(numberOfOccurrence)
  return `${resultString}${previousLetter}${numberString}`

}

export default function rle(inputString) {
  const azRegexp = /^[A-Z]+$/
  if (!azRegexp.test(inputString)) {
    throw new Error('Input string is not valid')
  }

  let resultString = ''
  let previousLetter = inputString[0]
  let numberOfOccurrence = 0;

  const inputStringArray = [...inputString]
  inputStringArray.map((letter, index, array) => {
    const sameLetter = previousLetter === letter
    if (sameLetter) {
      numberOfOccurrence++
    }

    const letterChanged = previousLetter !== letter
    if (letterChanged) {
      resultString = getNewResultString(
        resultString, previousLetter, numberOfOccurrence)
      numberOfOccurrence = 1
      previousLetter = letter
    }

    const lastLetter = index === array.length - 1
    if (lastLetter) {
      resultString = getNewResultString(
        resultString, previousLetter, numberOfOccurrence)
    }
  })

  return resultString
}

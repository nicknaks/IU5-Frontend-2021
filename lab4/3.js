/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
  if (str === "") {
    return ""
  }

  let char = str[0], count = 1
  let res = ""
  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++
    } else {
      res += char
      if (count !== 1) {
        res += count
      }

      count = 1
      char = str[i]
    }
  }

  res += char
  if (count !== 1) {
    res += count
  }

  return res
}

module.exports = rle;

/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== str[str.length - 1 - index]) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome;

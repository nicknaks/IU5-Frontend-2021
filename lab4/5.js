/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
  let map = {
    "(" : ")",
    "[" : "]",
    "<" : ">",
  }

  let stack = []

  for (let bracket of str) {
    if (Object.keys(map).includes(bracket)) {
      stack.push(map[bracket])
      continue
    }

    let tmp = stack.pop()
    if (tmp !== bracket) {
      return false
    }
  }

  return stack.length === 0;
}

module.exports = checkBrackets;

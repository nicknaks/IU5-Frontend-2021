/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
  let map = new Map(); // string : string

  for (let word of arr) {
    let sortedWord = word.toLowerCase().split("").sort().join("")

    if (map.has(sortedWord) === true) {
      let tmp = map.get(sortedWord)
      map.set(sortedWord, tmp + " " + word)
    } else {
      map.set(sortedWord, word)
    }
  }

  let res2 = []
  let res = Array.from(map.values());
  for (let i = 0; i < res.length; i++) {
    res2.push(res[i].split(" "))
  }

  return res2
}

module.exports = getAnagramms;


console.log(getAnagramms(['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']))
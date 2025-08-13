/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let palindrom = true;

  if(typeof word !== "string"){
    return false;
  }

  if(word === ""){
    return true;
  }
  
  const array = word.trim().toLowerCase().split("");
  for(let left = 0, right = array.length - 1; left < right; left++, right--){
    if(array[left] !== array[right]){
      return false;
    }
  }
  return palindrom;
}
console.log(isPalindrom(" Топот"));


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const emptyArray = [];
  if(typeof sentence !== "string" || sentence === ""){
    return emptyArray;
  }
  const word = sentence.trim().split(/\s+/);
  let longest = "";
  
  for(let i = 0; i < word.length; i ++){
    if(word[i].length > longest.length){
      longest = word[i];
    }
  }
  for(let i = 0; i < word.length; i++){
    if(word[i].length === longest.length){
      emptyArray.push(word[i])
    }
  }
  return emptyArray;
}

console.log(findLongestWords(" gh ghttg"));

export { isPalindrom, findLongestWords };
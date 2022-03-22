'use strict';
var userString = prompt('Введите вашу строку');
function isPalindrome(string) {
  var newString = '';
  for (var i=0;i<string.length;i++) {
    var letter = string[i].toLowerCase();
    if (letter == 'ё') {
      newString += 'е';
    }
    if (letter == 'ъ'||letter == 'ь') {
      continue;
    }
    if (letter >= 'а' && letter <= 'я'||letter >= 'a' && letter <= 'z') {
      newString += letter;
    }
  }
  if (newString == ''){
    return true;
  }
  for (var j=0; j<Math.floor(newString.length/2);j++) {
    var firstLetter = newString[j];
    var lastLetter = newString[newString.length-1-j];  
    if    (!(firstLetter == lastLetter)) {
      return false;
      break;
    }
  }
  return true;
}
console.log (isPalindrome(userString)? 'Это палиндром':'Это не палиндром');



/*var userString = prompt('Введите вашу строку');
function isPalindrome(string) {
  var alphabet = {а:0,б:0,в:0,г:0,д:0, е:0, ё:0,ж:0,з:0, и:0,й:0,к:0,л:0,м:0,н:0,о:0,п:0,р:0,с:0,т:0,у:0,ф:0,х:0,ц:0,ч:0,ш:0,щ:0,ъ:0,ы:0,ь:0,э:0, ю:0, я:0};
  var newString = '';
  for (var i=0;i<string.length;i++) {
    if (string.charAt(i).toLowerCase()=='ё') {
      string=string.slice(0,i)+'е'+string.slice(i+1);
    }
    if (string.charAt(i).toLowerCase()=='ъ') {
      string=string.slice(0,i)+'ь'+string.slice(i+1);
    }
    if (string.charAt(i).toLowerCase() in alphabet) {
      newString+=string.charAt(i).toLowerCase();
    }
  }
  var rewersedString= '';
  for (var j=newString.length-1;j>=0;j--) {
    rewersedString += newString.charAt(j);
  }
  var isStringPalindrome = (newString == rewersedString) ? 'Это палиндром':'Это не палиндром';
  return isStringPalindrome;
}
console.log (isPalindrome(userString));*/
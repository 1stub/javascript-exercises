const palindromes = function (str) {
    str = str.toLowerCase();
    let newStr = str.replace(/[^\p{L}\p{N}\s]/gu, '');
    newStr = newStr.replace(/\s/g, "");
   let newArr = Array.from(newStr);
   if(newArr.toString() === newArr.reverse().toString()) return true;
   return false;
};

// Do not edit below this line
module.exports = palindromes;

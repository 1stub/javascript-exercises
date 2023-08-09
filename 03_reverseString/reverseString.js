const reverseString = function(string) {
    const reverseStr = [];
    for(let i = string.length; i >= 0; i--) {
        reverseStr.push(string[i]);
    }
    return reverseStr.join("");
};

// Do not edit below this line
module.exports = reverseString;

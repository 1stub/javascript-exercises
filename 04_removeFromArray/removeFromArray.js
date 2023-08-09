const removeFromArray = function(arr, ...args) {
    for(let i = arr.length - 1; i >= 0; i--){
        for(let x = args.length - 1; x >= 0; x--){
            if(arr[i] === args[x]){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

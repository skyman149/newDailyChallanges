/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    if(strs === null || strs.length === 0) return "";
    
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++){ 
        const char = strs[0][i]; // loop through all characters of the very first string.

        for (let j = 0; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flrt", "flpiwj"])); // 'fl'
console.log(longestCommonPrefix(["ytower", "ujrt", "mnpi"])); // ''
console.log(longestCommonPrefix(["anton", "an", "a"])); // 'a'
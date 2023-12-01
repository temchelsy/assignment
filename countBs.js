let count = 0
function countBs (str) {
    for (let i = 0 ; i <= str.length -1 ; i ++){
        if (str[i] === 'B'){
            count += 1 
        }
    }
    return count
}
console.log(countBs('BaBBy'))
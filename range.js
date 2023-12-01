const array =[]
function range (start,end){
    for (let i = start ; i <= end; i++){
        array.push(i)
    }
    return array
}
console.log(range(1,10))

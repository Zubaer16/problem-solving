
function findMinMax(arr){
    let sorTedArr = arr.sort((a,b)=>a-b)
    return [sorTedArr[0],sorTedArr[sorTedArr.length - 1]]
}



console.log(findMinMax([1, 423, 6, 46, 34, 23, 13, 53, 4]))

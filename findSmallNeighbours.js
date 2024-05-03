function findSmallNeighbours (arr){
	let result = []

    for (let i = 0 ; i < arr.length; i++){
    
        if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            result.push(arr[i])
        }
        
    }
    return result
}

console.log(findSmallNeighbours ([10, 20, 15, 2, 23, 90, 67]))

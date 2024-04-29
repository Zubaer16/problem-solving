function bubbleSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
       // let minIndex = i
        for(let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
    
    
}
console.log(bubbleSort([23,21,1,3,4]))

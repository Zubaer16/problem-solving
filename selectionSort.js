 swap(minIndex,i,arr){
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
}
function selectionSort(arr){
    for (let i=0; i< arr.length-1;i++){
        var minIndex =i
        for (let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j
               
            }
        }
        swap(minIndex,i,arr)
    }
    return arr
}

console.log(selectionSort([5,4,3,2,1]));

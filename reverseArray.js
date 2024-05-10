function reverseArray(arr,start,end){
    
    while(start < end){
    let  temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr //
}

console.log(reverseArray([5,4,3,2,1],0,4))

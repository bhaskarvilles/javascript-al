function quickSort(arr, s, e){
    if(s>=e){
        return;
    }
    let p = partition(arr,s,e);
    quickSort(arr,s,p-1);
    quickSort(arr,p+1,e);
}

function partition(arr, s, e){
    let pivot =arr[s];
    let c = ;
    for(let i=s+1; i<=e; i++){
        if(arr[i]<=pivot){
            c++;
        }
    }
    let pivotIndex = s + c;
    let t = arr[pivotIndex];
    arr[pivotIndex] = arr[s];
    arr[s] = t;

    
}
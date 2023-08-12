//ANS_NO_(03)  javascript Spread Operator
//----------------------------------------

function mergeArrays(arr1,arr2){

    let arr3=[...arr1,...arr2];
    return(arr3);
 
 }
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];
 console.log(mergeArrays(arr1, arr2));
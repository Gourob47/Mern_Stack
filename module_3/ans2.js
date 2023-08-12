//ANS_NO_(02)  javascript function returns
//----------------------------------------

function findMaxNumber(numbers1){

    let len= numbers1.length;
    if(len==0)
    {
        return null;
    }
    else
    {
        let mx=0;
        for(let num of numbers1){
            if(parseInt(num)>=mx){
                mx=parseInt(num);
            }
        }
        return mx;
    }

}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); 

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); 

const emptyArray = [];
console.log(findMaxNumber(emptyArray));
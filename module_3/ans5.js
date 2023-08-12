//ANS_NO_(05)  javascript es6 map
//-------------------------------

function doubleNumbers(numbers){
    let myMap= new Map();

    for(let x of numbers)
    {
       let intNum=parseInt(x);
       myMap.set(intNum,(intNum*2));
    }

    let arr=[];
    for(let value of myMap.values())
    {
       arr.push(value);
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));
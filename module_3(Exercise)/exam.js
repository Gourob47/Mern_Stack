//ANS_1
// function maxNumber(...numbers){
//     let mx=0;
//     for(let x of numbers)
//     {
//        if(parseInt(x)>=mx)
//        {
//          mx=parseInt(x);
//        }
//     }

//     return mx;
// }
// console.log(maxNumber(5, 10, 3, 7));

//ANS_2
// function concatStrings(...strings){
//    let str="";
//    for(let x of strings)
//    {
//      str+=x;
//    }
//    return str;
// }
// console.log(concatStrings("Hello", " ", "World"));
// console.log(concatStrings("I", " ", "love", " ", "JavaScript")); 


//ANS_3
// function sumArray(numbers)
// {
//     let ans=0;
//     for(let x of numbers){
//        ans+=parseInt(x);
//     }
//     return ans;
// }
// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([5, 10, 2, 3])); 


//ANS_4
// function createPerson(x,y,z){

//     let person={
//         name: x,
//         age: y,
//         occupation: z
//     }
//     return person;
// }
// const person1 = createPerson("John", 30, "Engineer");
// console.log(person1);


//ANS_5
// function getEvenNumbers(numbers){
//     let arr=[];
//     for (let x of numbers){
//         if(parseInt(x)%2==0)
//         {
//            arr.push(x);
//         }
//     }
//     return arr;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = getEvenNumbers(numbers);
// console.log(evenNumbers);



//ANS_6
// function getFirstAndLast(numbers){

//     let [first,,,,last]=numbers
//     return  {first,last}
// }
// const numbers = [1, 2, 3, 4, 5];
// const { first, last } = getFirstAndLast(numbers);
// console.log(first); 
// console.log(last); 



//ANS_7
// class Rectangle{

//     constructor(a,b){
//         this.width=a;
//         this.height=b;
//     }
//     getArea(){
//         return parseInt(this.height)*parseInt(this.width);
//     }

// }
// const rectangle1 = new Rectangle(4, 5);
// console.log(rectangle1.getArea()); 







//Prevent basic mistake 
"use strict"
const name="Gourob"
//console.log(name);



//Spread
let num1=[1,2,3,4];
let num2=[...num1,5,6,7,8];
//console.log(num2)

//push
let ans1=[1,2,3,4];
let ans2=[5,6,7,8];
ans1.push(ans2);
//console.log(ans1);


//Rest Parammeter
function calc(a,b,...rest){
    //there is a difference between in/of in loop
    //In loop-> target Index
    //Of loop-> target element
    for(let x of rest)
    {
        console.log(x);
    }
}
//calc(1,2,3,4,5,6,7);

//Dynamic Function
//anonymous function
let dynamic= function(name){
    return name;
}
//console.log(dynamic("Gourob"))

//Variable and scoping
//let,var,const

//variable Hoisting:
names="Gourob"
//console.log(names);
var names="";//assign first then declare

//objects
let person={
    height:50,
    width:50,
    details:{
        name:"Gourob Debnath"
    }
}

//console.log(person['details']['name'])
//accessing objects
for(let item in person)
{
  //  console.log(person[item])
}

//arrow function(anonymous Function)
let func=()=>{
    return "ok"
}
//console.log(func())

//multidimensional array
let Bangladesh=['sylhet', 'Dhaka','Khulna']
let India=['Kolkata','Mumbai','Delhi']
let multiArray=[Bangladesh,India];

//console.log(multiArray[0][1])

//Array Desturcturing
let [a,,]=Bangladesh;
//console.log(a)

let mymap= new Map();
mymap.set('key1','Gourob')
mymap.get('key1');
mymap.has('key1');
mymap.clear();
mymap.delete('key1');

let myset= new Set();

myset.add('Dhaka');
myset.add('Sylhet');

//console.log(myset.values())


//class & constructor

class myClass{
    constructor(a,b){
        this.firstNum=a;
        this.secNum=b;
    }

     add() {

        let ans=this.firstNum+this.secNum;
        return ans;
    }
}

let obj= new myClass(10,20);
//console.log(obj.add())


//Inheritence and super keyward
//super keyward use to access direct parent class

class parent{

     fun1(){
        console.log('Good')
     }
     fun2(){
        console.log('bad')
     }

     static fun3(){
        console.log('Everything okay')
     }
}
class child extends parent{
    fun1(){
        console.log('not okay')
    }
    demo(){
        super.fun1()
        super.fun2()
    }
}

let myObj= new child();
myObj.fun1()
myObj.fun2()
myObj.demo()
parent.fun3()

//class1
// const laptop="Hello Gourob"
// fun4(){
//     console.log('not okay')
// }
// export{laptop, fun4, anyclass}
//export default laptop;



//class2
// import {laptop} from "./index.js"
//import ans from "./index.js"
// console.log(laptop)

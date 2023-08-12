//ANS_NO_(06)  javascript es6 static keyword
//------------------------------------------

class MathUtility{
    static multiply(a,b){
        let product= parseInt(a)*parseInt(b);
        return product;
    }
}
console.log(MathUtility.multiply(5, 3)); 
console.log(MathUtility.multiply(2, 8));
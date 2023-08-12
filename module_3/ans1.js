//ANS_NO_(01) javascript For in loop
//----------------------------------

function printObjectProperties(obj) {
    let objLength = Object.keys(obj).length;
  
    if (objLength == 0) {
      console.log("Object is empty");
    } else {
      for (let keys in obj) {
        console.log(`${keys}: ${obj[keys]}`);
      }
    }
  }
  let obj = {name:"Gourob", age:24, background:"CSE"};
  printObjectProperties(obj);
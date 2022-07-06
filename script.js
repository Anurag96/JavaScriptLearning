/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const sum = (a,b) =>{
return a+b;  
}

const sub = (a,b) =>{
return a-b;  
}
const div = (a,b) =>{
  if(b==0){
    console.log('Number cant be zero')
  }
  else{
    return a/b;  
  }

}
const mul = (a,b) =>{
return a*b;  
}


console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

const summarize=(a,b)=>{
  console.log("Sum:"+sum(a,b))
  console.log("Div :"+div(a,b))
  console.log("Mul :"+mul(a,b))
  console.log("Sub :"+sub(a,b))
}

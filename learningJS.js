//VARIABLE DECLARATION & PRINT
// sentence ="How are you doing ?" 
// console.log(sentence)

//PROMT
// banana=prompt('whats your fav fruit')

// EXAMPLE:
// food=Number(prompt('whats your food'))
// tipPercentage=Number(prompt('whats tip%'))/100
// tipAmount=food*tipPercentage
// total=food+tipAmount
// console.log(tipAmount)
// alert(tipAmount)
// // console.log("your food is "+total+" Tip Amount"+tipAmount)
// console.log(`your food is ${total} and Tip Amount is ${tipAmount}`)

//DATATYPE
// Only use let & const

//IF & ELSE CONDITION
// let weather= prompt('hows the weather')
// if(weather == 'rainy')
// {
//   console.log("Grab an umbrella")
// }
// else{
//   console.log("Let's wear an SunGlasses")
// }


//FUNCTION
// function sayMyName(){
//   console.log('Anurag')
//   console.log('Kumar')
//   console.log('Singh')
// }
// sayMyName()

//TEMPLATE LITERALS
// function greeting(name){
//   console.log(`hi ${name}, Nice to meet to you`)
// }
// greeting('Anurag Singh')


// function sum(a,b){
//   return a+b;
// }
// function tipCalculator(food,tipPercentage){
//   const tipPercentageAmount = tipPercentage / 100;
//   const tip = tipPercentageAmount * food;
//   const total= sum(food,tip);
//   return total
// }

//ARROW FUNCTION
// const tipCalculator = (food,tipPercentage)=>{
//    const tipPercentageAmount = tipPercentage / 100;
//   const tip = tipPercentageAmount * food;
//   const total= sum(food,tip);
//   return total
// }

//  console.log(tipCalculator(100,20))

//ARRAY

// const groceries=['banana', 'apple', 'orange','pears','blueberry']
// console.log('--ALL--')
// console.log(groceries)
// console.log('--PICK PARTICULAR ITEM--')
// console.log(groceries[0])
// console.log('--PUSH--')
// groceries.push('Strwbaerry')
// console.log(groceries)
// console.log('--SLICE--')
// console.log(groceries.slice(0,2))
// console.log('--LENGTH--')
// console.log(groceries.slice(3,groceries.length))
// console.log(groceries.length)
// console.log('--indexOf--')
// console.log(groceries.indexOf('blueberry'))

//OBJECT{} : Objects are a type of varaible, quite similar to arrays, but they have key-pair value.

// const person={
//   name:'leonardo',
//   shirt:'white',
//   pant:'black'
// }

// console.log(person)
// console.log(person.name) //DOT Notation
// console.log(person['name']) //BRACKET Notation
// console.log(person.name+" is the name of personm and color of his shirt is "+person.shirt+" pant is "+person['pant'])
// person.phone='660-528-0543'
// person['Address']='USA'
// console.log(person)

// const person2 ={
//   name:'Anurag',
//   shirt:'Black',
//   pant:'blue'
// }
// console.log(person2)
// console.log(person2.name)


// const introducer = (Pshirt,Pname,Passets,Pdebt)=>{
//   const person = {
//     name:Pname,
//     shirt:Pshirt,
//     assets:Passets,
//     debt:Pdebt,
//     netWorth: function(){
//       return this.assets-this.debt;
//     }
//   }
//   const intro =  `Hi, my name is ${person.name} & shirt is ${person.shirt} and my net worth is $${person.netWorth()}`
//   return intro
// }
// console.log(introducer('black','Anurag',10000,400))

//FOR LOOPS

const fruits =['banana', 'apple', 'orange','pears','blueberry']

// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i])
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }

const numbers =[1,2,3,4,5,6]

// for(const number of numbers){
//   console.log(doubleNumber)
// }
// for(const number of numbers){
//   let doubleNumber = number*2;
//   console.log(doubleNumber)
// }

// let result=[]
// for(const number of numbers){
//   let doubleNumber = number*2;
//   result.push(doubleNumber)
//   console.log(result)
// }

// const double =  ()=>{
//   let result=[]
//   for(const number of numbers){
//     let doubleNumber = number*2;
//     result.push(doubleNumber)
//   }
  
//   return result;

// }

// console.log(double());


// const square =  ()=>{
//   let result=[]
//   for(const number of numbers){
//     let squareNumber = number**2;
//     result.push(squareNumber)
//   }
  
//   return result;

// }

// console.log(square());

const myFriends= [ 'Shreya','Monish','Himanshu','Krishna','Nuggu']
const people=[]
for( const friend of myFriends){
  if(friend.length<=6)
   people.push(friend)
  
}
console.log(people)

// console.log("people are"+ people.push(friend))
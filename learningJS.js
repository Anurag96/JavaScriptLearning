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

// const fruits =['banana', 'apple', 'orange','pears','blueberry']

// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i])
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }

// const numbers =[1,2,3,4,5,6]

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

//FOR OF LOOP

// const myFriends= [ 'Shreya','Monish','Himanshu','Krishna','Nuggu']
// const people=[]
// for( const friend of myFriends){
//   if(friend.length<=6)
//    people.push(friend)
  
// }
// console.log(people)

// console.log("people are"+ people.push(friend))

//FOR OF LOOP : Gives the values of objects
// const phrase = ' hey, how are you doing? What are your plans for the days'
// const howManyLetters = (phrase)=>{
  
//   const values = []
//    for( const index of phrase){
//     values.push(index)
//      }
//   console.log(values)
// }

// howManyLetters(phrase);

// //FOR IN LOOP : Gives the Index of an object
// const howManyLetters2 = (phrase)=>{
//   // const phrase = ' hey, how are you doing? What are your plans for the days'
//   let result = 0;
//   for( const index in phrase){
//      result = Number(index)+1;
//   }
  
//   console.log( `There are total of ${result} alpabhet`)
//   return {result}
// }

// console.log(howManyLetters2(phrase));

/**
 * Q. Write a function to find number of words in phrase
 * Q. Write  a function to retrive the words in phrase and put it in an array.
 */

// const phrase = 'Sun Rises in the East!'
// const result=[]  
// const findNumberOfWords = (phrase) =>{
//   for( word in phrase){
//     value = Number(word)+1
//    }
//    console.log(`There are ${value} alpabhets in this phrase`)
//    return {value}
// }
// console.log(findNumberOfWords(phrase))

// const findNumberOfWords2 = (phrase) =>{
  
//    console.log(`There are ${phrase.length} alpabhets in this phrase`)
  
// }
// findNumberOfWords2(phrase)

// const getTheWords = (phrase)=>{
//   for( word of phrase){
//     result.push(word)
//   }
//   console.log(result)
// }
// getTheWords(phrase)

/**
 * @ Sum up all the numbers in an array
 */

// const values2 = [4,5,7,4,8,9,2,4,6,7,9]
// // const values2 = [4,3]
// const sumAllArray = (values2)=>{
//   let result = 0;
//   for(mango of values2){
//     console.log("Adding number : "+mango)
//      result = mango+result
//      console.log(result)
//   }
//   return {result}
// }
// console.log(sumAllArray(values2))

/**
 * LOOP OF and LOOP IN
 * FOR IN LOOP : Gives the Index of an object
 * FOR OF LOOP : Gives the values of objects
 */

// const numArray = [2,3,4]
// const addFunction = (numArray) =>{
//   let result = 0;
//   let nayaArray=[]
//   for(let num of numArray ){
//     result=num+result;
//     nayaArray.push(result)
//     }
//   console.log(nayaArray)
//   return {result}
// }
// console.log(addFunction(numArray))

// const numbers = [1,4,5]
// const findMax = (numbers)=>{
//   let result = numbers[0];
//   for(const number of numbers){
//     if(number>result){
//       result=number
//     }
//   }
 
//   return {result}

// }
// console.log(findMax(numbers))

// const numArray = [8,6,5,7,3,24,4,20]

// const findTheBiggest = (numArray)=>{

//   let result=numArray[0];
//   for(const number of numArray){
//     if(number>result){
//       result=number
//     }
//   }
//   return {result}
// }

// console.log(findTheBiggest(numArray))




// IF-ELSE : if(letter in myValue) checks true/false

// const phrase = 'what are you doing later tonight'

// const letterFrequency = (phrase)=>{
  
// let frequency={}
// // console.log(frequency) 
// for(letter of phrase){
   
//   if(letter in frequency){
//     // console.log(`${letter} and ${frequency[letter]}`) 

//     frequency[letter]+=1

//     // console.log(`${letter} and ${frequency[letter]}`) 
//    }else{
//     frequency[letter]=1;
//    }

// }
// return {frequency}
// }
// console.log(letterFrequency(phrase))

// const phrase = 'How are you doing, hows your life going on'

// const wordFrequency = (phrase)=>{

//   let frequency={}
//   for(const letter of phrase){

//     if(letter in frequency){
//       frequency[letter]+=1;
//     }else{
//       frequency[letter]='hello';
//     }

//   }
//   return frequency
// }

// console.log(wordFrequency(phrase))

/**
 * Q. How to count get each alpabet frequency
 */
// const phras = 'How are you doing, hows your life going on'

const addValue = (phras)=>
{
  let myValue = {}
for(letter of phras){
  if(letter in myValue){

    myValue[letter] +=1
  }else{

    myValue[letter] =1
  }
}
return console.log(myValue);
}
// console.log(addValue(phras))

/**
 * Q. How to count get each alpabet frequency
 */
let arrayNumbers ='how how are you doing and how is your life doing are you ?'
// let numbers=arrayNumbers.split(" ")
// console.log(numbers)
// let frequency ={}
// const mostFrequent = (numbers) =>{
//   for(const number of numbers){
//     if(number in frequency){
//       frequency[number]+=1;
//     }else{
//       frequency[number]=1;
//     }

//   }
//   return frequency
// }
// console.log(mostFrequent(numbers))


const mostFrequent = (arrayNumbers) =>{
  const words=arrayNumbers.split(" ")
  return addValue(words)
 
}
mostFrequent(arrayNumbers)
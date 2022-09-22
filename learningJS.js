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

// ****************************************************

//DATATYPE
// Only use let & const
/**
  * Var can be updated and re-declared
  * let can be updated but not re-declared
  * const can neither be updated or re-declared
  * var is initialized with undefined, whereas let & const aren't initialized
  * const must be initialized during declaration unlike let and var
  **/
/*
console.log('JavScript : Var : They are globally scoped')

var a = 'Anurag';
var b = 'Harry';
{
  var a= 2;
  var b=3;
console.log(`${a} and ${b}`)
}

console.log(`${a} and ${b}`)

console.log('-------------')
console.log('JavScript : let : They are block scoped')
let c = 'Anurag';
let d = 'Harry';
{
  let c= 2;
  let d=3;
console.log(`${c} and ${d}`)
}

console.log(`${c} and ${d}`)

console.log('-------------')
console.log('JavScript : const : They are block scoped')
const e ='Anurag'
{
  const e=3
 console.log(e) 
}
console.log(e)
*/

//NOTE : 7 types of PRIMITIVE DATATYPE (NN BB SS U)
// Null, Number, String, Boolean, Undefined, BIGINT, Symbol

// Object is an NON-PRIMITIVE DATATYPE 

//CONDITIONAL STATEMENTS

//IF & ELSE CONDITION & SWITCH
// let weather= prompt('hows the weather')
// if(weather == 'rainy')
// {
//   console.log("Grab an umbrella")
// }
// else{
//   console.log("Let's wear an SunGlasses")
// }

/*
let value = prompt(`What's your age?`)
let reply = Number(value)
// console.log(typeof reply)
if(reply<0){
  console.log(`Invalid Number`)
}else if(reply >0 && reply <9 ){
  console.log(`You're still younger to drive`)
}else if(reply>9 && reply<18){
  console.log(`You should consider learning driving`)
}else{
  console.log(`You are of age to drive the vehicle`)
}

switch(true){
  case (reply < 0) :
    console.log(`You are not born yet `)
    break;
  case reply>0 && reply<9 :
    console.log(`You are studing school `)
    break;
  case reply>9 && reply<18 :
    console.log(`You are studing High school `)
    break;
  default: console.log(`You are studing college or doing job `)
    break;
}
*/



// ****************************************************

//FUNCTION
// function sayMyName(){
//   console.log('Anurag')
//   console.log('Kumar')
//   console.log('Singh')
// }
// sayMyName()

// ****************************************************

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

// ****************************************************

//ARROW FUNCTION
// const tipCalculator = (food,tipPercentage)=>{
//    const tipPercentageAmount = tipPercentage / 100;
//   const tip = tipPercentageAmount * food;
//   const total= sum(food,tip);
//   return total
// }

//  console.log(tipCalculator(100,20))

// ****************************************************

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

// ****************************************************

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

// ****************************************************

//GENERAL FOR LOOPS 

// const fruits =['banana', 'apple', 'orange','pears','blueberry']

// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i])
// }

//FOR OF LOOPS
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

// ****************************************************

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

// ****************************************************

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

// ****************************************************

// IF-ELSE : if(letter in myValue) checks true/false

// const phrase = 'what are you doing later tonight'

// const letterFrequency = (phrase)=>{
  
// let frequency={}
// // console.log(frequency) 
// for(letter of phrase){
   
//   if(letter in frequency){
//     // console.log(`${letter} and ${frequency[letter]}`) 

//     frequency[letter]=frequency[letter]+1 //in 1st loop,frequency[letter]=0;in 2nd loop,frequency[letter]=1;

//     // console.log(`${letter} and ${frequency[letter]}`) 
//    }else{
//     frequency[letter]=1; //h:1
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

// const addValue = (phras)=>
// {
//   let myValue = {}
// for(letter of phras){
//   if(letter in myValue){

//     myValue[letter] +=1
//   }else{

//     myValue[letter] =1
//   }
// }
// return console.log(myValue);
// }
// console.log(addValue(phras))


/**
 * Q. WRITE A PROGRAM TO FIND FREQUENCY OF EACH ALPHABET & EACH WORD IN A SENTENCE?  
 */
// const phrase = 'how are you doing ? and what are you doing ? and why are you doing ?'
// console.log(`Phrase : ${phrase}`)
// const phraseArray = phrase.split(' ')
// // console.log(phraseArray)
// // let frequencyOfAlphabet = {}

// const getFreqOfAlpabets=(phrase)=>{
//   let frequencyOfAlphabet = {}
//   for(let letter of phrase){
//     if(letter in frequencyOfAlphabet){
//       frequencyOfAlphabet[letter]+=1;
//     }else{
//       frequencyOfAlphabet[letter]=1;
//     }
//   }
//   return {frequencyOfAlphabet}
// }

// const getFreqOfWords =(phraseArray)=>{
//   let frequencyOfWord ={}
//   for(word of phraseArray){
//   if(word in frequencyOfWord){
//      frequencyOfWord[word]+=1;
//   }else{
//     frequencyOfWord[word]=1;
//   }
//  }
//  return {frequencyOfWord}
// }

// console.log(getFreqOfAlpabets(phrase))
// console.log(getFreqOfWords(phraseArray))


/**
 * Q. Find the length of every word in a phrase
 */

// const phrase = 'What is the name of the hiring manager in your company'
// const phraseArray = phrase.split(' ')
// const lengthOfWord = (phraseArray)=>{
//   let result = {}
//   for(const word of phraseArray){
//    result['word']=word.length
//     return {result}
// }
// }
// console.log((lengthOfWord(phraseArray))

// ****************************************************


/**
 * ARRAY METHODS
 * => HIGHER ORDER FUNCTION : Functions that takes other function inside
 * => MAP()
 * => FILTER()
 * => REDUCE() 
 * Above there are callback functions
 */


// ****************************************************


//MAP() : Map loops and always return new array.

// const arrayObject = [1,3,5,6].map(number=>number*2)
// console.log(arrayObject)

/**
 * Q. Write a function to print double of a given array without for loop?
 */
// const arrayObject = [1,3,5,6]
// console.log(arrayObject)
// const doubleArray = (arrayObject)=>{
//    return arrayObject.map((number)=>number*2)

// }
// console.log(doubleArray(arrayObject))


// ****************************************************


//FILTER() : Filter is a callback function, which returns new array with matching condition

// const greaterThen3 = (arrayObject)=>{
//     return arrayObject.filter((number)=>number<3)
// }
// console.log(greaterThen3(arrayObject))

// const divisibleByTwo = (arrayObject)=>{
//     return arrayObject.filter((number)=>{
//     let result = (number%2)==0 ? number : 0 //'ternary' or 'conditional' operator & OR operator
//     console.log(result)
//         return result 
//     })
// }
// console.log(divisibleByTwo(arrayObject))

// ****************************************************

// .REDUCED() : Reduced is a callback function, which is used to sum of the net worths
// SUM : Think Reduce
// Reduce the loop and gives you back the accumulator
/**
 * array.reduce(function(total, currentValue), initialValue)
 * The reduce() method executes a reducer function for array element.
 * The reduce() method returns a single value: the function's accumulated result.
 * The reduce() method does not execute the function for empty array elements.
 * The reduce() method does not change the original array.
 */

 
/**
 * Q. Find the sum of every element in array without for loop
 *  */

// const numberArray = [3,5,7,8,9,2,45,7,7]

// const summNumberArray = (numberArray)=>{
//     let prev = 0;
//     let total = 0 ;
//     numberArray.reduce((prev,curr)=>{
//         console.log(`Current Total : ${prev} || Current Value to be added:${curr}`)
//         total = prev+curr;
//         return total
//     },total)
//     console.log(`Sum of all array is ${total}`)
    
// }

// summNumberArray(numberArray)


/**
 * Q. Find the multiples of every element in array without for loop
 *  */

// const arrayMul = [1,2,3,5]
// const arryMulFunc = (arrayMul) =>{
//         let total = 0
//         let prev = 0
//         arrayMul.reduce((total,curr)=>{
//             prev = curr+total;
//             return prev;
//         }, prev)
//         console.log(`sum of all the element in array is ${prev}`)
//     }
//     arryMulFunc(arrayMul)

/**
 * Q. Wrtite a program : 
 * 1. To fetch From an actors JSON object
 * 2. Names of actors using For of loop in an array
 * 3. Find actors, whos nethworth more then 10000, using filter () & push to new array using Map()
 * 4. Sum of networth => reduce() 
 */
// const actors = [
//     {name:'jonny deep',networth:'300'},
//     {name:'Amber',networth:'100'},
//    {name: 'Brad', networth: '200'}
// ]

//    const totalAsset = (actors)=>{


//         /**
//          * Filters Help you give a new array with conditions, Map simples gives new array
//          */

//         let result = actors.filter((actor => actor.networth>100))
//         let netWorths = result.map((actor)=>actor.networth)
//         console.log(`List of all netWorths : ${netWorths}`)

//         /**
//          * For of loops through item, For in loops through item index in array
//          */
        
//         let namearray = []
//         for(actor of actors){
//             namearray.push(actor.name)
//            }
//            console.log(`List of Name of actors : ${namearray}`)
       
//         /**
//          *  Reduce gives back an sum of all numbers in array, with help of (prev,curr,total)
//          */

//         let total = 0 ;
//         let prev = 0 ;
//         let resultTotal = 0;
//         resultTotal = actors.reduce((prev,curr)=>{
//             total = prev +Number(curr.networth);
//             return total
//         },prev)
//         console.log(`The sum of all netWorths : ${resultTotal}`)

// }

// totalAsset(actors)


// ****************************************************

//DOM MANIPULATION

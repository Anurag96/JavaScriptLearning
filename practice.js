/**
 * Q. Wrtite a program : 
 * 1. To fetch From an actors JSON object
 * 2. Names of actors using For of loop in an array
 * 3. Find actors, whos nethworth more then 10000, using filter () & push to new array using Map()
 * 4. Sum of networth => reduce() 
 */

// const actors  = [
//     {name:'jonny deep',networth:10000},
//     {name:'kanye west',networth:30000},
//     {name:'brad pitt',networth:50000}
// ]

// const actorName  = (actors)=>{
// let  actorArray = []
//     for(actor of actors){
//       actorArray.push(actor.name,actor.networth)
//     }
//     console.log(actorArray)
// }
// actorName(actors)

// const  filterNetworth =(actors)=>{
//     let result = actors.filter((actor)=>{return actor.networth>10000})
//     let filterNetworth = result.map((actor)=>{return  actor.name})
//     console.log(`The networth Higher then $10000 : ${filterNetworth}`)
// }
// filterNetworth(actors)

// let  prev=0,total=0
// const sumOfNetworths = (actors) =>{
//        let value = actors.reduce((total,curr)=>{
//         total = prev+Number(curr.networth);
//         return total},prev)
//     console.log(`The total neetworth is : ${value}`)
// }
// sumOfNetworths(actors)

/**
 * Using the .reduce() method,create a function that multiplies the numbers  of given array with one another
 */

// const numberArray =[5,10,11]

// const mul = (a,b)=>{
//     return a*b
// }
// const multiplesArray = (numberArray) =>{
//     let numprev=1;
//     numresult = numberArray.reduce((numtotal,numcurr)=>{
//        let numresult = mul(numtotal,numcurr);
//         return numresult
//     },numprev)
//     console.log(`The multiples of all number in an array : ${numresult}`)
// }
// multiplesArray(numberArray)

/**
 * Divisible by  two using filter
 */
//  const numbersArray =[5,10,11,20,32]

//  const divisibiltyCheckByTwo = (numbersArray) =>{
//    output = numbersArray.filter((num)=>{return num%2==0?num:0})
//     console.log(output)
//     return output
//  }  
// divisibiltyCheckByTwo(numbersArray)

/**
 * Q. Wrtite a program : 
 * 1. To fetch From all actors name JSON object
 * 2. Names of actors using For of loop in an array
 * 3. Find actors, whos nethworth more then 10000, using filter () & push to new array using Map()
 * 4. Sum of networth => reduce() 
 */

const actors =[
    {name:'John',networth:"2000"},
    {name:'Anurag',networth:"9000"}
]

// const actorName = (actors) =>{
//     for(actor of actors ){
//     console.log(actor.name)
//     }
// }
// actorName(actors)

const sumOfNetworths = (actors)=>{
    let total = 0 ;let prev = 0 ; let value=0 ;   
    value =  actors.reduce((total,curr)=>{
        total = prev + Number(curr.networth);
        return total
    },prev)
    
    console.log(`The total neetworth is : ${value}`)
}
sumOfNetworths(actors)



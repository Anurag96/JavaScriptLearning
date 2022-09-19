console.log('Heello')
let title  = document.getElementById('title')
console.log(title.innerText)




const add =()=>{
    let  message = 'Welcome to DOM Manipulaton'
    // title.innerText = message
    // console.log(title.innerText)
      
    title.innerHTML=`<h1>${message}</h1>`
    console.log(title.innerHTML)  

    title.style.backgroundColor='red'
}
changeToRed = ()=>{
    title1.style.backgroundColor='red' 
    console.log('Color', 'red')
    let message = 'Now the color is red'
    title1.innerHTML=`<h2>${message}</h2>`
}

changeToBlue = ()=>{
    title2.style.backgroundColor='blue'
    console.log('Color', 'blue')
    let message = 'Now the color is blue'
    title2.innerHTML=`<h2>${message}</h2>`
}

changePink = ()=>{
    title3.style.backgroundColor = 'pink'
    let message = 'Now the color is pink'
    title3.innerHTML=`<h2>${message}</h2>`

}
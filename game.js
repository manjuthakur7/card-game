let cards=[]
let sum=0


let hasblackjack=false
let isalive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.
Chips
// if sum-el is class then .
// console.log(sumEl)
// console.log(messageEl)
function randomcard(){
    let num=Math.floor(Math.random()*13)+1
    if(num===1){
        return 11
    }
    else if(num>10){
        return 10
    }
    else{
        return num
    }
    

}
function start(){
    isalive=true
    let firstcard=randomcard()
    let secondcard=randomcard()
    let cards=[firstcard, secondcard]
    let sum=firstcard+secondcard 

    render()
   
}
function render(){
    cardsEl.textContent="cards "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    
    sumEl.textContent=sum

if(sum<=20){
    message="Do you want to draw a new card?😃"
}
else if(sum===21){
    message="Wohoo! you won!😍"
    hasblackjack=true
}
// we use three === cuz two == ignores the data type of the var.
else {
    message="You are out of the game😒"
     isalive=false
}

console.log(hasblackjack)
messageEl.textContent=message
}
function newcard(){
    if(isalive==true&& hasblackjack==false){
    let card=randomcard()
    sum+=card
    cards.push(card)
    console.log(cards)
    render()
    }
    
}
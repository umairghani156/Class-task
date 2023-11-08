const userName = document.querySelector('#userName')
const score = document.getElementById('sco');
const hScore = document.getElementById('hSco');
const again = document.getElementById('again')
const btwUnderline = document.querySelector('.btwUnderline')
const para = document.getElementById('para')
const guess = document.querySelector('#guess')
const container = document.querySelector('.container')
function myHandler(){
   score.textContent = userName.value
   if(userName.value == ""){ 
    alert("Please enter a valid number")
   }else{  
   const randomNum =Math.floor(Math.random() * 20) + 1;

   if(userName.value == randomNum){
     para.textContent = userName.value
     again.textContent = "Won"
     guess.textContent = "Correct number!"
     container.style.backgroundColor = " #14c46c"
   }else{
    para.textContent = "?"
    again.textContent = "again!"
   }
   if(userName.value < 10){
    guess.innerText = " Too low!"
   }else{
    guess.innerText = "Too high!"
   }
   if(userName.value > 20){
    alert("Numbers should be less than 20")
   }
   if(userName.value){
    hScore.textContent = (userName.value + 3) 
   }
}
   userName.value = ""
}


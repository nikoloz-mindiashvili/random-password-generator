const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let btnEl = document.getElementById("generateBtn")

btnEl.addEventListener("click", ()=> {
  let passwordLength = prompt("what length do you want your password to be?")
  let password1 = ""
  let password2 = ""
  for (i = 0; i < passwordLength; i++){
    let randNum1 = Math.floor(Math.random() * characters.length)
    let randNum2 = Math.floor(Math.random() * characters.length)
    password1 += characters[randNum1]
    password2 += characters[randNum2]
    password1El.textContent = password1
    password2El.textContent = password2
  }
})
const userImput = document.getElementById("number-to-convert")
const convBtn = document.getElementById("submit")


let lengthResult = document.getElementById("length-p")
let volumeResult = document.getElementById("volume-p")
let massResult = document.getElementById("mass-p")


function convert(){
    let numImput = userImput.valueAsNumber
     if (isNaN(numImput)) {
        numImput = 20
     }
     // length converter
     let mTF = (numImput * 3.281).toFixed(3)
     let fTM = (numImput / 3.281).toFixed(3)
     
     lengthResult.textContent = 
     `${numImput} meters = ${mTF} feets | ${numImput} feets = ${fTM} meters` 

    // volume converter
    let lTG = (numImput * 0.264).toFixed(3)
    let gTL = (numImput / 0.264).toFixed(3)

    volumeResult.textContent =
    `${numImput} liters = ${lTG} gallons | ${numImput} gallons = ${gTL} liters`

     // mass converter
    let kgToP = (numImput * 2.204).toFixed(3)
    let pToKg = (numImput / 2.204).toFixed(3)

     massResult.textContent = 
     `${numImput} kilos = ${kgToP} pounds | ${numImput} pounds = ${pToKg} kilos`
     
    }

convBtn.addEventListener("click", convert)


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

console.log(document.querySelectorAll(".card"))

// dark mode
const mainCont = document.querySelector(".main-ctr");
const resultCard = document.querySelectorAll(".card")
const resultCardP = document.querySelectorAll(".card p")
console.log(resultCardP)
const toggleDarkBtn = document.getElementById("dark-mode-btn")

  function darkMode(){
    mainCont.classList.toggle("dark-mode")
    for (i=0 ; i < resultCard.length ; i++){
        resultCard[i].classList.toggle("dark-mode-card")
    }
    
    for (i=0 ; i < resultCardP.length ; i++){
        resultCardP[i].classList.toggle("dark-mode-p")
    }
  }


  toggleDarkBtn.addEventListener("click", darkMode)

//   "#1C1C1C";
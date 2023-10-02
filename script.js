const btnHitung = document.querySelector("#btn-hitung")
const resultContainer = document.querySelector("#result-section")
const divider = document.querySelector("hr")
const score = document.querySelector("#score")
const category = document.querySelector("#category")

function getData(){
    const beratBadan = document.querySelector("#weight").value
    const tinggiBadan = document.querySelector("#height").value
    return {
        beratBadan : beratBadan,
        tinggiBadan : tinggiBadan
    }
}

btnHitung.addEventListener('click', function(event){
    event.preventDefault()
    const berat = Number(getData().beratBadan) 
    const tinggi = Number(getData().tinggiBadan)

    if(berat && tinggi){
        const bmiScore = bmiCalc(berat, tinggi)
        console.log(bmiScore)
        console.log(bmiScore)
        showResult(bmiScore)
    }else{
        console.log("kosong")
    }
    
})

function bmiCalc(berat, tinggi){
    const result = berat/(tinggi/100)**2
    return result.toFixed(1)
}

function bmiCategory(bmiScore){
    switch (true){
        case (bmiScore<18.5):
            return "Underweight"
            break
        case (bmiScore >= 18.5 && bmiScore < 24.9):
            return "Normalweight"
            break
        case (bmiScore >= 24.9 && bmiScore <29.9):
            return "Overweight"
            break
        case (bmiScore >= 30):
            return "Obesity"
            break
    }
}

function showResult(bmiScore){
    const bmiCat = bmiCategory(bmiScore)
    score.innerText= bmiScore
    category.innerText = bmiCat

    divider.style.visibility = "visible"
    resultContainer.style.visibility = "visible"
}
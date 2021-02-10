const go=document.querySelector("#go")
const ans=document.getElementById("ans")
const pounds=document.getElementById("pounds")
const ounces=document.getElementById("ounces")
const grams=document.getElementById("grams")


go.addEventListener("click", function(){
let ansValue=ans.value
console.log(ansValue)

pounds.innerHTML=ansValue*2.2;
ounces.innerHTML=ansValue*35.2
grams.innerHTML=ansValue*1000

})


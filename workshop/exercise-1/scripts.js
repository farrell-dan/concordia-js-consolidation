// 
const backgroundYear = document.getElementById("year");
const eighteen = document.getElementById("2018button");
const nineteen = document.getElementById("2019button");


window.addEventListener("load", ()=>{
    eighteen.classList.add("active");
    backgroundYear.innerText = eighteen.innerText
})

nineteen.addEventListener("click", ()=>{
    nineteen.classList.add("active");
    eighteen.classList.remove("active");
    backgroundYear.innerText = nineteen.innerText
})

eighteen.addEventListener("click", ()=>{
   eighteen.classList.add("active");
    nineteen.classList.remove("active");
    backgroundYear.innerText = eighteen.innerText
})

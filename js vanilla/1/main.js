const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","purple","yellow","dark","orange","rgba(123,142,153)"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber =getRandomNumber() ;
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click",function(){
    const sayiUret = getUret();

    document.body.style.backgroundColor=colors[sayiUret];
    color.textContent = colors[sayiUret];
})

function getUret(){
    return Math.floor(Math.random() * colors.length);
}



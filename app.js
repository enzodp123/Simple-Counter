const count = document.querySelector(".number");

const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnIncrease = document.querySelector(".increase");

btnDecrease.onclick = ()=>{
    const num = parseInt(count.innerHTML);
    count.innerHTML = num -1;
}

btnIncrease.onclick = ()=>{
    const num = parseInt(count.innerHTML);
    count.innerHTML = num +1;
}

btnReset.onclick = ()=>{
    count.innerHTML = 0;
}


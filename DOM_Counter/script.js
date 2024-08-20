//refresh page rendering - domcontentloaded
document.addEventListener('DOMContentLoaded', ()=>{
    const counterElement = document.getElementById('counter');
    var increaseBtn= document.getElementById('increment');
    var decreaseBtn= document.getElementById('decrement');

    let count = 0;

    increaseBtn.addEventListener('click', ()=>{
        count++;
        counterElement.textContent = count;
    })
    decreaseBtn.addEventListener('click', ()=>{
        count--;
        counterElement.textContent = count;
    })
})

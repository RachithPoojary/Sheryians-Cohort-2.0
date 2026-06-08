let h1 = document.querySelector('#h1');
let asc = document.querySelector('#asc');
let dsc = document.querySelector('#desc');


let count = 0;

asc.addEventListener(`click`, ()=>{
    count++;
    h1.innerHTML = count;
    
})
desc.addEventListener(`click`, ()=>{
    count--;
    h1.innerHTML = count;
    
})
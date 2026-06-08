let img = document.querySelector('img')
let i= document.querySelector('i')


img.addEventListener('dblclick',()=>{
    i.style.opacity = 1;
    i.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    setTimeout(() => {
         i.style.transform = 'translate(-50%,-800%) scale(1) rotate(60deg)';
    }, 400);
    
    setTimeout(() => {
        i.style.opacity = 0;
    }, 600);

    setTimeout(() => {
         i.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    }, 800);

})
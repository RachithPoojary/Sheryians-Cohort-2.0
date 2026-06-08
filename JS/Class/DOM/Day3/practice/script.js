let main = document.querySelector('main')
let div = document.querySelector('div')

main.addEventListener('mousemove',(variable)=>{
    div.style.position = 'absolute';
    div.style.left = `${variable.x}px`;
    div.style.top = `${variable.y}px`;
})
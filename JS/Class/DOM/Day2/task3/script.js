let main = document.querySelector('#main');
let crsr = document.querySelector('.cursor');

main.addEventListener('mousemove',(variable)=>{
    crsr.style.left = variable.x+'px';
    crsr.style.top = variable.y+'px';

})
let img = document.querySelector('img');
let span = document.querySelector('h1 span');
let i = document.querySelector('#i');
let main = document.querySelector('main');



img.addEventListener('mouseenter',()=>{
    span.innerHTML = 'Kisne usko haath lagaya MC 🤬🤬🤬 ';
    span.style.color = 'red';

})

img.addEventListener('mouseleave',()=>{
    span.innerHTML = 'Abh usse dhoor hi reh BC 😤😤😤 ';
    span.style.color = 'green';

})

main.addEventListener('mousemove',(val)=>{
    i.style.left = val.x + 'px';
    i.style.top = val.y + 'px';
    
})

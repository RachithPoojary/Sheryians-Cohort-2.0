let img = document.querySelector('img');
let span = document.querySelector('h1 span');
// let h1 = document.querySelector('h1');



img.addEventListener('mouseenter',()=>{
    span.innerHTML = 'Kisne usko haath lagaya MC 🤬🤬🤬 ';
    span.style.color = 'red';

})

img.addEventListener('mouseleave',()=>{
    span.innerHTML = 'Abh usse dhoor hi reh BC 😤😤😤 ';
    span.style.color = 'green';

})

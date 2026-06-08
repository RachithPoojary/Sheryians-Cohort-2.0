let h1 = document.querySelector('h1');


h1.style.color = 'black'
h1.style.backgroundColor = 'cyan'

h1.addEventListener('dblclick',()=>{
    console.log("H1 was double clicked");
    
});

h1.addEventListener('click',()=>{
    h1.innerHTML = "I am batman "
    h1.style.color = 'white'
    h1.style.backgroundColor = "gray"
    
})
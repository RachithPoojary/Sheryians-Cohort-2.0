let element = document.querySelectorAll('.card')

let aud = new Audio('./Sa.mp4')
element.forEach((elem)=>{
    
    elem.addEventListener('click',()=>{
        aud.play();
    })
    
})

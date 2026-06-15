let  para = document.querySelector('p');
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text = para.innerHTML;

para.addEventListener('mouseenter',()=>{

    setInterval(()=>{
        const str = text.split('').map(()=>{
            return characters.split('')[Math.floor(Math.random()*53)];
        }).join('');
        para.innerHTML = str;

    },30);
})

let btn = document.querySelector('button');
let h1 = document.querySelector('h1')
let inner = document.querySelector('#inner')


btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none'
    let progress = 0;
    let interval = setInterval(()=>{
        progress++;
        h1.innerHTML=`${progress}%`
        inner.style.width = `${progress}%`;
    },25)

    setTimeout(()=>{
        clearInterval(interval);
        btn.innerHTML='Downloaded';
        btn.style.opacity=0.5
    },2500)
})


let sa = document.querySelector('#sa')
let re = document.querySelector('#re')
let ga = document.querySelector('#ga')
let ma = document.querySelector('#ma')
let pa = document.querySelector('#pa')
let dha = document.querySelector('#dha')
let ni = document.querySelector('#ni')

let s = new Audio('./Sa.mp4');
let r = new Audio('./Re.mp4');
let g = new Audio('./Ga.mp4');
let m = new Audio('./Ma.mp4');
let p = new Audio('./Pa.mp4');
let d = new Audio('./Dha.mp4');
let n = new Audio('./Ni.mp4');



sa.addEventListener('click',()=>{
    s.play();
})
re.addEventListener('click',()=>{
    r.play();
})
ga.addEventListener('click',()=>{
    g.play();
})
ma.addEventListener('click',()=>{
    m.play();
})
pa.addEventListener('click',()=>{
    p.play();
})
dha.addEventListener('click',()=>{
    d.play();
})
ni.addEventListener('click',()=>{
    n.play();
})
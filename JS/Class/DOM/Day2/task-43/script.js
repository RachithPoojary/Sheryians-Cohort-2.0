let btn = document.querySelector('button');
let main = document.querySelector('main');


let arr = ["Apple",
  "Banana",
  "Cherry",
  "Dragonfruit",
  "Elephant",
  "Falcon",
  "Galaxy",
  "Horizon",
  "Island",
  "Jungle",
  "Kangaroo",
  "Leopard",
  "Mountain",
  "Nebula",
  "Ocean",
  "Panther",
  "Quasar",
  "River",
  "Safari",
  "Tornado",
  "Umbrella",
  "Volcano",
  "Waterfall",
  "Xylophone",
  "Yacht",
  "Zenith"];


btn.addEventListener('click',()=>{
    let h1 = document.createElement ('h1');
    let random =arr[Math.floor(Math.random() * arr.length)] ;
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let rot = Math.floor(Math.random()*360)

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let scl = (Math.random()*3)

    h1.innerHTML = random;
    h1.style.color = 'red';
    console.log(h1);
    h1.style.position = 'absolute';
    h1.style.top = y+`%`;
    h1.style.left = x + `%`;
    h1.style.rotate= rot+`deg`; 
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.scale = scl;
    
    main.appendChild(h1)
})
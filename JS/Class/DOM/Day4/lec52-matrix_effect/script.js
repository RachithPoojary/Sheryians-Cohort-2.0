let  para = document.querySelector('p');
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text = para.innerHTML;
let iteration = 0;

// para.addEventListener('mouseenter',()=>{

//     setInterval(()=>{
//         const str = text.split('').map((char,idx)=>{
//             if(idx<iteration){
//                 return char;
//             }
//             return characters.split('')[Math.floor(Math.random()*53)];
//         }).join('');
//         para.innerHTML = str;
//         iteration += 0.5;

//     },30);
// })


function randomText(){
    const str = text.split('').map((char,idx)=>{
        if(idx<iteration) return char
        return characters.split('')[Math.floor(Math.random()*52)];
    }).join('');

    para.innerHTML = str;
    iteration += 0.25;
}

setInterval(randomText,30);

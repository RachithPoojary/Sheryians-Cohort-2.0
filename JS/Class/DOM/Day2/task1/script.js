let add  = document.querySelector('#add')
// let remove = document.querySelector('#remove')
let h5 = document.querySelector('h5')
let flag = 0;


add.addEventListener('click',()=>{
    if(flag === 0 ){
        h5.innerHTML = 'Friend';
        h5.style.color = 'green' ;
        add.innerHTML = 'Remove Friend';
        add.style.backgroundColor = 'red';
        flag = 1;
    }else {
         h5.innerHTML = 'Stranger';
        h5.style.color = 'red' ;
        add.innerHTML = 'Add Friend';
        add.style.backgroundColor = 'cyan';
        flag = 0;
    }
    
})
// remove.addEventListener('click',()=>{
//     h5.innerHTML = 'Stranger';
//     h5.style.color = 'red';
// })
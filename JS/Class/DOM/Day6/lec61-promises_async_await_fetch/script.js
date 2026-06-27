// let prm = new Promise((resolve,reject)=>{
//     let rnd = Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         if(rnd<5) resolve(rnd);
//         else reject(rnd);
//     },1000)
// })   ;

// function prm(){
//     return new Promise((resolve, reject) => {
//       let rnd = Math.floor(Math.random() * 10);
//       setTimeout(() => {
//         if (rnd < 5) resolve(rnd);
//         else reject(rnd);
//       }, 1000);
//     });

// }
// async function run (){
//     let val = await prm();
//     console.log(val);
    
// }

// run();

async function abcd(){
    let rawData = await fetch(`https://randomuser.me/api/`);
    let Data = await rawData.json();
    console.log(Data.results[0].name.first);
    
}
abcd();
// await fetch(`https://randomuser.me/api/`)
// .then((rawData)=>{
//     return rawData.json();
// })
// .then((data)=>{
//     console.log(data.results[0].name.first);
    
// })





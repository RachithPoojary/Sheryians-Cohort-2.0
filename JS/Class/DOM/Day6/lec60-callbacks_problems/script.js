
// ek function banaya jiska naam hai instaMaiJaakeDataLao 
// idd function ko 2 sec ke baad chalana hai 
// ye insta mai jaayega data lekar aayega or uss data ko print kar dega 


// function instaMaiJaakeDataLao(username,cb){

//     setTimeout(function(){

//         cb({
//             naam : 'Rachith',
//             age : 22
//         });
//     },2000);
// }

// instaMaiJaakeDataLao('Rachith',function(data){
//     console.log(data);
    
// })


// function afterDelay(time,cb){

//     setTimeout(function(){
//         cb();
//     },time);
// }

// afterDelay(2000,function(){
//     console.log('Callback Executed');
    
// })


// function getUser(username,cb){
//     setTimeout(function(){
//         cb({
//             id : 101,
//             username : username
//         });
//     },1000)
// }


// getUser('Rachith',function(data){
//     console.log(data.username);
//     getUserPosts(data.id,function(daata){
//         console.log(data.id);
       
//         console.log(daata);
        
//     })
// })

// function getUserPosts(userId,cb){
//     setTimeout(() => {
//         cb(["good morning","how are you ",'fack you ']);
//     }, 2000);
// }


function loginUser(cb){
    setTimeout(function(){
        cb({
            username : `rachith`,
            age :`22`,
            userId : 101
        })
    },1000);
}

function fetchPermissions(userId,cb){
    setTimeout(function (){
        cb([`yes`,`no`,`yes`]);
    },1000);
}

function loadDashboard(permissions , cb){
    cb(permissions);
}


loginUser(function (data){
    fetchPermissions(data.userId,function(permi){
        loadDashboard(permi, function(permi){
            console.log(permi);
            
            setTimeout(function(){
                console.log("DashBoard Loaded");
                
            },1000)
        })
    })
})
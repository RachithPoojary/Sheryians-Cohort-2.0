// const id = 101;
// let nam = "Rachith";
// var age = 22;

// console.table([id,nam,age])

// let job;
// console.log(job)


// alert("Hello World") -- not allowed in node js

// let arr= ["spidy",'ulti balti','kalu khan','sher khan'];
// console.log(typeof arr);

// let fun = function(name){
//     console.log("Hello "+name);
// }
// fun("Rachith");
// console.log(typeof fun);


let userOne = {
    name : "Rachith",
    age : 22,
    isAdmin : true,
    email : "rachith@example.com"
};

let userTwo = userOne;
userTwo.name = "Rachith Poojary ";
console.log(userOne.name); 
console.log(userTwo.name); 
console.log(Temporal.Now.instant());

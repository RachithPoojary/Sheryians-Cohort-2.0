// //  let obj = {
// //     name: "Rachith",
// //     age : 21,
// //     college : "VJTI"
// //  }

// //  let col2 = Symbol("college");
 
// //  obj[col2] = "VPM";

// let fun = function sum(a,b){
//     return a+b;
// }
// let a = 12, b =32;

// console.log(fun(a,b));

// let fnc = () => {
//     console.log("Hello world");
// }

// fnc();

// function dance (animal){
//     console.log(`The ${animal} is dancing`);
// }

// dance("dog");

// function add(v1=0,v2=0){
//     console.log(v1,v2);
// }
// add();

// function add(...val){
//     console.log(val);
// }
// add(1,2,3,4,5);
// console.log(typeof val);

//First class functions
// function func(val){
//     val();
// }

// func(function (){
//     console.log("Heyyyy!!!!");
// });

//higher order functions
// function func(val){
//     return function (){
//         console.log("Heyyyy!!!!");
//     }
// }
// func()();

// //closure
// function func(val){
//    let a = val;
//    return function(){
//     console.log(a++);
    
//    }
// }

// func(10)();

//immediately invoked function expression
// (function (){
//     console.log("Heyyyy!!!!");
// })();

// let fun  = (a,b) =>{
// return a*b;
// }
// console.log(fun(2,4));

// let v = function add(...val){
//     let total = 0;
//     val.forEach(function (val){
//         total = total + val;
//     })
//     return total;
// }
// let sum = v(2,3,4,5,5);
// console.log(sum);

function add(val){
val();
};

add(function (){
    console.log("Heyyyy!!!!");
})
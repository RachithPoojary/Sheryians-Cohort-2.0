// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// console.log(arr2);
// arr2 = arr;
// arr.push(8);
// console.log(arr2);
// let max = Math.max(...arr);
// console.log(max);

function display(fn){
    console.log(fn("Jai Shree Ram"));

}
function dis(input){
    return input.toUpperCase();
}
display(dis);
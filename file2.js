// // // //document.getElementById("count-el").innerText = 5;

// // // let firstbatch = 7
// // // let secondbatch = 8
// // // let count = firstbatch  + secondbatch
// // // // console.log(count)

// function increment(){
//     console.log("The btton was clicked")
// }



//function decide(){
//    console.log(42)
//}
//decide()

/*let lap1 = 34
let lap2 = 33
let lap3 = 36

function add(){
    let res = lap1 + lap2 + lap3
    console.log(res)
}
add()
*/
/*
lapsdone = 0
function incr(){
    lapsdone = lapsdone + 1
}
incr()
incr()
incr()

console.log(lapsdone)
*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(saveEl)
let count= 0

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
} 

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}





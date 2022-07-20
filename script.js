let contBefore = document.querySelector("#contBefore");
let contAfter = document.querySelector("#contAfter");


 let arr = [];
  for (let i =0; i<=5; i++) {
    arr.push(Math.floor(Math.random()*1000));
     }
 pollCreate(arr, contBefore)
function pollCreate(type, cont) {
    for (let i =0; i< type.length; i++) {
        let poll = document.createElement("div");
        poll.innerHTML = type[i];
        poll.className = "poll";
        poll.style.height = `${100 * (0.001 * poll.innerHTML)}%`
        poll.style.width = `${100 / type.length}%`
        poll.style.backgroundColor = `${Math.floor(Math.random()*16777215).toString(16)}`;
        cont.appendChild(poll);
        }
}
function quickSort(arr) { //funkcja quickSort
    if (arr.length <= 0) {
        return arr;
    };
    let pivot = arr[0];
    let arrLeft = [];
    let arrRight = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < pivot) {
            arrLeft.push(arr[x]);
        };
        if (arr[x] > pivot) {
            arrRight.push(arr[x]);
        };
    };
    return quickSort(arrLeft).concat(pivot).concat(quickSort(arrRight));
}
pollCreate(quickSort(arr), contAfter) 

function bubbleSort(arr) { //2 funnkcja bubbleSort
let sorted;
do {
    sorted = true;
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i-1] > arr[i]) {
            [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
            sorted = false;
        }
    } 
} while (!sorted)
return arr;
}
console.log(bubbleSort(arr));
  
function insertionSort(arr) {
for(let i = 0; i < arr.length; i++) {
let j = i;
while(arr[j] < arr[j-1]) {
    [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
    j--;
}
}
return arr;
} 
console.log(insertionSort(arr));
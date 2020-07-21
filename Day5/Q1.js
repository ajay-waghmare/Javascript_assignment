Number = window.prompt("Enter the till you want the of numbers")
arr = []
for (i = 1; i <= Number; i++) {
    arr.push(i)
}
console.log(arr)
let odd = arr.filter(el => el % 2 != 0);

let oddcube = arr.filter(el => el % 2 != 0).map(el => el ** 3);

console.log(odd);
console.log(oddcube);
const arr = [50, 50, 50,]
let number = true
for (let i = 0; i < arr.length; i++){
    if (arr[0] !== arr[i]) {
        number = false
    }
}
console.log(number)
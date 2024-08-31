function largestInteger(num1, num2){
    if (num1 > num2) {
        return `The largest among ${num1} and ${num2} is ${num1}`;
    } else if (num2 > num1) {
        return `The largest among ${num1} and ${num2} is ${num2}`;
    } else {
        return `Both ${num1} and ${num2} are equal`;
    }
}

let num1, num2;

num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

const result = largestInteger(parseInt(num1), parseInt(num2))
document.getElementById('showText').innerText = result
console.log(result)
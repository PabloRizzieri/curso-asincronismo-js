function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 5, sum));


setTimeout(function () {
    console.log("Hey this is a timeout, hi javascript");
}, 2000)

function gretting(name) {
    console.log("Hi " + name);
}

setTimeout(gretting, 5000, "Pablo")
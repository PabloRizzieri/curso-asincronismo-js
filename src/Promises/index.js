const promise = new Promise((resolve, reject) => {
    resolve("HEY")
});

const cows = 5;
const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve("We have the necessary cows to suply the monthly demand")
    } else {
        reject("We dont have the necessary amount of cows :(")
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Check the result");
})


// Ejercicio (Exercise)
function delay(time, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
    }, time)
    })
}

delay(5000, "Hello Pablo")
    .then((result) => {
        console.log(result);
    })
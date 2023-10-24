
let num = 1;

const timer = setInterval(() => {
    console.log("Hello, the timer is at:", num);
    num ++;

    if(num > 5){
        clearInterval(timer);
    }
}, 2000);

console.log("End of the program?");
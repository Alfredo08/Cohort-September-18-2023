
const greeting = (name, callback) => {
    callback();
    console.log(name);
    console.log("See you arround!");
}

const printHello = () => {
    console.log("Hello there!");
}

greeting("Alex", printHello);
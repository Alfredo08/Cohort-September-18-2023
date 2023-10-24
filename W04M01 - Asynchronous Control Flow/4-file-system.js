const fs = require('fs');

console.log("Program begins here!");

fs.readFile('./message.txt', {encoding: 'utf-8'}, (error, data) => {
    if(error){
        throw Error("Something went wrong while reading the file!");
    }
    let copiedText = "Copying to new file\n" + data;
    
    fs.writeFile('./copiedMessage.txt', copiedText, {encoding: 'utf-8'}, (error) => {
        if(error){
            throw Error("Something went wrong while writing into the file!");
        }
        console.log("The text get copied successfully!");
    });

});
console.log(document);
console.log("Program ends here?");
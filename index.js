// Importing the 'fs' module (file system module) using ES
const fs = require('fs');

//My Content to be displayed
const myContent = "Hello World from writing module system file by Edris";

//Specifying the file path and name
const myFilePath = 'readMe.md';

// Using the asynchronus 'writeFile' method to create a file and write or pass content to it.
fs.writeFile(myFilePath , myContent ,(err) =>{
    console.log('File added succesfully.');
});


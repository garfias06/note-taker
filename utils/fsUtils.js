// PACKAGES
const util = require('util');
const fs = require('fs');

// Promise version to read file
const readFromFile=util.promisify(fs.readFile);

/**
 * 
 * @param {string} file 
 * @param {object} note
 */

const writeToFile=(file, note)=>{
    fs.writeFile(file, JSON.stringify(note, null, 3), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${file}`)
  );
};

/**
 * 
 * @param {string} file 
 * @param {object} note
 */
const readAndAppend=(note, file)=>{
    fs.readFile(file, 'utf8', (err, data)=>{
        if (err){
            console.error(err);
        }else{
            const parsedNote=JSON.parse(data);
            parsedNote.push(note);
            writeToFile(file, parsedNote);
        };
    });
};

module.exports={readFromFile, readAndAppend};
// PACKAGES
const util = require('util');
const fs = require('fs');

// Promise version to read file
const readFromFile=util.promisify(fs.readFile);

/**
 * 
 * @param {string} file 
 * @param {object} content 
 */

const writeToFile=(file, content)=>{
    fs.writeFile(file, JSON.stringify(content, null, 3), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${file}`)
  );
};

/**
 * 
 * @param {string} file 
 * @param {object} content 
 */
const readAndAppend=(content, file)=>{
    fs.readFile(file, 'utf8', (err, data)=>{
        if (err){
            console.error(err);
        }else{
            const parsedNote=JSON.parse(data);
            parsedNote.push(content);
            writeToFile(file, parsedNote);
        };
    });
};

module.exports={readFromFile, readAndAppend};
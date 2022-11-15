// TODO: What are we importing?
//fs is a Node standard library package for reading and writing files 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//appendFile() takes in 3 arguments: path, data, and callback function
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //ternary operator takes in a condition followed by a question marked 
  //then an expression to execute if the confition is truthy followd by a colon
  //and finally the expression to execute if the condition is falsy 
  //this operation if frequently used as a shortcut for the if statement
  err ? console.error(err) : console.log('Commit logged!')
);

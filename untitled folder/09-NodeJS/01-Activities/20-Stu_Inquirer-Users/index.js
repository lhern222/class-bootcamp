const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['email', 'phone', 'txt message']
    },
    {
      type: 'communication',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
  ])
  .then((response) =>{
  console.log(response)//if you want the output response to display
    response.confirm === response.password
      ? console.log('Thank you for your info!')
      : console.log('Please respond ^.^')
  }
  );
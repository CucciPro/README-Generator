const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of the project.'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Provide a step-by-step description of how to get the development environment running.'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.'
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'List your collaborators, if any.'
      },
      {
        type: 'input',
        name: 'Test',
        message: 'Write tests for your application.'
      },
      {
        type: 'checkbox',
        name: 'License',
        message: 'What license are you using in this project? (Check one)',
        choices: ['mit', 'apache-2.0', 'afl-3.0', 'artistic-2.0', 'wtfpl', 'gpl', 'mpl']
      }, 
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init(questions) {
    return inquirer.prompt(questions);
}

// function call to initialize program
init(questions)
.then(answers => {
    console.log(answers);
});

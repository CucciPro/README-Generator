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
        message: 'Provide a description of the project:'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Provide a step-by-step description of how to get the development environment running:'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use:'
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'Provide any contribution guidelines:'
      },
      {
        type: 'input',
        name: 'Test',
        message: 'Provide test examples for your application:'
      },
      {
        type: 'checkbox',
        name: 'License',
        message: 'What license are you using in this project? (Select one)',
        choices: ['mit', 'apache-2.0', 'afl-3.0', 'artistic-2.0', 'wtfpl', 'gpl', 'mpl']
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Provide your professional Github username:'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter email where users can submit questions or concerns:'
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

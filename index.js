const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => 
    inquirer.prompt ([
    {
        type: 'input',
        name: 'title', 
        message: 'What would you like to name your project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use for this project?',
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "GNU"],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can this project be installed?'
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'How can this project be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can the user contribute to this project?',
        default: "There's no need to contribute at this point"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to run included tests?',
        default: 'Type in npm run test inside the terminal'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email Address?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Link to the projects Repository'
    },
    {
        type: 'input',
        name: 'liveapp',
        message: 'Enter link to the Live Application'
    }
]);



promptUser()
  .then((data) => writeFileAsync('readMe.md', generateMarkdown(data)))

  .then(() => console.log('Successfully wrote to readMe.md'))
  .catch((err) => console.error(err));




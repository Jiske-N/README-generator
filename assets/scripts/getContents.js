const inquirer = require('inquirer');

// prompt user for README contents
const getContents = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'Enter GitHub username. Important that it must be exact!!!',
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'Enter the name of the GitHub repository',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter contact email',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of functionality.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions',
        },
        {
            type: 'input',
            name: 'futureDevelopment',
            message: 'Enter potential future development.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter credits.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution instructions.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter details on testing.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license.',
            choices: [
                'Apache License',
                'MIT License',
                'BSD 2-Clause License',
                'BSD 3-Clause License',
                'None'
            ]
        },
    ]);
};

module.exports = getContents;
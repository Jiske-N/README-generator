const inquirer = require('inquirer');

// prompt user for README contents
const getContents = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'Required: Enter GitHub username. Important that it must be exact!!!',
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'Required: Enter the name of the GitHub repository',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Optional: Enter contact email',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Required: Enter the title of the project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Optional: Enter description of functionality.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Optional: Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Optional: Enter usage instructions',
        },
        {
            type: 'input',
            name: 'futureDevelopment',
            message: 'Optional: Enter potential future development.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Optional: Enter credits.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Optional: Enter contribution instructions.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Optional: Enter details on testing.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Required: Select a license.',
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
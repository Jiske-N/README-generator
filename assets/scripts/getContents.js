const inquirer = require('inquirer');
const colors = require('colors');

// prompt user for README contents
const getContents = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: colors.brightRed('Required: Enter GitHub username. Important that it must be exact!!!'),
        },
        {
            type: 'input',
            name: 'repoName',
            message: colors.brightRed('Required: Enter the name of the GitHub repository'),
        },
        {
            type: 'input',
            name: 'title',
            message: colors.brightRed('Required: Enter the title of the project.'),
        },
        {
            type: 'input',
            name: 'email',
            message: colors.brightGreen('Optional: Enter contact email'),
        },
        {
            type: 'input',
            name: 'description',
            message: colors.brightGreen('Optional: Enter description of functionality.'),
        },
        {
            type: 'input',
            name: 'installation',
            message: colors.brightGreen('Optional: Enter installation instructions.'),
        },
        {
            type: 'input',
            name: 'usage',
            message: colors.brightGreen('Optional: Enter usage instructions'),
        },
        {
            type: 'input',
            name: 'futureDevelopment',
            message: colors.brightGreen('Optional: Enter potential future development.'),
        },
        {
            type: 'input',
            name: 'credits',
            message: colors.brightGreen('Optional: Enter credits.'),
        },
        {
            type: 'input',
            name: 'contributing',
            message: colors.brightGreen('Optional: Enter contribution instructions.'),
        },
        {
            type: 'input',
            name: 'tests',
            message: colors.brightGreen('Optional: Enter details on testing.'),
        },
        {
            type: 'list',
            name: 'license',
            message: colors.brightRed('Required: Select a license.'),
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
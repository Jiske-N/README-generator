const inquirer = require('inquirer');

// prompt user for README contents
const getContents = () => {
    return inquirer.prompt([
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
            name: 'questionsAndFeedback',
            message: 'Enter instructions for questions and feedback.',
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
                'GNU General Public License',
                'MIT',
            ]
        },
    ]);
};

module.exports = getContents;
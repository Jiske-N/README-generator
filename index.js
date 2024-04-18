const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

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
            type: 'input',
            name: 'license',
            message: 'Select a license.',
        },
    ]);
};

const writeREADME = ({ title, description, installation, usage, futureDevelopment, credits, contributing, questionsAndFeedback, tests, license }) =>
    `${title}
    ${description}
    ${installation}
    ${usage}
    ${futureDevelopment}
    ${credits}
    ${contributing}
    ${questionsAndFeedback}
    ${tests}
    ${license}`;

const generateREADME = () => {
    getContents()
        .then((contents) => writeFile('README.md', writeREADME(contents)))
        .then(() => console.log('Successfully generated README'))
        .catch((err) => console.error(err));
};

generateREADME();
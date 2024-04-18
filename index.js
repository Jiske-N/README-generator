const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

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
            type: 'input',
            name: 'license',
            message: 'Select a license.',
        },
    ]);
};

// write contents from prompt to .md file
const writeREADME = ({ title, description, installation, usage, futureDevelopment, credits, contributing, questionsAndFeedback, tests, license }) => `# ${title}

## [The Deployed Page](https://awesome-foursome.github.io/boardgame-bliss/)

## The Project

${description}

## Link & Contents

- [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development)
- [Credits](#credits)
- [Contributing](#contributing)
- [Questions and Feedback](#questions-and-feedback)
- [Tests](#tests)
- [License](#license)

## Image

![Picture of the Homepage](./assets/images/homepage-deployment-screenshot.png)

## Installation

${installation}

## Usage

${usage}

## Future Development

${futureDevelopment}

## Credits

${credits}

## Contributing

${contributing}

## Questions and Feedback

${questionsAndFeedback}

## Tests

${tests}

## License

${license}
    `;

// trigger prompt, contents generation and writing/creating .md file
const generateREADME = () => {
    getContents()
        .then((contents) => writeFile('README.md', writeREADME(contents)))
        .then(() => console.log('Successfully generated README'))
        .catch((err) => console.error(err));
};

generateREADME();
const { writeFile } = require('fs').promises;
const getContents = require('./assets/scripts/getContents.js');
const writeContents = require('./assets/scripts/writeContents.js');

// trigger prompt, contents generation and writing/creating .md file
const generateREADME = () => {

    // prompts to retrieve user inputs
    getContents()

        // writes
        .then((contents) => writeFile('README.md', writeContents(contents)))
        .then(() => console.log('Successfully generated README'))
        .catch((err) => console.error(err));
};

generateREADME();
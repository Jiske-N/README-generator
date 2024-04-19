const { writeFile } = require('fs').promises;
const getContents = require('./assets/scripts/getContents.js');
const writeREADME = require('./assets/scripts/writeREADME.js');

// trigger prompt, contents generation and writing/creating .md file
const generateREADME = () => {
    getContents()
        .then((contents) => writeFile('README.md', writeREADME(contents)))
        .then(() => console.log('Successfully generated README'))
        .catch((err) => console.error(err));
};

generateREADME();
const { writeFile } = require('fs').promises;
const getContents = require('./assets/scripts/getContents.js');
const writeContents = require('./assets/scripts/writeContents.js');

// ensure all the required prompts exist
const checkResponse = ({ userName, repoName, title, license }) => {
    if (!userName || !repoName || !title || !license) {
        return "incomplete"
    }
};

// trigger prompt, contents generation and writing/creating .md file
const generateREADME = () => {

    // prompts to retrieve user inputs
    getContents()
        // check required responses exist before continuing
        .then((contents) => {
            if (checkResponse(contents) === "incomplete") {
                throw new Error('Incomplete user inputs. Try again.');
            }
            return contents;
        })

        // updates the README.md file to contain prompt data
        .then((contents) => writeFile('./assets/generatedREADMEs/README.md', writeContents(contents)))
        .then(() => console.log('Successfully generated README'))
        .catch((err) => console.error(err));
};

generateREADME();
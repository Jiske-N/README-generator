const getLicense = require('./getLicense.js');
const getBadge = require('./getBadge.js');

// write contents from prompt to .md file
// all if sections will only be added if relevant contents exists
const writeContents = ({ userName, repoName, email, title, description, installation, usage, futureDevelopment, credits, contributing, tests, license }) => {
    let contents = `# ${title}`;

    if (license !== 'None') {
        contents += `
${getBadge(license)}`;
    }


    contents += `

[The Deployed Page](https://${userName}.github.io/${repoName}/)`;

    if (description) {
        contents += `

## The Project

${description}`;
    }

    contents += `

## Link & Contents
`;

    if (installation) {
        contents += `
- [Installation](#installation)`;
    }

    if (usage) {
        contents += `
- [Usage](#usage)`;
    }

    if (futureDevelopment) {
        contents += `
- [Future Development](#future-development)`;
    }

    if (credits) {
        contents += `
- [Credits](#credits)`;
    }

    if (contributing) {
        contents += `
- [Contributing](#contributing)`;
    }

    contents += `
- [Questions and Feedback](#questions-and-feedback)`;

    if (contributing) {
        contents += `
- [Tests](#tests)`;
    }

    contents += `
- [License](#license)

## Image

![Picture of the Homepage](./assets/images/homepage-deployment-screenshot.png)`;

    if (installation) {
        contents += `

## Installation

${installation}`;
    }

    if (usage) {
        contents += `

## Usage

${usage}`;
    }

    if (futureDevelopment) {
        contents += `

## Future Development

${futureDevelopment}`;
    }

    if (credits) {
        contents += `

## Credits

${credits}`;
    }

    if (contributing) {
        contents += `

## Contributing

${contributing}`;
    }

    contents += `

## Questions and Feedback

If you find any issues or have contributions or feedback you can do so by opening an [issue](https://github.com/${userName}/${repoName}/issues) on Github.`;

    if (email) {
        contents += `

Or through [email](${email}).`;
    }


    if (tests) {
        contents += `

## Tests

${tests}`;
    }

    contents += `

## License

${getLicense(userName, license)}`;

    return contents;
};

module.exports = writeContents;
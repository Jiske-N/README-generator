const getLicense = require('./getLicense.js');
const getBadge = require('./getBadge.js');

const retrieveLicense = (title, license) => {
    return getLicense(title, license);
}

const retrieveBadge = (license) => {
    return getBadge(license);
}

// write contents from prompt to .md file
const writeContents = ({ userName, repoName, email, title, description, installation, usage, futureDevelopment, credits, contributing, tests, license }) => `# ${title}
${retrieveBadge(license)}

[The Deployed Page](https://${userName}.github.io/${repoName}/)

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

If you find any issues or have contributions or feedback you can do so by opening an [issue](https://github.com/${userName}/${repoName}/issues) on Github.

Or through [email](${email}).

## Tests

${tests}

## License

${retrieveLicense(userName, license)}
    `;

module.exports = writeContents;
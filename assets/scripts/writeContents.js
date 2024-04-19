const getLicense = require('./getLicense');

const retrieveLicense = (title, license) => {
    return getLicense(title, license);
}

// write contents from prompt to .md file
const writeContents = ({ title, description, installation, usage, futureDevelopment, credits, contributing, questionsAndFeedback, tests, license }) => `# ${title}

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

${retrieveLicense(title, license)}
    `;

module.exports = writeContents;
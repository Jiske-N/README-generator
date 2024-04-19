const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const bsd2Badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
const bsd3Badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

const getBadge = (license) => {
    switch (license) {
        case 'Apache License':
            return apacheBadge;
        case 'MIT License':
            return mitBadge;
        case 'BSD 2-Clause License':
            return bsd2Badge;
        case 'BSD 3-Clause License':
            return bsd3Badge;
        case 'None':
            return '';
        default:
            console.log('Invalid license');
    }
}

module.exports = getBadge;
const licenseBadge = require('license-badge');
const licenseLink = require('license-link');

// Function that returns a license badge based on the license passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return licenseBadge(license);
  }
  return '';
}

// Function that returns the license link based on the license passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return licenseLink(license);
  }
  return '';
}

// Function that returns the license section of README based on the license passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.

`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadgeMarkdown = renderLicenseBadge(data.license);
  const licenseSectionMarkdown = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadgeMarkdown}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${licenseSectionMarkdown ? '- [License](#license)\n' : ''}

## Installation
${data.command}

## Usage
${data.commandTests}

## Contributing
${data.repo}

## Tests
${data.contribute}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}

${licenseSectionMarkdown}
`;
}

module.exports = generateMarkdown;





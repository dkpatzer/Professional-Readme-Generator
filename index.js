const inquirer = require('inquirer');
const fs = require('fs');

// Function that returns a license badge based on the license passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
  }
  return '';
}

// Function that returns the license link based on the license passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[${license} License](https://opensource.org/licenses/${encodeURIComponent(license)})`;
  }
  return '';
}

// Function that returns the license section of README based on the license passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.

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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md file generated successfully!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers); // Call the generateMarkdown function to generate the README content
    writeToFile('README.md', readmeContent); // Write the content to README.md
  });
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'username',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description for your project:',
  },
  {
    type: 'input',
    name: 'license',
    message: "What kind of license should your project have?",
  },
  {
    type: 'input',
    name: 'command',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'commandTests',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Call the initialize function to start the application
init();

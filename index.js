// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description for your project:',
    },
    // Add more questions for other sections
  ];
  

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README.md file generated successfully!');
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers); // Call the generateMarkdown function to generate the README content
      writeToFile('README.md', readmeContent); // Write the content to README.md
    });
  }
  

// Function call to initialize app
init();

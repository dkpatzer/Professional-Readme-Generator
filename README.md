# Professional Readme Generator

## Description
This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked with the following command: node index.js. 

Because this application won’t be deployed, I also provided a link to a walkthrough video that demonstrates its functionality using Screencastify. 

This code allowed me to gain understanding of the inquirer module and how to use it to prompt the user with questions and receive answers. I also gained experience in using the fs module to write the README.md file. I learned about using the module.exports statement to export the generateMarkdown function. I also gained experience in using the package.json file to list the dependencies for the app. I learned about using the npm install command to install the inquirer and fs modules. I learned about using the node index.js command to run the app. . I learned about using the inquirer.prompt function to prompt the user with questions and receive answers. I learned about using the inquirer.prompt function to store the user's answers in an object. I learned about using the inquirer.prompt function to pass the user's answers to the generateMarkdown function. 




## Instructions for Use
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository.THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README 




## Code Explanation
The app is built using the following files: index.js, generate markdown.js, and package.json. The index.js file contains the code that prompts the user for input and then uses the input to generate the README.md file. The generate markdown.js file contains the code that generates the README.md file. The package.json file contains the code that lists the dependencies for the app.

## index.js file

The code begins by importing the inquirer module. The inquirer module is used to prompt the user with questions and receive answers. Next, the fs module is imported. The fs module provides an API for interacting with the file systemand is used to write the README.md file. The next code block defines the renderLicenseBadge, renderLicenseLink, and renderLicenseSection helper functions. They are used to generate the license badge, license link, and license section of the README.md file.
Next, the generateMarkdown module is defined. It takes the user's data as a parameter and uses the data to generate the README.md file. The writeFile function is defined. It takes the file name and data as parameters and uses the fs module to write the README.md file. The init function is defined next. It initializes the application and uses the inquirer module to prompt the user with questions. The questions are defined in the const questions array. The questions are as follows: What is your GitHub username? What is your email address? What is your project's name? Please write a short description of your project. What kind of license should your project have? (Use arrow keys) What command should be run to install dependencies? What command should be run to run tests? What does the user need to know about using the repo? What does the user need to know about contributing to the repo? The user's answers are stored in the const answers object. The init function is called to initialize the application.

 ## generate markdown.js file
 This JavaScript file defines several functions related to generating markdown content for the README file. 
 It starts with three comment lines: the renderLicenseBadge function, the renderLicenseLink function, and the renderLicenseSection function. These functions are used to generate the license badge, license link, and license section of the README.md file. The renderLicenseBadge function takes the license as a parameter and returns the license badge. The renderLicenseLink function takes the license as a parameter and returns the license link. The renderLicenseSection function takes the license as a parameter and returns the license section of the README.md file. The generateMarkdown function is defined next. It takes the user's data as a parameter and uses the data to generate the README.md file. The generateMarkdown function returns the README.md file. The generateMarkdown function is exported.

 The function returns a template string that represents the the final markdown content for the README file. It includes the project title, license badge markdown, description, table of contents, installation instructions, usage information, contribution guidelines, test instructions, contact information, and license section.

 The module.exports statement exports the generateMarkdown function.

## package.json file
The package.json file contains the code that lists the dependencies for the app. The dependencies are inquirer and fs. The inquirer module is used to prompt the user with questions and receive answers. The fs module provides an API for interacting with the file system and is used to write the README.md file. The package.json file also contains the code that lists the app's metadata. The metadata includes the app's name, version, description, main file, scripts, keywords, author, license, and dependencies.

## Installation Instructions 
To install the app, the user must clone the repository to their local machine. The user must have node.js installed on their machine. The user must also install the inquirer and fs modules. The user must run the command npm install in the terminal to install the inquirer and fs modules. The user must run the command node index.js in the terminal to run the app. The user must answer the questions in the terminal to generate the README.md file. The README.md file will be generated in the Develop folder. The user can then copy the README.md file to the root folder of their project. I also gained experince in using Screencastify to record a video of the app in action. 




## Llink to Screencastify video

https://drive.google.com/file/d/1_KEQ7nPAPrRvM-PTRNJ2krO08GDyh2mb/view?pli=1


## Credits and Sources
 The Professional README app was developed by David Patzer as part of the NU coding boot camp. I obtained information from many sources to help in building this app. The sources are listed below.

 . The Node.js site was invaluable in understanding Node.js and building functional routes between the front end and back end. https://nodejs.org/en/
. The npm site was invaluable in understanding how to use npm to install packages. https://www.npmjs.com/
. The npm inquirer documentation was critical in my understanding  of how to use inquirer command line to provide prompts allowing a series of questions to ask the user in a CLI application in a structured matter. I learned about flow control and a better understanding of asynchronous programming. https://www.npmjs.com/package/inquirer/v/8.2.4
. The npm fs documentation was critical in my understanding of how to use fs to write the README.md file. https://www.npmjs.com/package/fs
. I used the MDN Package management basics guide to learn about package management. https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
. I reviewed the freecodecamp page entitled module.exports – How to Export in Node.js and JavaScript to learn about module.exports. https://www.freecodecamp.org/news/node-module-exports-explained-with-javascript-export-function-examples/
. I also used the JavaScript English Major page entitled Writing Content with Markdown https://the-javascripting-english-major.org/v1/12-markdown
. I have used the Settng Up JavaScript Applications site from the CUNY many times including for this app https://babbage.cs.qc.cuny.edu/courses/cs903/setting_up_js_apps.xhtml
. in order to take the video of the app in action I used the Screencastify site. https://learn.screencastify.com/hc/en-us/sections/4403859970199-User-Guide
I also used the recommended Fullstack Blog Video Submission Guide https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide
...Finaly I used ChatGPT to check my text/code. https://chat.openai.com/ 


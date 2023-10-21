// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ({ title, description, installation, usage, license, contributing, tests, questions }) =>
`
![badge](https://img.shields.io/badge/license-${license}-brightgreen)

# ${title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution Guidlines](#contribution)
6. [Test](#test)
7. [Link](#link)
   
## Description
        
${description}

## Installation
        
${installation}

## Usage

${usage}

## License

This application is covered by the ${license} license. 

## Contribution Guidlines
        
${contributing}

## Test
        
${tests}

## Link

(${questions})

`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Describe your project in three sentences?',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What was the installation process?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'How do you use this product?',
          },
          {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
          {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
          },
          {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub repo URL:',
          },

        ])

    .then((data) => {

        const htmlREADMEContent = questions(data)

        fs.writeFile('README.md', htmlREADMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
          
})




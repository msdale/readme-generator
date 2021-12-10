const inquirer = require('inquirer');
const { restoreDefaultPrompts } = require('inquirer');

const promptUser = () => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter the README title (Required)',
      validate: readmeTitle => {
        if (readmeTitle) {
          return true;
        } else {
          console.log('Please enter the README title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the README description (Required)',
      validate: readmeDesc => {
        if (readmeDesc) {
          return true;
        } else {
          console.log('Please enter the README description!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like to have a table of contents?',
      default: true
    },
    {
      type: 'input',
      name: 'githubRepoName',
      message: 'Enter your GitHub Repository Name (Required)',
      validate: githubRepoName => {
        if (githubRepoName) {
          return true;
        } else {
          console.log('Please enter your GitHub Repository Name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUserName',
      message: 'Enter your GitHub User Name (Required)',
      validate: githubRepoName => {
        if (githubRepoName) {
          return true;
        } else {
          console.log('Please enter your GitHub User Name!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'Would you like to provide installation instructions?',
      default: false
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide some installation instructions:',
      when: ({ confirmInstallation }) => confirmInstallation
    },
    {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'Would you like provide a usage video?',
      default: false
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a usage .mp4 file or URL to a link:',
      when: ({ confirmUsage }) => confirmUsage
    },
    {
      type: 'confirm',
      name: 'confirmCredits',
      message: 'Would you like to provide credits?',
      default: false
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide a credit line of text:',
      when: ({ confirmCredits }) => confirmCredits
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ["none", "MIT", "GPL V3", "GPL V2", "LGPL V3"]
    },
    {
      type: 'confirm',
      name: 'confirmFeatures',
      message: 'Would you like to provide a features section?',
      default: false
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide a features section:',
      when: ({ confirmFeatures }) => confirmFeatures
    },
    {
      type: 'confirm',
      name: 'confirmContributors',
      message: 'Would you like to provide a list of contributors?',
      default: false
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Provide a line for contributors:',
      when: ({ confirmContributors }) => confirmContributors
    },
    {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Would you like to provide testing instructions?',
      default: false
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide an instruction set for issuing tests',
      when: ({ confirmTests }) => confirmTests
    }
  ]);
};

module.exports = promptUser;
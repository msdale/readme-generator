const fse = require('fs-extra');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license, name) => {
  const year = new Date().getFullYear();

  switch (license.toLowerCase()) {
    case "mit":
      return `[![License: MIT](./assets/images/license-MIT-green.svg)](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/pretext/MIT-pre.txt)

[Full Disclosure](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/full-disclosure/MIT.txt)`;

    case "gpl v3":
      return `[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/pretext/gpl-v3-pre.txt)

[Full Disclosure](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/full-disclosure/gpl-v3.txt)`;

    case "gpl v2":
      return `[![License: GPL v2](./assets/images/license-GPL_v2-blue.svg)](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/pretext/gpl-v2-pre.txt)

[Full Disclosure](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/full-disclosure/gpl-v2.txt)`;

    case "lgpl v3":
      return `[![License: LGPL v3](./assets/images/license-LGPL_v3-blue.svg)](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/pretext/lgpl-v3-pre.txt)

[Full Disclosure](https://raw.githubusercontent.com/msdale/readme-generator/feature/fill-readme/assets/license-docs/full-disclosure/lgpl-v3.txt)`;

    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { };

// [MIT](https://choosealicense.com/licenses/mit/)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { };

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

## License

${renderLicenseBadge(data.license, data.name)}
`;
};

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    if (filePath === "") {
      resolve("");
    } else {
      fse.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    }
  });
};

const ensureDir = (dirPath) => {
  console.log(dirPath);
  return new Promise((resolve, reject) => {
    fse.ensureDir(dirPath, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(dirPath);
    });
  });
};


const writeFile = (filePathName, fileContent) => {
  return new Promise((resolve, reject) => {
    fse.writeFile(filePathName, fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful filePathName to the `.then()` method
      resolve(filePathName);
    });
  });
};

const copyFile = (srcFilePath, targetDirPath) => {
  return new Promise((resolve, reject) => {
    fse.copyFile(srcFilePath, targetDirPath, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};

//module.exports = { generateMarkdown, ensureDistDir, readFile, writeReadmeToDist, copySrcStyleToDist };
module.exports = { readFile, ensureDir, writeFile, generateMarkdown };

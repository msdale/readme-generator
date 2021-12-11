const fse = require('fs-extra');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicense = (promiseParams) => {
  const year = new Date().getFullYear();

  switch (promiseParams.readmeParams.license.toLowerCase()) {
    case "mit":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-MIT-green.svg", promiseParams.imagesDir + "/license-MIT-green.svg")
      .then(targetFilePath => {
        console.log("Copied ./assets/images/license-MIT-green.svg to " + targetFilePath);
        // copy the pretext license file to dist/assets/license-docs/pretext dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/pretext/MIT-pre.txt", promiseParams.preTextDir + "/MIT-pre.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/pretext/MIT-pre.txt to " + targetFilePath);
        // copy the full-disclosure license file to the dist/assets/license-docs/full-disclosure dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/full-disclosure/MIT.txt", promiseParams.fullDisclosureDir + "/MIT.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/full-disclosure/MIT.txt to " + targetFilePath);
      });

        return `[![License: MIT](./assets/images/license-MIT-green.svg)](./assets/license-docs/pretext/MIT-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/MIT.txt)`;


    case "gpl v3":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-GPLv3-blue.svg", promiseParams.imagesDir + "/license-GPLv3-blue.svg")
      .then(targetFilePath => {
        console.log("Copied ./assets/images/license-GPLv3-blue.svg " + targetFilePath);
        // copy the pretext license file to dist/assets/license-docs/pretext dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/pretext/gpl-v3-pre.txt", promiseParams.preTextDir + "/gpl-v3-pre.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/pretext/gpl-v3-pre.txt to " + targetFilePath);
        // copy the full-disclosure license file to the dist/assets/license-docs/full-disclosure dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/full-disclosure/gpl-v3.txt", promiseParams.fullDisclosureDir + "/gpl-v3.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/full-disclosure/gpl-v3.txt to " + targetFilePath);
      });

      return `[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](./assets/license-docs/pretext/gpl-v3-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v3.txt)`;

    case "gpl v2":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-GPL_v2-blue.svg", promiseParams.imagesDir + "/license-GPL_v2-blue.svg")
      .then(targetFilePath => {
        console.log("Copied ./assets/images/license-GPL_v2-blue.svg " + targetFilePath);
        // copy the pretext license file to dist/assets/license-docs/pretext dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/pretext/gpl-v2-pre.txt", promiseParams.preTextDir + "/gpl-v2-pre.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/pretext/gpl-v2-pre.txt to " + targetFilePath);
        // copy the full-disclosure license file to the dist/assets/license-docs/full-disclosure dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/full-disclosure/gpl-v2.txt", promiseParams.fullDisclosureDir + "/gpl-v2.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/full-disclosure/gpl-v2.txt to " + targetFilePath);
      });

      return `[![License: GPL v2](./assets/images/license-GPL_v2-blue.svg)](./assets/license-docs/pretext/gpl-v2-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v2.txt)`;

    case "lgpl v3":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-LGPL_v3-blue.svg", promiseParams.imagesDir + "/license-LGPL_v3-blue.svg")
      .then(targetFilePath => {
        console.log("Copied ./assets/images/license-LGPL_v3-blue.svg " + targetFilePath);
        // copy the pretext license file to dist/assets/license-docs/pretext dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/pretext/lgpl-v3-pre.txt", promiseParams.preTextDir + "/lgpl-v3-pre.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/pretext/lgpl-v3-pre.txt to " + targetFilePath);
        // copy the full-disclosure license file to the dist/assets/license-docs/full-disclosure dir...(substitute data if necessary)
        return copyFile("./assets/license-docs/full-disclosure/lgpl-v3.txt", promiseParams.fullDisclosureDir + "/lgpl-v3.txt");
      })
      .then(targetFilePath => {
        console.log("Copied  ./assets/license-docs/full-disclosure/lgpl-v3.txt to " + targetFilePath);
      });

      return `[![License: LGPL v3](./assets/images/license-LGPL_v3-blue.svg)](./assets/license-docs/pretext/lgpl-v3-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/lgpl-v3.txt)`;

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
const generateMarkdown = (promiseParams) => {
  return `# ${promiseParams.readmeParams.title}

## Description

${promiseParams.readmeParams.description}

${renderTableOfContents(promiseParams)}

${renderInstallation(promiseParams)}

${renderUsage(promiseParams)}

${renderCredits(promiseParams)}

## License

${renderLicense(promiseParams)}

${renderFeatures(promiseParams)}

${renderContributing(promiseParams)}

${renderTests(promiseParams)}

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

const copyFile = (srcFilePath, targetFilePath) => {
  return new Promise((resolve, reject) => {
    fse.copyFile(srcFilePath, targetFilePath, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve(targetFilePath);
    });
  });
};

//module.exports = { generateMarkdown, ensureDistDir, readFile, writeReadmeToDist, copySrcStyleToDist };
module.exports = { readFile, ensureDir, writeFile, copyFile, generateMarkdown };

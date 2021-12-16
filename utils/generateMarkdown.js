const fse = require('fs-extra');

const renderTitle = (promiseParams) => {
  return `# ${promiseParams.readmeParams.title}

`;
};

const renderDescription = (promiseParams) => {
  return `## Description
  
  ${promiseParams.readmeParams.description}

`;
};

const renderTableOfContents = (promiseParams) => {
  let tableOfCont = "";

  if (promiseParams.readmeParams.confirmTableOfContents) {
    tableOfCont += promiseParams.readmeParams.confirmInstallation ? "* [Installation](#installation)\n" : "";
    tableOfCont += promiseParams.readmeParams.confirmUsage ? "* [Usage](#usage)\n" : "";
    tableOfCont += promiseParams.readmeParams.confirmCredits ? "* [Credits](#credits)\n" : "";
    tableOfCont += promiseParams.readmeParams.license !== "none" ? "* [License](#license)\n" : "";
    tableOfCont += promiseParams.readmeParams.confirmFeatures ? "* [Features](#features)\n" : "";
    tableOfCont += promiseParams.readmeParams.confirmContributors ? "* [Contributors](#contributors)\n" : "";
    tableOfCont += promiseParams.readmeParams.confirmTests ? "* [Tests](#tests)\n\n" : "";
    return `## Table Of Contents

${tableOfCont}

`;
  } else return "";

};

const renderInstallation = (promiseParams) => {
  if (promiseParams.readmeParams.confirmInstallation) {
    return `## Installation

${promiseParams.readmeParams.installation}

`;
  } else return "";
};

const renderUsage = async (promiseParams) => {
  let usageStmt = `## Usage

${promiseParams.readmeParams.usage}

`;

  if (promiseParams.readmeParams.confirmUsageVideo) {
    const data = await readFile("./assets/videos/usage-link.url");
    console.log("Read file ./assets/videos/usage-link.url");
    usageStmt += `## Usage Video

${data}

`;
  }
  return usageStmt;
};

const renderCredits = (promiseParams) => {
  if (promiseParams.readmeParams.confirmCredits) {
    return `## Credits

${promiseParams.readmeParams.credits}

`;
  } else return "";
};

const renderLicense = (promiseParams) => {
  const year = new Date().getFullYear();
  const name = promiseParams.readmeParams.name;

  switch (promiseParams.readmeParams.license.toLowerCase()) {
    case "mit":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-MIT-green.svg", promiseParams.imagesDir + "/license-MIT-green.svg")
        .then(targetFilePath => {
          console.log("Copied ./assets/images/license-MIT-green.svg to " + targetFilePath);
          // transform MIT pre-text to dated version
          return readFile("./assets/license-docs/pretext/MIT-pre.txt");
        })
        .then(data => {
          console.log("Read file ./assets/license-docs/pretext/MIT-pre.txt");
          const datedNamedData = data.replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.preTextDir + "/" + "MIT-pre.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
          // transform MIT full disclosure text to dated version
          return readFile("./assets/license-docs/full-disclosure/MIT.txt");
        })
        .then(data => {
          console.log("Read file ./assets/license-docs/full-disclosure/MIT.txt");
          const datedNamedData = data.replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.fullDisclosureDir + "/" + "MIT.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[![License: MIT](./assets/images/license-MIT-green.svg)](./assets/license-docs/pretext/MIT-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/MIT.txt)

`;


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
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](./assets/license-docs/pretext/gpl-v3-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v3.txt)

`;

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
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[![License: GPL v2](./assets/images/license-GPL_v2-blue.svg)](./assets/license-docs/pretext/gpl-v2-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v2.txt)

`;

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
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[![License: LGPL v3](./assets/images/license-LGPL_v3-blue.svg)](./assets/license-docs/pretext/lgpl-v3-pre.txt)

[Full Disclosure](./assets/license-docs/full-disclosure/lgpl-v3.txt)

`;

    default:
      return '';
  }
};

const renderFeatures = (promiseParams) => {
  if (promiseParams.readmeParams.confirmFeatures) {
    return `## Features

${promiseParams.readmeParams.features}

`;
  } else return "";
};

const renderContributors = (promiseParams) => {
  if (promiseParams.readmeParams.confirmContributors) {
    return `## Contributors

${promiseParams.readmeParams.contributors}

`;
  } else return "";
};

const renderTests = (promiseParams) => {
  if (promiseParams.readmeParams.confirmTests) {
    return `## Tests

${promiseParams.readmeParams.tests}

`;
  } else return "";
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = async (promiseParams) => {
  return `${renderTitle(promiseParams)}

${renderDescription(promiseParams)}

${renderTableOfContents(promiseParams)}

${renderInstallation(promiseParams)}

${renderUsage(promiseParams)}

${renderCredits(promiseParams)}

${renderLicense(promiseParams)}

${renderFeatures(promiseParams)}

${renderContributors(promiseParams)}

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

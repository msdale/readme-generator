const fse = require('fs-extra');

const renderLicenseBadge = async (promiseParams) => {
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
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.preTextDir + "/" + "MIT-pre.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return '[![License: MIT](./assets/images/license-MIT-green.svg)](./assets/license-docs/pretext/MIT-pre.txt)';

    case "gpl v3":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-GPLv3-blue.svg", promiseParams.imagesDir + "/license-GPLv3-blue.svg")
        .then(targetFilePath => {
          console.log("Copied ./assets/images/license-GPLv3-blue.svg " + targetFilePath);
          // transform GPL-v3 pre-text to dated version
          return readFile("./assets/license-docs/pretext/gpl-v3-pre.txt")
        })
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.preTextDir + "/" + "gpl-v3-pre.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return '[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](./assets/license-docs/pretext/gpl-v3-pre.txt)';

    case "gpl v2":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-GPL_v2-blue.svg", promiseParams.imagesDir + "/license-GPL_v2-blue.svg")
        .then(targetFilePath => {
          console.log("Copied ./assets/images/license-GPL_v2-blue.svg " + targetFilePath);
          // transform GPL-v3 pre-text to dated version
          return readFile("./assets/license-docs/pretext/gpl-v2-pre.txt")
        })
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.preTextDir + "/" + "gpl-v2-pre.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return '[![License: GPL v2](./assets/images/license-GPL_v2-blue.svg)](./assets/license-docs/pretext/gpl-v2-pre.txt)';

    case "lgpl v3":
      // copy the image to dist/assets/images dir...
      copyFile("./assets/images/license-LGPL_v3-blue.svg", promiseParams.imagesDir + "/license-LGPL_v3-blue.svg")
        .then(targetFilePath => {
          console.log("Copied ./assets/images/license-LGPL_v3-blue.svg " + targetFilePath);
          // transform GPL-v3 pre-text to dated version
          return readFile("./assets/license-docs/pretext/lgpl-v3-pre.txt")
        })
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.preTextDir + "/" + "lgpl-v3-pre.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return '[![License: LGPL v3](./assets/images/license-LGPL_v3-blue.svg)](./assets/license-docs/pretext/lgpl-v3-pre.txt)';

    default:
      return '';
  }
};

const renderTitle = async (promiseParams) => {
  return `# ${promiseParams.readmeParams.title}

`;
};

const renderDescription = async (promiseParams) => {
  return `## Description
  
  ${promiseParams.readmeParams.description}

`;
};

const renderTableOfContents = async (promiseParams) => {
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

const renderInstallation = async (promiseParams) => {
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
    const videoUrl = await data;
    console.log("Read file ./assets/videos/usage-link.url");
    usageStmt += `## Usage Video

${videoUrl}

`;
  }
  return usageStmt;
};

const renderCredits = async (promiseParams) => {
  if (promiseParams.readmeParams.confirmCredits) {
    return `## Credits

${promiseParams.readmeParams.credits}

`;
  } else return "";
};

const renderLicense = async (promiseParams) => {
  const year = new Date().getFullYear();
  const name = promiseParams.readmeParams.name;

  switch (promiseParams.readmeParams.license.toLowerCase()) {
    case "mit":
      // transform MIT full disclosure text to dated version
      readFile("./assets/license-docs/full-disclosure/MIT.txt")
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.fullDisclosureDir + "/" + "MIT.txt", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[Full Disclosure](./assets/license-docs/full-disclosure/MIT.txt)

`;

    case "gpl v3":
      // transform GPL-v3 full disclosure text to dated version
      readFile("./assets/license-docs/full-disclosure/gpl-v3.md")
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.fullDisclosureDir + "/" + "gpl-v3.md", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v3.md)

`;

    case "gpl v2":
      // transform GPL-v2 full disclosure text to dated version
      readFile("./assets/license-docs/full-disclosure/gpl-v2.md")
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.fullDisclosureDir + "/" + "gpl-v2.md", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v2.md)

`;

    case "lgpl v3":
      // transform LGPL-v3 full disclosure text to dated version
      readFile("./assets/license-docs/full-disclosure/lgpl-v3.md")
        .then(data => {
          const datedNamedData = data.toString().replace("<year>", year).replace("<fullname>", name);
          return writeFile(promiseParams.fullDisclosureDir + "/" + "lgpl-v3.md", datedNamedData);
        })
        .then(targetFilePath => {
          console.log("Created file " + targetFilePath);
        })
        .catch(err => {
          console.log(err);
        });

      return `## License

[Full Disclosure](./assets/license-docs/full-disclosure/lgpl-v3.md)

`;

    default:
      return '';
  }
};

const renderFeatures = async (promiseParams) => {
  if (promiseParams.readmeParams.confirmFeatures) {
    return `## Features

${promiseParams.readmeParams.features}

`;
  } else return "";
};

const renderContributing = async (promiseParams) => {
  if (promiseParams.readmeParams.confirmContributing) {
    await copyFile("./assets/markdown/contributing.md", promiseParams.markdownDir + "/contributing.md")
      .then(targetFilePath => {
        console.log("Copied ./assets/markdown/contributing.md to " + targetFilePath);
      })
      .catch(err => {
        console.log(err);
      });

    return `## Contributing

${promiseParams.readmeParams.contributing}

[Contributor Covenant](./assets/markdown/contributing.md)

`;
  } else return "";
};

const renderTests = async (promiseParams) => {
  if (promiseParams.readmeParams.confirmTests) {
    return `## Tests

${promiseParams.readmeParams.tests}

`;
  } else return "";
};

const renderQuestions = async (promiseParams) => {
  return `## Questions

Any questions, please contact ${promiseParams.readmeParams.name}.

My email address is: ${promiseParams.readmeParams.emailAddress}
My github profile is https://github.com/${promiseParams.readmeParams.githubUserName}
The pertinent github repository is https://github.com/${promiseParams.readmeParams.githubUserName}/${promiseParams.readmeParams.githubRepoName}

`;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = async (promiseParams) => {
  let readmeContents = `${await renderLicenseBadge(promiseParams)}
  
${await renderTitle(promiseParams)}

${await renderDescription(promiseParams)}

${await renderTableOfContents(promiseParams)}

${await renderInstallation(promiseParams)}

${await renderUsage(promiseParams)}

${await renderCredits(promiseParams)}

${await renderLicense(promiseParams)}

${await renderFeatures(promiseParams)}

${await renderContributing(promiseParams)}

${await renderTests(promiseParams)}

${await renderQuestions(promiseParams)}
`;
  promiseParams.readmeContents = readmeContents;
  return readmeContents;
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

[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](./assets/license-docs/pretext/gpl-v3-pre.txt)
  
# README.md Generator



## Description
  
  The README.md generator is a node.js (command-line) application that aids in the creation of a well constructed README.md file, lending to the usefulness and comprehension of the github repository the README.md file represents.  The generator application is contained in the index.js (node js) file which can be executed individually (as long as executable permissions are granted), or used as the first argument following the 'node' command on the command line.  There is a single option that the application itself can utilize, and that is the '-c <filePathname>' option, used to identify a pre-existing JSON configuration file that has all the parameters necessary to generate a README.md file.  Without the '-c' option activated, the application will prompt the user for all parameter values required to generate the README.md file result.  If the '-c' option is used or not the final output will be a sub-directory named 'dist' which contains the generated README.md file, a file named readme-params.json which can be used with the '-c' option to regenerate the same READEME.md file, and all the images and text files needed to fill out the README.md contents.  Note; the resulting output is housed in the 'dist' sub-directory (created if missing), and is designed to be used to initialize a new (empty) git repository with the prefunctary README.md initialization; the starting point of building a new github repository.



## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Features](#features)
* [Tests](#tests)





## Installation

We will assume the local computing environment already has a recent version of node installed.  If not please check out https://nodejs.org/en/download/.  In order to get this node application ready to run, there are still a few initial steps required; (1) clone this github repository using the command 'git clone https://github.com/msdale/readme-generator.git <optional_root_directory_name>', and (2) from within the repository root directory execute the commands 'npm install', 'npm install fs-extra', 'npm install inquirer', and finally 'npm install yargs'.  Now you are ready to run the readme generator.



## Usage

To execute the application, from the root directory of the readme-generator repository clone, run the command './index.js' or 'node index.js'.  This will walk the user through a series of questions.  Some questions require an answer.  Keep the answers short and to the point.  The final README.md can be modified after its initial formation.  NOTE: There will be a question about the availability of a 'Usage Video' referencing and mp4 file ./assets/videos/usage-link.url.  If a usage video is supplied, name it a place it in the <root>/assets/videos/usage-link.url.  This file should contain the URL pointing to the mp4 file.  The URL can be created by dragging and dropping an mp4 file onto a markdown file contained in a github repository.  From there the URL can be extracted and placed in the ./assets/videos/usage-link.url file.

## Usage Video

https://user-images.githubusercontent.com/90280725/146261730-a4c30cc8-8ae5-43e4-8087-597848e58fc0.mp4






## License

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v3.md)



## Features

As mentioned in the "Description" section, the readme-generator can be executed using a pre-existing parameters file.  The application persists the readme-params.json file in the 'dist' directory.  That file can be archived and reused in the optional '-c <filePathname>'.  This feature can provide a means of templating the readme generation process without having to save the entire readme file.



## Contributing

Contributing is encouraged. Send a pull request, along with an email.

[Contributor Covenant](./assets/markdown/contributing.md)



## Tests

Working on some unit testing automation using Jest.  Not quite there yet.



## Questions

Any questions, please contact Mark Dale.

My email address is: msdaledad@gmail.com
My github profile is https://github.com/msdale
The pertinent github repository is https://github.com/msdale/readme-generator



[![License: GPL v3](./assets/images/license-GPLv3-blue.svg)](./assets/license-docs/pretext/gpl-v3-pre.txt)
  
# README.md Generator



## Description
  
  The README.md generator is a node.js (command-line) application that aids in the creation of a well constructed README.md file. This lends to useful comprehension of the github repository the README.md file represents.  The generator application is contained in the index.js file which can be executed individually if it has executable permissions granted, or used as the first argument following the 'node' command on the command line.  There is a single option that the application itself can utilize, and that is the '-c jsonFilePathname' option, used to identify a pre-existing JSON configuration file that has all the parameters necessary to generate a README.md file.  Without the '-c' option activated, the application will prompt the user for all parameter values required to generate the README.md file result.  If the '-c' option is used, or not, the final output will be a sub-directory named 'dist' which contains these artifacts; (1) the generated README.md file, (2) a file named readme-params.json which can be used with the '-c' option to regenerate the same READEME.md file, and (3) all the images and text files used to fill out the README.md content through links in the README.md file.  Note; the resulting output is housed in the 'dist' sub-directory (created if missing), and is designed to be used to initialize a new (empty) git repository with a prefunctary README.md initialization; the starting point for building a new github repository. It is expected that the final version of the README.md file will be an edited version of this initialization.



## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Tests](#tests)





## Installation

We will assume the local computing environment already has a recent version of node and npm installed.  If not please check out https://nodejs.org/en/download/.  In order to get this node application ready to run, there are still a few initial steps required; (1) clone this github repository using the command 'git clone https://github.com/msdale/readme-generator.git <optional_root_directory_name>', and (2) from within the cloned repository root directory execute the commands 'npm install', 'npm install fs-extra', 'npm install inquirer', and finally 'npm install yargs' to make sure all dependencies are updated.  Now you are ready to run the readme generator.



## Usage

To execute the application, from the root directory of the readme-generator repository clone, run the command './index.js' or 'node index.js'.  This will walk the user through a series of questions.  You'll have to work through required vs default answers. The actual answers are not as important as all the sections you decide to include.  Keep the answers short and to the point; you'll probably edit them later. NOTE; There will be a question about the availability of a 'Usage Video' referencing an mp4 file named './assets/videos/usage-link.url'.  If you want to supply a usage video you will reply (y) to the prompt, but you must previously create an mp4 formatted video and install it in github.  Here's how; create the mp4 file; drag and drop it into any git repository markdown file while viewing the markdown file in the github browser. The dropped mp4 file will be transformed to a URL pointing to the mp4 file saved in a unique user-images.githubusercontent.com location. Place that URL as the only line in the './assets/videos/usage-link.url' file.

## Usage Video


https://user-images.githubusercontent.com/90280725/146663952-2afd1af4-d2d3-4db8-967c-9dc75197e7d2.mp4


## Credits

Thanks UCF coding Bootcamp for all the support and encouragement recieved.



## License

[Full Disclosure](./assets/license-docs/full-disclosure/gpl-v3.md)



## Features

As mentioned in the "Description" section, the readme-generator can be executed using a pre-existing parameters file.  The application always persists a readme-params.json file in the 'dist' directory.  That file can be archived and reused in the optional '-c jsonFilePathname'.  This feature can provide a means of templating the readme generation process.



## Contributing

Contributing is encouraged. Send a pull request, along with an email explaining your pull request. Please include the title and number of the pull request in the email contents. I will review and comment on any and all contributions. Thanks!

[Contributor Covenant](./assets/markdown/contributing.md)



## Tests

Working on some unit testing automation using Jest.  Not quite there yet.



## Questions

Any questions, please contact Mark Dale.

My email address is: msdaledad@gmail.com
My github profile is https://github.com/msdale
The pertinent github repository is https://github.com/msdale/readme-generator



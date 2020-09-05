// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description 

${data.Description}

## Badges

![](https://img.shields.io/static/v1?label=license&message=${data.License}&color=brightgreen?style=plastic&logo=appveyor)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributing)
* [License](#license)


## Installation

${data.Installation}


## Usage 

${data.Usage} 


## License

This project is licensed under the [${data.License}](https://choosealicense.com/licenses/${data.License}) license.


## Contributing

${data.Contribution} 


## Tests

Run the following commmands to run a test:

${data.Test} 

## Questions

For any questions please reach out on [Github](https://github.com/${data.Github}/) or directly to my [email](${data.Email})!

`;
}

module.exports = generateMarkdown;

function badge(license) {
  var licenseBadge = ''
  switch(license) {


    case 'MIT': 
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    break;

    case "Apache":
    licenseBadge = "[![License](https://img.shields.io/badge/license-Apache2.0-green)";
    break;

    case 'Eclipse':
    licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
    break;
    
    case 'Mozilla': 
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    break;

    case 'GNU': 
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  };
  return licenseBadge
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${badge(data.license)}
  ----
  # ${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents (Optional)
  ----
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)

  ## Installation 

  ${data.installation} 

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## License

  ${data.license}

  ## Tests
   ${data.tests}

  ## How to Contact Developer


  Please see my [GitHub profile](https://github.com/${data.github})
  You can also email me questions at: ${data.email}



`;
}

module.exports = generateMarkdown;

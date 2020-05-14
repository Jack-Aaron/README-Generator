function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How You Can Contribute
${data.contribute}

`;
}

module.exports = generateMarkdown;

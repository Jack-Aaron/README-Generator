function generateMarkdown(data) {
  return `# ${data.title}
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## License
This Readme Generator is under the ${data.license} license.

## How You Can Contribute
${data.contribute}`;
}

module.exports = generateMarkdown;

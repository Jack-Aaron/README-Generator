const axios = require('axios');
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    "What is your Github user name?",
    "What is the project Repo URL?",
    "What is your project Title?",
    "What is your project Description?",
    "What are your project Installation Instructions?",
    "What is your project's intended Usage?",
    "What type of License would you like to assign?",
    "How can others Contribute?"
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "username"
            },
            {
                type: "input",
                message: questions[1],
                name: "url"
            },
            {
                type: "input",
                message: questions[2],
                name: "title"
            },
            {
                type: "input",
                message: questions[3],
                name: "description"
            },
            {
                type: "input",
                message: questions[4],
                name: "installation"
            },
            {
                type: "input",
                message: questions[5],
                name: "usage"
            },
            {
                type: "input",
                message: questions[6],
                name: "license"
            },
            {
                type: "input",
                message: questions[7],
                name: "contribute"
            }

        ]).then(function (data) {
            
            axios.get(`/user?ID=${data.username}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

            // var fileName = 'README.md';

            // fs.writeFile(fileName, generateMarkdown(data), function (err) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //         console.log("Success!");
            //     }
            // });
        })
}

init();

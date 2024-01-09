const inquirer = require ('inquirer');
//const { init } = require ('./lib/shapes')

const question = [
    {
        type: 'input',
        message: 'Enter the three characters to be placed on the logo.',
        name: 'text',
    },

    {
        type: 'input',
        message: 'Choose a colour for the text using the keyword or the hexadecimal value.',
        name: 'textColour',
    },

    {
        type: 'list',
        message: 'Which shape?',
        name: 'shapeChoice',
        choices: ['Rectangle', 'Circle', 'Triangle'],
    },

    {
        type: 'input',
        message: 'Choose a colour for the shape using the keyword or the hexadecimal value',
        name: 'shapeColour',
    },
];

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            
        })
}
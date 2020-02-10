# roster-generator

## Table of contents

- [Overview](#overview)
- [Instruction](#instruction)
- [User Input Criterion](#user-input-criterion)
- [Technologies](#technologies)
- [CSS Frameworks](#css-frameworks)
- [Node.js Modules](#node.js-modules)


## Overview
A command-line application that prompts the user for information about the team manager, members, then generates a roster in HTML.

## Instruction
1. clone the repo to your local hard drive
1. navigate the the repo directory
1. open terminal and install the node module dependencies:

    `npm i`

1. once dependencies are downloaded, enter the following to run the app:

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/01.png?raw=true" alt="01" width="400">

1. the app starts by asking employee's name

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/02.png?raw=true" alt="02" width="400">

1. the app prompts user for that employee's ID

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/03.png?raw=true" alt="03" width="500">

1. the app prompts user for that employee's email address

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/04.png?raw=true" alt="04" width="500">

1. the app prompts user for that employee's role

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/05.png?raw=true" alt="05" width="500">

1. depending on that employee's role, the app prompts user for role specific information

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/06.png?raw=true" alt="06" width="500">

1. the app then prompts user whether there are more employees to add, if "Yes", the app will repeat steps 5 - 9

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/07.png?raw=true" alt="07" width="500">

1. the app then prompts user for the name of your team

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/08.png?raw=true" alt="08" width="500">

1. the app then prompts user for the name of the HTML file

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/09.png?raw=true" alt="09" width="500">

1. finally, the app prompts whether use wishes to open that html file now

    <img src="https://github.com/phaggio/roster-generator/blob/master/images/10.png?raw=true" alt="10" width="500">


## User Input Criterion
User's inputs are tested to ensure they meet the following requirement:
* employee name cannot be empty and cannot contain numbers
* employee ID cannot be empty, cannot contain any special characters, and it has to be one continuous string (no space between)
* employee's email will need to be in a valid e-mail format (sample@sample.com)
* team's name cannot be empty

You may also input the command `npm run test` in the terminal to see the tests

## Technologies
* HTML
* Javascript

## CSS Frameworks
* Bootstrap

## Node.js Modules
* inquirer
* jest
* open
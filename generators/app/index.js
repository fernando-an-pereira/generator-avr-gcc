'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const filesToCopy = [
  'src/CMakeLists.txt.tmpl',
  'src/main.c.tmpl',
]

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the rad ${chalk.red('generator-avr-gcc')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'mcu',
        message: 'Which microcontroller will be used?',
        default: 'atmega328p',
      },
      {
        type: 'input',
        name: 'fCpu',
        message: 'What is the clock frequency?',
        default: '16000000',
      },
      {
        type: 'input',
        name: 'programmerType',
        message: 'What is the programmer type used?',
        default: 'arduino',
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    for (const file of filesToCopy) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file.slice(0, -5)),
        this.props,
      );
    }
  }

  install() {
    
  }
};

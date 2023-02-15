'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-avr-gcc:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ 
        projectName: 'test',
        mcu: 'atmega8',
        programmerType: 'usbasp',
       });
  });

  it('creates files', () => {
    assert.file(['CMakeList.txt']);
  });
});

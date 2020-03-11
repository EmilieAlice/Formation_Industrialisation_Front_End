const { hello } = require('./hello');
const { expect } = require('chai');

// should return Hello Rommain !!!
//console.log(hello('Romain'));

describe('hello function', () => {
  it('should return Hello Romain !!!', () => {
    // style TDD -> assert
    // assert.equals(hello('Romain'), 'Hello Romain !!!');

    // style BDD -> expect
    expect(hello('Romain')).to.equal('Hello Romain !!!');

    // style BDD -> should
    // hello('Romain').should.be.equal('Hello Romain !!!');
  });
});

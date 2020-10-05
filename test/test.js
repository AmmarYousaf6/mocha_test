var assert = require('assert');
/* Basic Test cases to get started
describe('file to be tested', () => {
  context('function to be tested',  () => {
    it('should do something', function () {
      assert.equal(1, 1);
    });
    it('should do something else', ()=>{
      assert.deepEqual({'name' : 'steve'}, {'name' : 'steve' });
    });
    it('this is pending test');
  });
});
/* ********** */
/* Before or After */
describe('file to be tested', () => {
  context('function to be tested',  () => {
    // before(() => {
    //   console.log('=====before')
    // });
    //
    // after(() => {
    //   console.log('=====after')
    // });
    //
    // beforeEach(() => {
    //   console.log('=====beforeEach')
    // });
    //
    //
    // afterEach(() => {
    //   console.log('=====afterEach')
    // });

    it('should do something', function () {
      assert.equal(1, 1);
    });
    it('should do something else', ()=>{
      assert.deepEqual({'name' : 'steve'}, {'name' : 'steve' });
    });
    it('this is pending test');
  });

  context('another function', () => {
    it('okay')
  });
});
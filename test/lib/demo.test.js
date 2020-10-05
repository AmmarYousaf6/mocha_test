const chai = require('chai');
const expect = chai.expect;

var demo = require('./demo');

describe('demo', ()=>{
    context('add', ()=>{
        it('should add two numbers', ()=> {
           expect(demo.add(1,2)).to.equal(3);
        });
    });
    context('callback added', () => {
       it('should test the callback', (done) => {
           demo.addCallback(1,2,(err, result) => {
               expect(err).to.not.exist;
               expect(result).to.equal(3);
               done();
           });
       });
    });

    context('test promise', () => {
       it('should add with the promise', (done) => {
         demo.addPromise(1,6).then((result) => {
            expect(result).to.equal(7);
            done();
         }).catch((ex) => {
             done(ex)
         });
       });
       it('should test promise with async wait', async () =>{
          let result = await demo.addPromise(1,2);
          expect(result).to.equal(3);
       });
    });
})
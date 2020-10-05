const chai = require('chai');
const expect = chai.expect;

let user = require('./user');

describe('user', () => {
    context('getFullAddress', ()=>{
        it('should return the full address',()=>{
            let result = user.getFullAddress({
                street : '100 king',
                city : 'ISB',
                province : 'fedral',
                postal : '111'
            });
            expect(result).to.equal('100 king ISB, fedral, 111');
        });

        it('should return the dynamic full address',()=>{
            let result = user.getFullAddressDynamic({
                street : '200 king',
                city : 'ISB',
                province : 'fedral',
                postal : '111'
            });
            expect(result).to.equal('200 king, ISB, fedral, 111');
        });

        it('should return an error',()=>{
            let result = user.getFullAddressDynamicError({
                street : '200 king', //remove this line to make it a success
                city : 'ISB',
                province : 'fedral',
                postal : '111'
            });
            expect(result).to.equal('Invalid user');
        });
    });
})
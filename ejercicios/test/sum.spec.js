var sum = require('../src/sum.js');
var expect = require('expect.js');

describe('sum', function() {
    it('should sum two positive numbers', function() {
        expect(sum(2, 3)).to.be(5);
        expect(sum(0, 2)).to.be(2);
        expect(sum(3, 0)).to.be(3);
        expect(sum(0, 0)).to.be(0);
    });

    it('should sum two positive numbers', function() {
        expect(sum(-2, 2)).to.be(0);
        expect(sum(-2, -2)).to.be(-4);
    })

    it('should be a function', function() {
        expect(typeof sum).to.be('function');
    })

    it('should throw an expection with non numeric param', function() {
        expect(sum).withArgs('a', 3).to.throwException();
    });

});
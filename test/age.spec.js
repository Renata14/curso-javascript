var age = require('../src/age.js');
var expect = require('expect.js');

describe('age', function() {
    describe('getAgeType', function() {
        it('should detect adults as people with ages greater or equal than 18', function() {
            expect(age.getAgeType(22)).to.be('man');
            expect(age.getAgeType(1)).not.to.be('man');
            expect(age.getAgeType(18)).to.be('man');
        });

        it('should detect boys as people with ages less than 18', function() {
            expect(age.getAgeType(22)).not.to.be('boy');
            expect(age.getAgeType(1)).to.be('boy');
            expect(age.getAgeType(18)).not.to.be('boy');
        });
    });

    describe('isBoy', function() {
        it('should show true if the age is less than 18', function() {
            expect(age.isBoy(17)).to.be(true);
            expect(age.isBoy(12)).to.be(true);
        });
        it('should show false if the age is less than 18', function() {
            expect(age.isBoy(22)).to.be(false);
            expect(age.isBoy(18)).to.be(false);
        });
    });

    describe('isAdult', function() {
        it('should show true if the age is greater or equal than 18', function() {
            expect(age.isAdult(22)).to.be(true);
            expect(age.isAdult(18)).to.be(true);
        });
        it('should show false if the age is greater or equal than 18', function() {
            expect(age.isAdult(13)).to.be(false);
            expect(age.isAdult(16)).to.be(false);
        });
    });
});
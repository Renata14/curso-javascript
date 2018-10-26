var expect = require('expect.js');
describe('javascript', function() {
    describe('typeof', function() {
        it('should return the type of expression', function() {
            expect(typeof 5).to.be('number');
            expect(5).to.be.a('number'); //.a es lo mismo que typeof
            expect(typeof true).to.be('boolean');
            expect(typeof 'a').to.be('string');
            expect(typeof
                function() {}).to.be('function');

        });
    });

});






// function isNumber(arg) {
//     if (typeof arg === 'number') {
//         return true;
//     } else {
//         return false
//     }
// };

// console.log(isNumber(4));
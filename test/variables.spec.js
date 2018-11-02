var expect = require('expect.js');
//redefinir una var copiada por valor no modifica el contenido de la variable 
describe('copy by value', function() {
    it('los tipos escalares se copian por valor y no por referencia', function() {
        var a = 2;
        var b = a;
        a = 3;

        expect(a).to.be(3);
        expect(b).to.be(2);
    });
});

describe('copy by reference', function() {
    it('los tipos complejos se copian por referencia', function() {
        var a = { x: 1 };
        var b = a;

        expect(b).to.be(a);
    });

    it('obj iguales no tienen por que ser el mismo obj', function() {
        var a = { x: 1 }; // Referencia : 0xf3
        var b = { x: 1 }; // Referencia : 0xd4
        var c = a; // Refrencia : 0xf3

        expect(b).not.to.be(a); //Al comparar estrictamente(===) valores compuesto se compara su referencia
        expect(c).to.be(a);
    });
});
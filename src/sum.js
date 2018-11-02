function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {

        throw new Error('non numeric param');

    } else {

        return x + y;
    }

}
module.exports = sum;
var min_adult_age = 18;

var isBoy = function(age) {
    if (age < min_adult_age) {
        return true;
    } else {
        return false;
    }
}

var isAdult = function(age) {
    if (age >= min_adult_age) {
        return true;
    } else {
        return false;
    }
}

var getAgeType = function(age) {
    if (isBoy(age)) {
        return 'boy';
    } else {
        return 'man';
    }

};

module.exports = {
    getAgeType,
    isBoy,
    isAdult
}
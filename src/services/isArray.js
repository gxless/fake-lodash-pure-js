const isArray = (input) => {
    if (input && Array.isArray(input)) {
        return true;
    } else {
        return false;
    }
};

module.exports = isArray;

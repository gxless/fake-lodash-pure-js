const head = (array) => {
    if (array && Array.isArray(array)) {
        return array[0];
    } else {
        return undefined;
    }
};

module.exports = head;

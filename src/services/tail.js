const tail = (array) => {
    if (array && Array.isArray(array)) {
        return array[array.length - 1];
    } else {
        return undefined;
    }
}

module.exports = tail;

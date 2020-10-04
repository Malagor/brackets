module.exports = function check(str, bracketsConfig) {
    let stackBrackets = [];

     const isOpenBrackets = (currentBracket) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (currentBracket === bracketsConfig[i][0]) {
                if (bracketsConfig[i][0] === bracketsConfig[i][1]) return -1;

                return bracketsConfig[i][1];
            }
        }
        return false;
    };

    const getLastElement = (array) => {
        if (Array.isArray(array))
            return array[array.length - 1];
        else
            throw new Error('Передан не массив');
    };

    if ((str.length % 2)) return false;

    str.split('').forEach(item => {

        const closeBracket = isOpenBrackets(item);

        if (closeBracket === false) {

            return item === getLastElement(stackBrackets)
                ? stackBrackets.pop()
                : false;

        } else if (closeBracket === -1) {

            item === getLastElement(stackBrackets)
                ? stackBrackets.pop()
                : stackBrackets.push(item);

        } else {
            stackBrackets.push(closeBracket);
        }
    });

    return !stackBrackets.length;
};


module.exports = function check(str, bracketsConfig) {
    let stackBrackets = [];

    function isOpenBrackets(bracket) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracket === bracketsConfig[i][0]) {
                if (bracketsConfig[i][0] === bracketsConfig[i][1]) return -1;

                return bracketsConfig[i][1];
            }
        }
        return false;
    }

    console.log(str);

    if ((str.length % 2)) return false;

    str.split('').forEach(item => {
        const closeBracket = isOpenBrackets(item);

        if (closeBracket === false) {
            if (stackBrackets[stackBrackets.length - 1] !== item) {
                return false;
            }
            stackBrackets.pop();

        } else if (closeBracket === -1) {

            if (stackBrackets[stackBrackets.length - 1] === item) {
                stackBrackets.pop();
            } else {
                stackBrackets.push(item);
            }
        } else {
            stackBrackets.push(closeBracket);
        }

        console.log('stackBrackets', stackBrackets);
    });

    return !stackBrackets.length;
};


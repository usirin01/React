//Create four functions
const addition = (pNumber1,pNumber2) => {
    return pNumber1 + pNumber2
};
const subtraction = (pNumber1,pNumber2) => {
    return pNumber1 - pNumber2
};

const multiple = (pNumber1,pNumber2) => {
    return pNumber1 * pNumber2
};

const divide = (pNumber1,pNumber2) => {
    return pNumber1 / pNumber2
};

//Export these functions
module.exports = {
    addition, subtraction, multiple, divide
}
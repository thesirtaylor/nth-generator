let GeneratorFunction = Object.getPrototypeOf(function* () {});
/**
 * Recieves an array of indices in a generator function starting from 1, and returns an array of yield values
 * @method  Call method on the generator function call, not on the reference to it, to have best behavior. ***for example, generatorFunction().nths([nth-1,nth-2], lenght);
 * @param {array} values - An array of yield values to be called, starts from index 1
 * @param {number} length - The number of yield values available in the generator function
 * @returns {array} returns an array of the values of the nths provided
 * @yields {array}
 */
GeneratorFunction.prototype.nths = function (values, length) {
  if (Array.isArray(values)) {
    let n = 1;
    let arr = [];
    while (n <= length) {
      let a = this.next().value;
      values.forEach((element) => {
        if (n === element) {
          arr.push(a);
        }
      });
      n++;
    }
    return arr;
  } else {
    return new Error(
      "Function takes an array of Yields as first argument, index starts from 1.\n *** for example \n \t generator.nths([1,4,6], 9) yields the 1st, 4th and 6th values of a generator function which has 9 possible yields\n"
    );
  }
};

/**
 * Recieves a single index of a generator function and returns a single yield value
 * @method  Call method on the generator function call, not on the reference to it, to have best behavior. ***for example, generatorFunction().nth(nth);
 * @param {number} value - The index of yield value to return, starts from index 1 fails if an aaray is provided.
 * @returns  returns the values of the nth provided
 *
 */
GeneratorFunction.prototype.nth = function (value) {
  if (!Array.isArray(value)) {
       while (--values > 0) {
         this.next();
       }
       return this.next().value;
  } else {
    return new Error(
      "Function takes a single value as first arguement, index starts from 1.\n *** for example \n \t generator.nth(1, 9) yields the 1st value of a generator function which has 9 possible yields\n"
    );
  }
};
module.exports = GeneratorFunction;

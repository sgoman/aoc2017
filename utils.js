/**
 * Creates combinations of the input elements and checks acceptCombo to keep or discard a combination
 * and diveDeeper to decide if there could be acceptable combinations by continuing a depth search.
 *
 * Taken from my aoc2015 day 17
 *
 * Examples:
 *      const pairs = tmp => tmp.length == 2
 *   	const tooShort = tmp => tmp.length < 2
 *   	const onlyEven = tmp => tmp.every(val => val % 2 == 0)
 *   	const everything = tmp => true
 *
 *   	console.log(combineConditionally(['a', 'b', 'c'], pairs, tooShort))
 *      // prints [ [ 'a', 'b' ], [ 'a', 'c' ], [ 'b', 'c' ] ]
 *
 *   	console.log(combineConditionally([1, 2, 3, 4, 5, 6], onlyEven, everything))
 *      // prints [ [ 2 ], [ 2, 4 ], [ 2, 4, 6 ], [ 2, 6 ], [ 4 ], [ 4, 6 ], [ 6 ] ]
 *
 *   	console.log(combineConditionally(['a', 'b', 'c'], everything, everything))
 *   	// prints [ [ 'a' ], [ 'a', 'b' ], [ 'a', 'b', 'c' ], [ 'a', 'c' ], [ 'b' ], [ 'b', 'c' ], [ 'c' ] ]
 *
 * @param array arr the array to source combinations from
 * @param function acceptCombo takes the current combination, returns boolean to keep or discard
 * @param function diveDeeper takes the current combination, returns boolean to keep adding or stopping
 * @returns array of arrays of possible combinations
 */ 
const combineConditionally = (arr, acceptCombo, diveDeeper) => {
	const l = arr.length
	const combiner = (part, start) => {
		let result = [], p
		for (let i = start; i < l; i++) {
			p = part.slice(0)
			p.push(arr[i])
			if (acceptCombo(p)) result.push(p)
			if (diveDeeper(p)) result = result.concat(combiner(p, i + 1))
		}
		return result
	}
	return combiner([], 0)
}

const permutator = (inputArr) => {
    const result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

const arraySum = arr => arr.reduce((acc, cur) => acc + cur, 0)

const arrayProduct = arr => arr.reduce((acc, cur) => acc * cur, 1)

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index)

/**
 * returns a copy of an array with elements in a radomized order
 *
 * Taken from my aoc2015 day 19.
 *
 * @param array arr The array to shuffle
 * @returns array
 */
const shuffledArray = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
}

/**
 * Takes an array and returns an object with each element as a property that contains the number of occurencies
 *
 * Example:
 *   arrayFrequency([1, 2, 1, 1]) returns {1: 3, 2: 1}
 *   arrayFrequency('hello'.split('')) returns {'h': 1, 'e': 1, 'l': 2, 'o': 1}
 *
 * Based on my aoc2016 day 4 code.
 *
 * @param array arr the list of elements to count on
 * @returns object
 */
const arrayFrequency = elements => elements.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }
    return acc
}, {})

module.exports = { combineConditionally, permutator, arraySum, arrayProduct, arrayHasIndex, shuffledArray, arrayFrequency }

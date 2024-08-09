'use strict'

const solve = (input, offset) => input.split('').reduce((acc, cur, i, arr) => acc + (cur == arr[(i + offset) % arr.length] ? ~~cur : 0), 0)

const part1 = input => solve(input, 1)

const part2 = input => solve(input, input.length / 2)

module.exports = { part1, part2 }

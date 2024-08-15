'use strict'

const parseInput = input => input.split('\n').map(l => l.split(' '))

const solve = input => input.reduce((total, phrase) => total + ((new Set(phrase)).size == phrase.length), 0)

const part1 = input => solve(parseInput(input))

const part2 = input => solve(parseInput(input).map(phrase => phrase.map(word => word.split('').sort().join(''))))

module.exports = { part1, part2 }

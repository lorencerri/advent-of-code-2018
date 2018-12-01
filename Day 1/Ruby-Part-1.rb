# Day 1 - Chronal Calibration [Part 1]
# https://adventofcode.com
#
# Declare Input Here:

input = '+1, +1, -2, -5'.split(', ')

puts input.reduce(0) { |a, b| a + Integer(b) }

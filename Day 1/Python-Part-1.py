from functools import reduce

# Day 1 - Chronal Calibration [Part 1]
# https://adventofcode.com
#
# Declare Input Here:
input = '+1, +5, -2'.split(', ')

# Calculate & Print
print(reduce(lambda a, b: int(a) + int(b), input))

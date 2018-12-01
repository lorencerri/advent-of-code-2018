from functools import reduce

# Day 1 - Chronal Calibration [Part 2]
# https://adventofcode.com
#
# Declare Input Here:
input = '+7, +7, -2, -7, -4'.split(', ')

# Variables
freq = 0
list = []
found = False

# Calc Loop
while not found:
  for i in range(0, len(input)):
    freq += int(input[i])
    if freq in list:
      print(freq)
      found = True
      break
    else:
      list.append(freq)

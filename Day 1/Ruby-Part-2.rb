# Day 1 - Chronal Calibration [Part 1]
# https://adventofcode.com
#
# Declare Input Here:
input = '+7, +7, -2, -7, -4'.split(', ')

# Variables
freq = 0
list = []
found = false

# Calc Loop
while !found do
  input.each do | i |
    freq += Integer(i)
    if list.include? freq
      puts freq
      found = true
      break
    else
      list.push(freq)
    end
  end
end

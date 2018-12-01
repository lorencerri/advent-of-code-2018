// Day 1 - Chronal Calibration [Part 1]
// https://adventofcode.com

fn main() {
  
  // Input:
  let input = "-1, +2, -3, +1, -4".split(", ");

  let mut freq = 0;

  // Iterate
  for (_, element) in input.enumerate() {
    freq += element.parse().unwrap();
  } 

  // Print Frequency
  println!("{}", freq);
  
}

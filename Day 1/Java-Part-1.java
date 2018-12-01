// Day 1 - Chronal Calibration [Part 1]
// https://adventofcode.com

class Main {
  public static void main(String[] args) {
    
    // Input
    String[] input = "-1, +2, -3, +1, -4".split(", ");

    int freq = 0;

    // Iterate
    for (String i : input) freq += Integer.parseInt(i);

    // Print Frequency
    System.out.println(freq);

  }
}

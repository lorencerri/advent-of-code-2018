// Log Time
console.time('Timer');

// Variables
let input = 'INPUT_GOES_HERE';
let polymers = '*abcdefghijklmnopqrstuvwxyz';
let values = [];
let str;

// Iterate through every character
for (var x = 0; x < polymers.length; x++) {

    // Replace all of a certain character
    str = input.replace(new RegExp(`[${polymers[x]}]`, 'gi'), '');
    
    // Reset remaining variable
    remaining = true

    // Loop until no pairs remaining
    while (remaining) {
        remaining = false;

        // Iterate until a pair is found
        for (var i = 0; i < str.length - 1; i++) {
            if (Math.abs(str.charCodeAt(i - 1) - str.charCodeAt(i)) == 32) {
              
                // Update String
                str = str.substr(0, i - 1) + str.substr(i + 1);
                remaining = true;
                break;

            }
        }
    }
    
    // Update Results
    values.push(str.length);

}

// Logging
console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));
console.timeEnd('Timer');

// Log Time
console.time('Timer');

// Variables
let input = 'INPUT_GOES_HERE';
let polymers = '*abcdefghijklmnopqrstuvwxyz';
let values = [];
let temp;

for (var x = 0; x < polymers.length; x++) {

    // Replace all of a certain character
    temp = input.replace(new RegExp(`[${polymers[x]}]`, 'gi'), '');
    
    // Reset Remaining Variable
    remaining = true;

    // Loop until no pairs remaining
    while (remaining) {
        remaining = false;

        // Iterate until a pair is found
        for (var i = 0; i < temp.length - 1; i++) {
            if (Math.abs(temp.charCodeAt(i - 1) - temp.charCodeAt(i)) == 32) {
              
                // Update String
                temp = temp.substr(0, i - 1) + temp.substr(i + 1);
                remaining = true;
                break;

            }
        }
    }
    
    // Update Results
    values.push(temp.length);

}

// Logging
console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));
console.timeEnd('Timer');

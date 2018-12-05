// Log Time
console.time('Timer');

// Variables
let input = 'INPUT_GOES_HERE';
let values = [], str, len, l, polymers = ' abcdefghijklmnopqrstuvwxyz';
let regex = new RegExp('(Aa|Bb|Cc|Dd|Ee|Ff|Gg|Hh|Ii|Jj|Kk|Ll|Mm|Nn|Oo|Pp|Qq|Rr|Ss|Tt|Uu|Vv|Ww|Xx|Yy|Zz|aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ)', 'g');

// Iterate through every character
for (var x = 0; x < polymers.length; x++) {

    // Replace all of a certain character
    str = input.replace(new RegExp(polymers[x], 'gi'), '');

    // Loop until no pairs remaining
    do {
        len = str.length;
        str = str.replace(regex, '');
    } while (len !== str.length);

    // Update Results
    values.push(str.length);

}

// Logging
console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));
console.timeEnd('Timer'); // Averages 3889ms

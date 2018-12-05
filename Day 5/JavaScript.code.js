let input = 'INPUT_GOES_HERE';
let values = [], str, len, polymers = ' abcdefghijklmnopqrstuvwxyz';
let regex = new RegExp('(Aa|Bb|Cc|Dd|Ee|Ff|Gg|Hh|Ii|Jj|Kk|Ll|Mm|Nn|Oo|Pp|Qq|Rr|Ss|Tt|Uu|Vv|Ww|Xx|Yy|Zz|aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ)', 'g');

for (var x = 0; x < polymers.length; x++) {
    str = input.replace(new RegExp(polymers[x], 'gi'), '');
    do {
        len = str.length;
        str = str.replace(regex, '');
    } while (len !== str.length);
    values.push(str.length);
}

console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));

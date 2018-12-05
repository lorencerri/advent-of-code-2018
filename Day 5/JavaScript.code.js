let polymers = '*abcdefghijklmnopqrstuvwxyz';
let values = [];
let str;

for (var x = 0; x < polymers.length; x++) {
    str = input.replace(new RegExp(`[${polymers[x]}]`, 'gi'), '');
    remaining = true
    while (remaining) {
        remaining = false;
        for (var i = 0; i < str.length - 1; i++) {
            if (Math.abs(str.charCodeAt(i - 1) - str.charCodeAt(i)) == 32) {
                str = str.substr(0, i - 1) + str.substr(i + 1);
                remaining = true;
            }
        }
    }
    values.push(str.length);
}

console.log('Puzzle #1:', values.shift());
console.log('Puzzle #2:', Math.min(...values));

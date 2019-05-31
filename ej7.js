const arr = [1, 4, 3, 2];
const n = 4;

var final = [];

for (var i = n; i > 0; i--) {
    final.push(arr[i-1]);
}

console.log(final.join(' '));

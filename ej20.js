// Day 20: Sorting

function bubbleSort(arr) {
    let len = arr.length;
    let numberOfSwaps = 0

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                numberOfSwaps++;
            }
        }
    }
    return {
        numberOfSwaps: numberOfSwaps,
        firstElement: arr[0],
        lastElement: arr[arr.length -1]
    };
}

let n = parseInt('3\n3 2 1');
let a = '3 2 1'.split(' ');
a = a.map(Number);

let result = bubbleSort(a);
console.log('Array is sorted in ' + result.numberOfSwaps + ' swaps.');
console.log('First Element: ' + result.firstElement);
console.log('Last Element: ' + result.lastElement);

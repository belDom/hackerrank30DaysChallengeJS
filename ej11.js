// 2D arrays

function main() {
    let arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]

    var maxTotal;

    for (var i = 0; i < (arr.length - 2); i++){
        for(var y = 0; y < (arr.length - 2); y++){  
            
            var total = parseInt(arr[i][y]) + parseInt(arr[i][y+1]) + parseInt(arr[i][y+2]) + parseInt(arr[i+1][y+1]) + parseInt(arr[i+2][y]) + parseInt(arr[i+2][y+1]) + parseInt(arr[i+2][y+2]);
            
            if(!maxTotal && maxTotal != 0){
                maxTotal = total;    
            }
            
            if(total > maxTotal){
                maxTotal = total;
            }
        }
    }
    
    console.log(maxTotal);
}

main();

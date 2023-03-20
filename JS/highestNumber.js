var myArray = [2, 86, 143, 3, 11, 90];
function highestNumber() {
    let highest;
    for (let i = 0; i < myArray.length; i++) {
        let x = myArray[i];
        if (highest === undefined){
            highest = x;
        }
    if (x > highest){
        highest = x;
    }
}
return highest;
}



module.exports = highestNumber;
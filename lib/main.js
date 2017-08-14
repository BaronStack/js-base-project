function main(input){
    let str = '';
    if (input === 99) {
        // let count = 99;
        while(input >= 2) {
            str += input + ' bottles of beer on the wall, ' + input + ' bottles of beer.\n' +
                'Take one down and pass it around, ' + (((input - 1) === 1)? input - 1 + ' bottle' : input -1 + ' bottles') + ' of beer on the wall.\n';
            input --;
        }
    }
    if (input === 1) {
        str += input + ' bottle of beer on the wall, ' + input +  ' bottle of beer.\n'
                + 'Take one down and pass it around, no more bottles of beer on the wall.\n';
        input --;
    }
    if (input === 0) {
            str += 'No more bottles of beer on the wall, no more bottles of beer.\n' +
                'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }

    return str;
}

module.exports = main;

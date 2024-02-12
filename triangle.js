function checkTriangle(side1, side2, side3) {
    //write your code here
    //don't forget to write return
    if (typeof side1 !== 'number') {
        return 'Invalid Input';
    }
    else if (typeof side2 !== 'number') {
        return 'Invalid Input';
    }
    else if (typeof side3 !== 'number') {
        return 'Invalid input';
    }
    else {
        if (side1 === side2 && side1 === side3) {
            return 'Its not Okay';
        }
        else if (side1 === side2) {
            return 'Its Okay';
        }
        else if (side1 === side3) {
            return 'its Okay';
        }
        else if (side2 = side3) {
            return 'Its Okay'
        }
    }

}
const tri = checkTriangle(8, 8, 'ja');
console.log(tri);
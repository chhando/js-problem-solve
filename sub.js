function subtraction(num1, num2) {
        //write your code here
        //don't forget to write return
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Invalid Input';
        }
        else if (num1 < 0 || num2 < 0) {
            return 'Invalid Input';
        }
        else if (num1===0 && num2 === 0) {
            return 'Can not subtraction two Zero';
        }
        if (num1 > num2) {
            return num1 - num2;
        }
        else {
            return num2 - num1;
        }
    }




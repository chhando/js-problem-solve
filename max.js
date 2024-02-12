function findMax(arr){
    //write your code here
    //don't forget to write return
    if(!Array.isArray(arr)){
        return 'Invalid Array';
    }
    let number = arr[0];
    for (const array of arr){
        if(number < array){
            number = array;
        }
    }
    return number;
    }
    const num = findMax([55,10,95]);
    console.log(num);
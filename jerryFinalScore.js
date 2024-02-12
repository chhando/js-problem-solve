function finalScore(scores) {
    //Write your code here
    //Don't forget to return
    if(!Array.isArray(scores)){
        return 'Invalid Array';
    }
    let sum = 0;
    for (const score of scores) {
        sum = sum + score;
    }
    return sum;
}

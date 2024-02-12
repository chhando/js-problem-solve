function tallestFriend(height) {
    //Write your code here
    //Don't forget to return
    if(!Array.isArray(height)){
        return "it's a invalid array";
    }
    const srt = height.sort(function (a, b) { return a - b });
    const sorted = srt[srt.length - 1];

    return sorted;
}
const result = tallestFriend([157, 134, 188]);
console.log(result);
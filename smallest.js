function findingSmallest(numbers) {
    //Write your code here
    //Don't forget to return
    if (!Array.isArray(numbers)) {
        return "it's a invalid array";
    }
    const srt = numbers.sort(function (a, b) { return a - b });
    const sorted = srt[0];

    return sorted;
}
const result = findingSmallest([10, 33, 5, 99, 6]);
console.log(result);
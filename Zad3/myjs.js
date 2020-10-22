function findSum(numbers, target) {

    var minNums = Infinity; //for simple log

    numbers = numbers.sort((a, b) => b - a);

    function branch(count, target, index) {

        if (index >= numbers.length)
            return;

        for (var i = Math.floor(target / numbers[index]); i >= 0; i--) {
            var newNums = count + i;
            var toSum = target - numbers[index] * i;
            if (toSum > 0 && newNums < minNums) { // if the amount left to target is > 0, go to new branch			             
                branch(newNums, toSum, index + 1);
            } else if (newNums < minNums) { // found smaller minNums				
                minNums = newNums;
            } else if (newNums >= minNums - 1) { // stop current branch			
                break;
            }
        }
    }
    branch(0, target, 0); //new branch
    console.log(minNums == Infinity ? -1 : minNums);
}


findSum([2, 5, 1, 15], 11);

findSum([2, 5, 1, 4, 6], 5);

findSum([2, 4, 5], 3);

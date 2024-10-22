const array = [1, 2, 3, 4, 22, "str", true, 0, 15, NaN, "string", 0, null, 6, 3];

function countNum(arr) { 
    let evenNum = 0
    let oddNum = 0
    let zeroNum = 0
    for (let i = 0; i < arr.length; i ++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zeroNum += 1;
            }else if (arr[i] % 2 === 0) {
                evenNum += 1;
            }else {
                oddNum += 1;
            }
        }
    }
   console.log(`В массиве ${evenNum} четных, ${oddNum} нечетных чисел и ${zeroNum} нулей.`);
};


countNum(array);
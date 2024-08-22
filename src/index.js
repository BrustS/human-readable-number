module.exports = function toReadable (number) {
    let result = ""
    let arrayUnit = ['', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let arrayDec = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let unicArray = ["ten" ,"eleven" ,"twelve" ,"thirteen" ,"fourteen","fifteen", "sixteen","seventeen","eighteen","nineteen"]
    if (number === 0) return 'zero'; else {
        let hung = parseInt(number / 100);
        let uniDec = number % 100;
        let dec = parseInt(number % 100 / 10);
        let unit = uniDec % 10;
        
        if (hung > 0) {
            result = result + arrayUnit[hung] + " hundred";
        }
        if (uniDec > 9 && uniDec < 20) {
            if(result !== "") {
                result = result +" "+ unicArray[uniDec - 10];
            } else result = unicArray[uniDec - 10];
        } else {
            if (dec > 0){
                if (result !== "") {
                    result = result + " " + arrayDec[dec];
                } else  result = arrayDec[dec];
        }
         if (unit > 0) {
            if (result !== "") {
                result = result + " " + arrayUnit[unit];
            } else  result = arrayUnit[unit];
         }
        } 
            return result;
    }
}

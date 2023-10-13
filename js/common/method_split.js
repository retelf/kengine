var class_method_split = function () {

    var Me; this.initialize = function () { Me = c_method_split; }

    this.exe = function (inputString, delimiter) {

        if (typeof inputString !== 'string' || typeof delimiter !== 'string') {
            throw new Error('Both arguments must be strings');
        }

        const result = [];
        let startIndex = 0;
        let delimiterIndex = inputString.indexOf(delimiter);

        while (delimiterIndex !== -1) {
            const part = inputString.substring(startIndex, delimiterIndex);
            result.push(part);

            startIndex = delimiterIndex + delimiter.length;
            delimiterIndex = inputString.indexOf(delimiter, startIndex);
        }

        // Add the remaining part of the string after the last delimiter
        const lastPart = inputString.substring(startIndex);
        result.push(lastPart);

        return result;
    }
}

var c_method_split = new class_method_split(); c_method_split.initialize();
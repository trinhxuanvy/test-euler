process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function sumMultiplesBigInt(n) {
    return n * (n + 1n) / 2n;
}

function main() {
    var t = parseInt(readLine());
    var result;
    if (t >= 1 && t <= Math.pow(10, 5)) {
        for (var a0 = 0; a0 < t; a0++) {
            var n = BigInt(parseInt(readLine())) - 1n;
            result = sumMultiplesBigInt(n / 3n) * 3n + sumMultiplesBigInt(n / 5n) * 5n - sumMultiplesBigInt(n / 15n) * 15n;
            console.log(result.toString());
        }
    }

}

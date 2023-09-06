function factorial(x){
    var result = 1;
    while(x){
        result *= x--;
    }
    return result;
}

function result() {
    var sum = 0;
    var n = Number(document.getElementById("n").value);
    var x = Number(document.getElementById("x").value);
    for(var i = 0; i <= n; i++) {
        sum += ((-1)**i)*(x**(2*i))/factorial(2*i);
    }
    document.writeln(sum);
}
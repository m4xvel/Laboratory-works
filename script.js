function addToArray() {
    var inputValue = document.getElementById('inputValue').value;
    var K = document.getElementById('K').value;
    var array = Array.from(inputValue);
    var otvet1 = 0;
    var otvet2 = 0;
    var otvet3 = 0;
    for(i = 0; i <= array.length; i++) {
        if(array[i] < K) {
            otvet1++;
        }
        if(array[i] == K) {
            otvet2++;
        }
        if(array[i] > K) {
            otvet3++;
        }
    }
    document.writeln("Меньше К: ", otvet1, "<br>" , "Равно К: ", otvet2, "<br>" , "Больше К: ", otvet3);
}

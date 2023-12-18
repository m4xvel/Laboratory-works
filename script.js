function browser() {
    const x = document.getElementById('x').value;
    let y;
    if (navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0") {
        y = x + 3;
        document.writeln(y);
    } else if (navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36") {
        y = (x / 3) + (x / 5);
        document.writeln(y);
    }
}
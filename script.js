function result() {
    var str = document.getElementById("text").value;
<<<<<<< HEAD
    regexp = /(\b(\d|\d\d|1\d\d|2[0,4]\d|25[0,5])(\.\d|\.\d\d|\.1\d\d|\.2[0,4]\d|\.25[0,5]){3}\b)|(\b(\d|\d\d|\d\d\d|\d\d\d\d|[A-F]|[A-F]\d|[A-F]\d\d|[A-F]\d\d\d|\d[A-F]|\d[A-F]\d|\d[A-F]\d\d|\d\d[A-F]|\d\d[A-F]\d|\d\d\d[A-F]|[A-F][A-F]|[A-F][A-F]\d|[A-F][A-F]\d\d|[A-F]\d[A-F]|[A-F]\d[A-F]\d|[A-F]\d\d[A-F]|\d[A-F][A-F]|\d[A-F][A-F]\d|\d[A-F]\d[A-F]|\d\d[A-F][A-F]|[A-F][A-F][A-F]\d|[A-F]\d[A-F][A-F]|[A-F][A-F]\d[A-F]|[A-F][A-F][A-F]\d|\d[A-F][A-F][A-F]|[A-F][A-F][A-F][A-F])(\:\d|\:\d\d|\:\d\d\d|\:\d\d\d\d|\:[A-F]|\:[A-F]\d|\:[A-F]\d\d|\:[A-F]\d\d\d|\:\d[A-F]|\:\d[A-F]\d|\:\d[A-F]\d\d|\:\d\d[A-F]|\:\d\d[A-F]\d|\:\d\d\d[A-F]|\:[A-F][A-F]|\:[A-F][A-F]\d|\:[A-F][A-F]\d\d|\:[A-F]\d[A-F]|\:[A-F]\d[A-F]\d|\:[A-F]\d\d[A-F]|\:\d[A-F][A-F]|\:\d[A-F][A-F]\d|\:\d[A-F]\d[A-F]|\:\d\d[A-F][A-F]|\:[A-F][A-F][A-F]\d|\:[A-F]\d[A-F][A-F]|\:[A-F][A-F]\d[A-F]|\:[A-F][A-F][A-F]\d|\:\d[A-F][A-F][A-F]|\:[A-F][A-F][A-F][A-F]){7}\b)/gi;
=======
    regexp = /(\b(\d|\d\d|1\d\d|2[0,4]\d|25[0,5])(\.\d|\.\d\d|\.1\d\d|\.2[0,4\d]|\.25[0.5]){3}\b)|(\b(\d|\d\d|\d\d\d|\d\d\d\d|[A-F]|[A-F]\d|[A-F]\d\d|[A-F]\d\d\d|\d[A-F]|\d[A-F]\d|\d[A-F]\d\d|\d\d[A-F]|\d\d[A-F]\d|\d\d\d[A-F]|[A-F][A-F]|[A-F][A-F]\d|[A-F][A-F]\d\d|[A-F]\d[A-F]|[A-F]\d[A-F]\d|[A-F]\d\d[A-F]|\d[A-F][A-F]|\d[A-F][A-F]\d|\d[A-F]\d[A-F]|\d\d[A-F][A-F]|[A-F][A-F][A-F]\d|[A-F]\d[A-F][A-F]|[A-F][A-F]\d[A-F]|[A-F][A-F][A-F]\d|\d[A-F][A-F][A-F]|[A-F][A-F][A-F][A-F])(\:\d|\:\d\d|\:\d\d\d|\:\d\d\d\d|\:[A-F]|\:[A-F]\d|\:[A-F]\d\d|\:[A-F]\d\d\d|\:\d[A-F]|\:\d[A-F]\d|\:\d[A-F]\d\d|\:\d\d[A-F]|\:\d\d[A-F]\d|\:\d\d\d[A-F]|\:[A-F][A-F]|\:[A-F][A-F]\d|\:[A-F][A-F]\d\d|\:[A-F]\d[A-F]|\:[A-F]\d[A-F]\d|\:[A-F]\d\d[A-F]|\:\d[A-F][A-F]|\:\d[A-F][A-F]\d|\:\d[A-F]\d[A-F]|\:\d\d[A-F][A-F]|\:[A-F][A-F][A-F]\d|\:[A-F]\d[A-F][A-F]|\:[A-F][A-F]\d[A-F]|\:[A-F][A-F][A-F]\d|\:\d[A-F][A-F][A-F]|\:[A-F][A-F][A-F][A-F]){7}\b)/gi;
>>>>>>> 2ab0e15fc8a086e24bca8e4897f6d933200e84d3
    document.writeln(str.match(regexp));
}
function openWindow() {
    okno = window.open('https://www.php.net/', "_blank", "popup=yes");
    setTimeout(closeWindow, 5000);
}

openWindow();
function closeWindow() {
    okno?.close();
}

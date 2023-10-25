function backgroundStyle() {
    var backgroundStyleButton = document.documentElement;
    var backgroundStyleInput = String(document.getElementById("backgroundButton").value);
    var currentBackgroundStyle = getComputedStyle(backgroundStyleButton).backgroundColor;
    backgroundStyleButton.style.backgroundColor = backgroundStyleInput;
    var newBackgroundStyle = getComputedStyle(backgroundStyleButton).backgroundColor;
    if(currentBackgroundStyle == newBackgroundStyle) {
        alert("Введите корректное название цвета");
    }
}

function textStyle() {
    var textStyleButton = document.body;
    var textStyleInput = String(document.getElementById("textButton").value);
    var currentTextStyle = getComputedStyle(textStyleButton).color;
    textStyleButton.style.color = textStyleInput;
    var newTextStyle = getComputedStyle(textStyleButton).color;
    if(currentTextStyle == newTextStyle) {
        alert("Введите корректное название цвета");
    }
}

function linkStyle() {
    var link = document.querySelector("a.link");
    var linkInput = String(document.getElementById("linkButton").value);
    link.setAttribute("href", linkInput);
    var cleanedLink = linkInput.replace(/https\:\/\//, "");
    link.textContent = cleanedLink;
}
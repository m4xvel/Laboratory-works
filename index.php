<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лабораторная работа №12</title>
</head>

<body>
    <form method="POST">
        <label>Введите текст содержащий ip-адрес:</label>
        <br><br>
        <input type="text" name="text">
        <br><br>
        <input type="submit" value="Отправить">
        <br><br>
        <label><b>&nbsp Пример текста для ipv4 и ipv6:</b></label>
        <ul>
            <li>Lorem ipsum 192.168.1.1 dolor sit amet.</li>
            <br>
            <li>Lorem ipsum 1050:00f:0Ac0:aa0:0fc5:f:300c:3 dolor sit amet.</li>
        </ul>
    </form>
    <?php
    if (isset($_POST['text'])) {
        $str = $_POST['text'];
        preg_match_all("/(\b(\d|\d\d|1\d\d|2[0-4]\d|2[0-5][0-5])(\.\d|\.\d\d|\.1\d\d|\.2[0-4]\d|\.2[0-5][0-5]){3}\b)|(\b(\d|\d\d|\d\d\d|\d\d\d\d|[A-F]|[A-F]\d|[A-F]\d\d|[A-F]\d\d\d|\d[A-F]|\d[A-F]\d|\d[A-F]\d\d|\d\d[A-F]|\d\d[A-F]\d|\d\d\d[A-F]|[A-F][A-F]|[A-F][A-F]\d|[A-F][A-F]\d\d|[A-F]\d[A-F]|[A-F]\d[A-F]\d|[A-F]\d\d[A-F]|\d[A-F][A-F]|\d[A-F][A-F]\d|\d[A-F]\d[A-F]|\d\d[A-F][A-F]|[A-F][A-F][A-F]\d|[A-F]\d[A-F][A-F]|[A-F][A-F]\d[A-F]|[A-F][A-F][A-F]\d|\d[A-F][A-F][A-F]|[A-F][A-F][A-F][A-F])(\:\d|\:\d\d|\:\d\d\d|\:\d\d\d\d|\:[A-F]|\:[A-F]\d|\:[A-F]\d\d|\:[A-F]\d\d\d|\:\d[A-F]|\:\d[A-F]\d|\:\d[A-F]\d\d|\:\d\d[A-F]|\:\d\d[A-F]\d|\:\d\d\d[A-F]|\:[A-F][A-F]|\:[A-F][A-F]\d|\:[A-F][A-F]\d\d|\:[A-F]\d[A-F]|\:[A-F]\d[A-F]\d|\:[A-F]\d\d[A-F]|\:\d[A-F][A-F]|\:\d[A-F][A-F]\d|\:\d[A-F]\d[A-F]|\:\d\d[A-F][A-F]|\:[A-F][A-F][A-F]\d|\:[A-F]\d[A-F][A-F]|\:[A-F][A-F]\d[A-F]|\:[A-F][A-F][A-F]\d|\:\d[A-F][A-F][A-F]|\:[A-F][A-F][A-F][A-F]){7}\b)/i", $str, $result, PREG_PATTERN_ORDER);
        foreach ($result as $arr) {
            $regexp = $arr[0];
            break;
        }
        $fd = fopen("result.php", 'w') or die("Ошибка");
        fwrite($fd, $regexp);
        echo file_get_contents("result.php");
        fclose($fd);
    }
    ?>
</body>

</html>
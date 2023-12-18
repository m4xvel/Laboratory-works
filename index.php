<?php

function factorial($x)
{
    $result = 1;
    while ($x) {
        $result *= $x;
        $x--;
    }
    return $result;
}

$sum = 0;
if (isset($_POST['n']) && isset($_POST['x'])) {
    $n = $_POST['n'];
    $x = $_POST['x'];
    for ($i = 0; $i <= $n; $i++) {
        $sum += ((-1) ** $i) * ($x ** (2 * $i)) / factorial(2 * $i);
    }
    echo "Ответ:" . $sum;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лабораторная работа №11</title>
</head>

<body>
    <form action="index.php" method="POST">
        <label>Введите значение 'n':</label>
        <input type="text" name="n" id="n">
        <br>
        <br>
        <label>Введите значение 'x':</label>
        <input type="text" name="x" id="x">
        <br>
        <br>
        <input type="submit" value="Отправить">
    </form>
</body>

</html>
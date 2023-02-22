<?php 
if (!empty($_POST))
{
$name = $_POST['named'];
$producted= $_POST['producted'];
$sn = $_POST['sn'];
$tel = $_POST['tel'];
$username= $_POST['username'];
$from = 'From: europe.juna-life.ru'; 
$to = 'reklama.aqualife@mail.ru'; 
$subject = '3аказ';
$body = "От: $username <br> Название: $name <br> Производитель:$producted <br> Серийный №: $sn <br> Телефон:$tel";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html\r\n";
$headers .= 'From: europe.juna-life.ru' . "\r\n" .
$headers .= 'Cc: ' .' <sha.egor@gmail.com>'.
#$headers = 'From: ' .' <'.$emailFrom.'>' . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'Cc: ' .' <some@mail.com>';
'Reply-To: europe.juna-life.ru' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $body , $headers);
echo"
<style>
span{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
}​
</style>
";
echo "<span style=\"text-align:center; font-size: 4vh \">Ваша заявка принята</span>";
};

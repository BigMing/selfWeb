<?php
/**
 * Created by PhpStorm.
 * User: sjm
 * Date: 2017/10/19
 * Time: 16:53
 */
require '../phpmailer/function.php';

$body = $_POST['body'];
$email = $_POST['email'];

$real_body = $body."<hr>".$email;

echo $real_body;

sendEmail('个人主页发来的邮件', $real_body);
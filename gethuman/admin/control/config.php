<?php

//error_reporting(0);
 
function OpenCon() {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = ""; 
    $db = "gethuman";
    ini_set('date.timezone', 'Asia/Kolkata');
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}
 
function CloseCon($conn) {
    $conn->close();
}

session_start();


define("BASE_URL", "http://elearning.vikas/gethuman/");
define('BASE_URL_ADMIN', 'admin/');
define("email", "info@gethuman.com");
define("brand_title", "gethuman");
include_once"functions.php";
$setting = dbAction("settings", $operation = 4, $form_data = "");
if ($setting->num_rows > 0) {
    $setting_row = $setting->fetch_assoc();
    $tiny_code = $setting_row['tiny_code'];
    define("tiny_code", $tiny_code);
    define("gr_sitekey", $setting_row['gr_sitekey']);
    define("gr_secretkey", $setting_row['gr_secretkey']);
}
?>


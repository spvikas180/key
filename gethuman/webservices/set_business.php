<?php

include_once"../admin/control/config.php";
include("../temp/site-settings.php");
if (!isset($_SESSION['userId'])) {
    echo "<script>window.location.href='login.php';</script>";
    die();
}
if ($site_settings['active_listings'] == 1) {
    $status = 1;
} else {
    $status = 0;
}
extract($_POST);

$id = $_POST['id'];
$companyName = addslashes(trim($companyName));
$companySlug = UrlClean($companyName);
//$website = addslashes(trim($website));
$catId = addslashes(trim($catId));
//$subCatId = addslashes(trim($subCatId));
$description = addslashes(trim($description));
$address = addslashes(trim($address));
$email = addslashes(trim($email));
$city = addslashes(trim($city));
$number = addslashes(trim($number));
$zipcode = addslashes(trim($zipcode));
$country = addslashes(trim($country));
$website = trim($website);

if (isset($_POST['update_business'])) {
    if (isset($_FILES['logo']['name'])) {
        $topads = $_FILES['logo']['name'];
        $file_pic = preg_replace('/\s+/', '_', $topads);
        $temp = explode(".", $file_pic);
        $extension = end($temp);
        if ($extension == 'png' || $extension == 'jpeg' || $extension == 'jpg' || $extension == 'JPEG') {
            
        } else {
            echo '{"status":"error","msg":"Please image upload in jpg, png, jpeg format!"}';
            exit();
        }
        $maxsize = 204800;
        if (($_FILES['logo']['size'] >= $maxsize)) {
            echo '{"status":"error","msg":"File too large. File must be less than 200kb"}';
            exit();
        }
        $file_path = "../upload/business-logo/";
        $file_pic = $companySlug . '-' . $id . "." . $extension;
        $upload_url = 'upload/business-logo/' . $file_pic;
        $file_path = $file_path . basename($file_pic);
        if (file_exists($file_path)) {
            unlink($file_path);
        }
        if (move_uploaded_file($_FILES["logo"]["tmp_name"], $file_path)) {
            $upload_url = $upload_url;
        }

        $tempName = $_FILES["logo"]["tmp_name"];
        $width = 150;
        $height = 150;
        resizeImage($tempName, $file_path, $extension, $width, $height);

        $from_data = array(
            "companyName" => $companyName,
            "companySlug" => $companySlug,
//            "website" => $website,
            "catId" => $catId,
//            "subCatId" => $subCatId,
            "description" => $description,
            "email" => $email,
            "address" => $address,
            "city" => $city,
            "number" => $number,
            "zipcode" => $zipcode,
            "country" => $country,
            "logo" => $upload_url
        );
    } else {
        $from_data = array(
            "companyName" => $companyName,
            "companySlug" => $companySlug,
//            "website" => $website,
            "catId" => $catId,
//            "subCatId" => $subCatId,
            "description" => $description,
            "email" => $email,
            "address" => $address,
            "city" => $city,
            "number" => $number,
            "zipcode" => $zipcode,
            "country" => $country,
        );
    }
    $data = dbAction('listing', $operation = 2, $from_data, " listId = $id");
    if ($data == true) {
        echo '{"status":"success","msg":"Business successfully Updated."}';
    } else {
        echo '{"status":"error","msg":"Error in server, please contact admin!"}';
    }
} elseif (isset($_POST['add_business'])) {
    $session_userid = $_SESSION['userId'];
    $data_count = dbAction('listing', $operation = 4, $from_data = "", " where userId = '$session_userid' ");
    $totalList = $data_count->num_rows;
    $bus_limt = $site_settings['bus_limt'];
    if ($bus_limt <= $totalList) {
        echo '{"status":"error","msg":"Limit exceeds"}';
        exit();
    }

    $str = $website;
    if (strpos($str, 'www.') !== false) {
        echo '{"status":"error","msg":"Please enter valid domain name. Domain must be without www, http, and https. Like (google.com)"}';
        exit();
    }

    $re = '/^(?!\-)(?:(?:[a-zA-Z\d][a-zA-Z\d\-]{0,61})?[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/m';
    if (preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0) == false) {
        echo '{"status":"error","msg":"Please enter valid domain name. Domain must be without www, http, and https. Like (google.com)"}';
        exit();
    }

    $data_list = dbAction('listing', $operation = 4, $from_data = "", " where website = '$website' ");
    if ($data_list->num_rows > 0) {
        echo '{"status":"error","msg":"Sorry, it looks like this website has already been claimed.!!"}';
        exit();
    }

    if (isset($_FILES['logo']['name'])) {
        $topads = $_FILES['logo']['name'];
        $file_pic = preg_replace('/\s+/', '_', $topads);
        $temp = explode(".", $file_pic);
        $extension = end($temp);
        if ($extension == 'png' || $extension == 'jpeg' || $extension == 'jpg' || $extension == 'JPEG') {
            
        } else {
            echo '{"status":"error","msg":"Please image upload in jpg, png, jpeg format!"}';
            exit();
        }
        $maxsize = 204800;
        if (($_FILES['logo']['size'] >= $maxsize)) {
            echo '{"status":"error","msg":"File too large. File must be less than 200kb"}';
            exit();
        }
        $file_path = "../upload/business-logo/";
        $file_pic = $companySlug . "." . $extension;
        $upload_url = 'upload/business-logo/' . $file_pic;
        $file_path = $file_path . basename($file_pic);
        if (file_exists($file_path)) {
            unlink($file_path);
        }
        if (move_uploaded_file($_FILES["logo"]["tmp_name"], $file_path)) {
            $upload_url = $upload_url;
        }

        $tempName = $_FILES["logo"]["tmp_name"];
        $width = 150;
        $height = 150;
        resizeImage($tempName, $file_path, $extension, $width, $height);

        $from_data = array(
            "companyName" => $companyName,
            "companySlug" => $companySlug,
            "website" => $website,
            "catId" => $catId,
//            "subCatId" => $subCatId,
            "description" => $description,
            "email" => $email,
            "address" => $address,
            "city" => $city,
            "number" => $number,
            "zipcode" => $zipcode,
            "country" => $country,
            "userId" => $id,
            "status" => $status,
            "logo" => $upload_url
        );
    } else {
        $from_data = array(
            "companyName" => $companyName,
            "companySlug" => $companySlug,
            "website" => $website,
            "catId" => $catId,
//            "subCatId" => $subCatId,
            "description" => $description,
            "email" => $email,
            "address" => $address,
            "city" => $city,
            "number" => $number,
            "zipcode" => $zipcode,
            "country" => $country,
            "status" => $status,
            "userId" => $id,
        );
    }
    $data = dbAction('listing', $operation = 1, $from_data);
    if ($data == true) {
        $url = '' . BASE_URL . 'review/' . $website . '';
        sitemap_create($url);
        echo '{"status":"success","msg":"Business Added successfully."}';
    } else {
        echo '{"status":"error","msg":"Error in server, please contact admin!"}';
    }
}
?>
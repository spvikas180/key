<?php include"config.php"; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php
        $page_title = "PPC Services | PPC Management Company - Nexus Web World";
        $page_des = "";
        $page_key = "ppc expert, ppc services, pay per click";
        $pageName = "";
        ?>
        <!-- COMMON TAGS -->
        <?php include_once"head.php"; ?>
        <?php
        $page = "ppc.php";
        $path = "pages";
        $fileName = scandir($path, 1);
        $indirName = array_search($page, $fileName);
        $flatName = str_replace(".php", "", $page);
        ?>
        <link rel="stylesheet" href="<?php echo BASE; ?>css/pages/ppc.css">
    </head>
    <body class="common_body">
        <?php include_once"header.php"; ?>
        <?php include_once"temp-part/common-banner.php"; ?>
        <section class="page_wrapper">
            <?php //include_once"temp-part/static-1.php"; ?>
            <?php
            if (in_array($page, $fileName)) {
                include_once $path . "/" . $page;
            } else {
                echo "<h1>Unvarified page</h1>";
            }
            ?>
            <?php //include_once"pages/about.php"; ?>
        </section>
        <?php include_once"footer.php"; ?>
        <!--<script src="js/pages/ppc.js"></script>-->
    </body>
</html>
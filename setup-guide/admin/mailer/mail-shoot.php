<?php

//f865b53623b121fd34ee5426c792e5c3
if (isset($_POST['submit_mail_shoot'])) {
    include_once"../control/config.php";
    require '../control/PHPMailer/PHPMailerAutoload.php';
    require '../control/PHPMailer/class.phpmailer.php';
    extract($_POST);

    $file = $_FILES['file']['tmp_name'];
    $handle = fopen($file, "r");
    $c = 0;
    fgetcsv($handle);
    while (($filesop = fgetcsv($handle, 1000, ",")) !== false) {
        $name = addslashes(trim($filesop[0]));
        $toAddress = addslashes(trim($filesop[1]));
        $message = "<html><head><meta http-equiv='content-type' content='text/html; charset=UTF-8'><title>Renewal Notice | 7 DAYS LEFT</title><link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet'><meta name='viewport' content='width=device-width,initial-scale=1'><style type='text/css'>body{font-family:'Open Sans',sans-serif}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}table{mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed}img{-ms-interpolation-mode:bicubic;max-width:100%}#outlook a{padding:0}.ac-content-cell img{max-width:100%;height:auto}p{margin:0}.ac-content-cell p{margin-top:10px;margin-bottom:10px}@media only screen and (max-width:480px){#ac-body-cell{padding:10px!important}#ac-content-table{max-width:600px!important;width:100%!important}.ac-content-cell img{width:100%!important}.ac-column-cell{display:block!important;width:auto!important}}</style><style type='text/css'>@media screen and (max-width:585px){.paddingright20{padding-right:0!important}.mob_stack{display:block!important;width:100%!important}}.mediumButton{text-align:center;font-family:'Open Sans',sans-serif;font-size:16px;font-weight:600;line-height:18px;border-radius:2px;padding:10px 30px;min-width:200px}.smallButton{font-family:'Open Sans',sans-serif;text-align:center;font-size:14px;font-weight:600;line-height:18px;border-radius:2px;padding:11px 30px;min-width:150px}.autoWidth{font-family:'Open Sans',sans-serif;text-align:center;font-size:14px;font-weight:600;line-height:18px;border-radius:2px;padding:11px 30px;word-break:break-all}.largeButton{font-family:'Open Sans',sans-serif;text-align:center;font-size:18px;font-weight:600;line-height:18px;border-radius:2px;padding:9px 30px;min-width:250px}.blockButton{font-family:'Open Sans',sans-serif;font-size:18px;font-weight:600;line-height:18px;border-radius:2px;padding:9px 30px;border:1px solid #C01818}.font-color-white{color:#FFF}.font-color-deep-gray{color:#333}.font-color-dark-gray{color:#53565a}.font-color-mcafee-red{color:#C01818}.font-color-dark-red{color:#75160d}.font-color-black{color:#000}.font-color-lightgray{color:#B1BABF}.font-color-palegray{color:#E6E7E8}.font-color-mediumgray{color:#939598}.font-color-statusred{color:#F1342F}.font-color-statusgreen{color:#0BD175}.font-color-statusorange{color:#F90}.font-color-lightgray40{color:#E0E3E5}.font-color-palegray40{color:#F5F5F6}.font-color-palegray60{color:#F0F0F1}.heading-sixty{font-size:60px}.headline1{font-size:30px;font-weight:700}.headline2{font-size:24px;font-weight:700}.sub-headline1{font-size:20px;font-weight:600}.sub-headline2{font-size:18px;font-weight:600}.footerText{font-size:12px}.body1{font-size:20px}.body2{font-size:18px}.body3{font-size:16px}.strikethrough{text-decoration:line-through}.underline{border-bottom:1px solid rgba(0,0,0,.1)}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}</style></head><body class='body' bgcolor='#B1BABF' style='-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;height:100%!important;width:100%!important;font-family:'Open Sans',sans-serif;text-align:-webkit-center;padding:15px 0;background-color:#B1BABF'><table align='center' border='0' cellpadding='0' cellspacing='0' style='-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse!important;height:100%!important;padding:0'><tbody><tr><td align='center' valign='top' style='-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0;mso-table-rspace:0;height:100%!important;width:100%!important;Margin:0;display:block'><table width='640' border='0' cellpadding='0' cellspacing='0' id='templateContainer' style='-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse!important;width:640px;border:0'><tbody><tr><td><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td><div class='cq-dd-fragment' data-emptytext='McAfee ACS Content Fragment'><div><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p></p><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div></div></div></td></tr></tbody></table><img height='0' width='0' alt='' src='https://mcafeeinc-mkt-prod2-t.adobe-campaign.com/r/?id=h155a3250,e1810e4,1'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:15px 0;background-color:#FFF'></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:10px 20px;background-color:#C01818'><table cellpadding='0' cellspacing='0' border='0' align='center' dir='ltr' width='100%'><tbody><tr><td align='center' width='65%' valign='top' height='20'><div align='left'><a><img src='https://secured-images.com/images/brand-mailer/mcafee/ngm_retention_White_Logo.png' width='119' height='35'></a></div><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table border='0' cellpadding='0' cellspacing='0' style='height:px;border:px solid #ccc'><tbody><tr></tr></tbody></table></td></tr></tbody></table></td><td align='center' width='35%' valign='top' height='20'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:right'><span style='color:#FFF'><span style='font-size:12px'>Renewal Notice</span> | <span style='font-size:16px'><b>7 DAYS LEFT</b></span></span></p></td></tr><tr><td><p style='text-align:right;padding-top:3px'><span style='color:#FFF'><span style='font-size:12px'>Call Toll-Free</span> : <span style='font-size:14px'><b>+44-800-041-8071</b></span></span></p></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table border='0' cellpadding='0' cellspacing='0' style='height:px;border:px solid #ccc'><tbody><tr></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:15px 0;background-color:#FFF'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'><span style='font-size:16px'><b><span style='color:#000'>YOUR ACTION REQUIRED</span></b></span></p></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' width='50%' align='center'><tbody><tr><td style='border-top:1px solid #000'></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:10px 0;background-color:#FFF'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='font-size:30px;font-weight:700;font-size:21px;text-align:center;color:#000'><span style='font-size:24px;display:inline-block'>Hey $name,</span> let's get your subscription renewed.</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div align='center'><a><img src='https://secured-images.com/images/brand-mailer/mcafee/animated-counter-7day-640.gif' alt='animated-counter-7day-640' width='640' height='150'></a></div><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table border='0' cellpadding='0' cellspacing='0' style='height:px;border:px solid #ccc'><tbody><tr></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:0 0;background-color:#FFF'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:20px 80px;background-color:#FFF'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'><span style='font-size:24px;font-weight:700'><span style='color:#333'>We'd hate to leave you unprotected and vulnerable to hackers.&nbsp;</span></span></p><p style='text-align:center'><span style='font-size:16px'><span style='color:#53565a'>Renew now to maintain the latest protection against viruses and other threats.</span></span></p></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td><div class='cq-dd-fragment' data-emptytext='McAfee ACS Content Fragment'><div><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p></p><table border='0' cellpadding='0' cellspacing='0' width='100%' align='center' style='padding-bottom:25px;padding-top:25px'><tbody><tr><td><table align='center' valign='middle' border='0' cellpadding='0' cellspacing='0' height='50' style='Margin:0 auto;width:171px;height:50px;color:#FFF' width='171'><tbody><tr><td align='center' style='border-radius:2px;height:50px;background-color:#C01818;text-align:center;color:#FFF;font-size:19px'><a x-cq-linkchecker='skip' href='https://renew-mcafee.com/renewal/uk/' target='_blank' style='width:100%;height:50px;line-height:50px;border-radius:2px;text-decoration:none;color:#FFF;font-family:'Open Sans',sans-serif;font-size:19px;font-weight:400;color:#fff;text-decoration: none;'>Renew now</a></td></tr></tbody></table></td></tr></tbody></table><p></p><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div></div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:10px 0;background-color:#E6E7E8'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'>&nbsp;</p><p style='text-align:center'><span style='font-size:16px'><span style='color:#C01818'><b>NOW INCLUDED WITH YOUR SUBSCRIPTION</b></span></span></p></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' width='60%' align='center'><tbody><tr><td style='border-top:1px solid #C01818'></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:20px 0;background-color:#E6E7E8'><table cellpadding='0' cellspacing='0' border='0' align='center' dir='ltr' width='100%'><tbody><tr><td align='center' valign='top' height='20'><a style='border:none;text-decoration:none' target='_blank'><table width='100%' cellspacing='0' cellpadding='0' border='0' style='border:0;padding:10px 5px'><tbody><tr><td align='center' style='padding-top:0'><img src='https://secured-images.com/images/brand-mailer/mcafee/virus-protection.png' alt='Virus and Threat Protection' height='75' width='76'></td></tr><tr><td style='padding-bottom:10px 0' valign='top'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'>&nbsp;</p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>Virus and Threat</b></span></span></p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>Protection</b></span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>Protects against the latest</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>viruses, malware, and</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>online threats.</span></span></p></td></tr></tbody></table></td></tr></tbody></table></a></td><td align='center' valign='top' height='20'><a style='border:none;text-decoration:none' target='_blank'><table width='100%' cellspacing='0' cellpadding='0' border='0' style='border:0;padding:10px 5px'><tbody><tr><td align='center' style='padding-top:0'><img src='https://secured-images.com/images/brand-mailer/mcafee/icon-support.png' alt='24/7 technical support'></td></tr><tr><td style='padding-bottom:10px 0' valign='top'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'>&nbsp;</p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>24/7 technical</b></span></span></p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>support</b></span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>Free technical, 24/7</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>support for the life of</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>your&nbsp;subscription.&nbsp;</span></span></p></td></tr></tbody></table></td></tr></tbody></table></a></td><td align='center' valign='top' height='20'><a style='border:none;text-decoration:none' target='_blank'><table width='100%' cellspacing='0' cellpadding='0' border='0' style='border:0;padding:10px 5px'><tbody><tr><td align='center' style='padding-top:0'><img src='https://secured-images.com/images/brand-mailer/mcafee/icon-mobile.png' alt='Comprehensive mobile security' height='75' width='91'></td></tr><tr><td style='padding-bottom:10px 0' valign='top'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><p style='text-align:center'>&nbsp;</p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>Comprehensive</b></span></span></p><p style='text-align:center'><span style='color:#333'><span style='font-size:18px'><b>mobile security</b></span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>Real-time protection</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>&nbsp;against mobile viruses</span></span></p><p style='text-align:center'><span style='color:#53565a'><span style='font-size:16px'>and&nbsp;spam.</span></span><span style='color:#000'><span style='font-size:16px'></span></span></p></td></tr></tbody></table></td></tr></tbody></table></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:0 0;background-color:#E6E7E8'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td><div class='cq-dd-fragment' data-emptytext='McAfee ACS Content Fragment'><div><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p></p><table border='0' cellpadding='0' cellspacing='0' width='100%' align='center' style='padding-bottom:25px;padding-top:25px'><tbody><tr><td><table align='center' valign='middle' border='0' cellpadding='0' cellspacing='0' height='50' style='Margin:0 auto;width:171px;height:50px;color:#FFF' width='171'><tbody><tr><td align='center' style='border-radius:2px;height:50px;background-color:#C01818;text-align:center;color:#FFF;font-size:19px'><a x-cq-linkchecker='skip' href='https://renew-mcafee.com/renewal/uk/' target='_blank' style='width:100%;height:50px;line-height:50px;border-radius:2px;text-decoration:none;color:#FFF;font-family:'Open Sans',sans-serif;font-size:19px;font-weight:400;color:#fff;text-decoration: none;'>Renew now</a></td></tr></tbody></table></td></tr></tbody></table><p></p><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div></div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td><div class='cq-dd-fragment' data-emptytext='McAfee ACS Content Fragment'><div><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p></p><table width='100%' bgcolor='#FFFFFF' border='0' cellpadding='0' cellspacing='0' style='Margin:0'><tbody><tr><td align='center' valign='top' height='10' style='Margin:0;padding:0;color:#53565a;font-family:Open Sans,sans-serif;font-size:25px;line-height:20px;font-weight:400;text-align:center;padding:25px 0 0 0;font-weight:600'>Call Us : +44-800-041-8071</td></tr><tr><td align='center' valign='top' height='10' style='Margin:0;padding:0;color:#53565a;font-family:'Open Sans',sans-serif;font-size:25px;line-height:20px;font-weight:400;text-align:center;padding:10px 0 0 0'>Have questions?</td></tr><tr><td align='center' valign='top' height='49' style='Margin:0;padding:0;color:#53565a;font-family:'Open Sans',sans-serif;font-size:16px;line-height:20px;font-weight:400;text-align:center;padding:10px 65px 25px 65px'>Get answers to your questions 24/7 by phone, by chat, or <a x-cq-linkchecker='skip' target='_blank' style='color:#53565a'>online</a>. Whatever works best for you.</td></tr></tbody></table><p></p><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div></div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td style='border-top:10px solid #C01818'></td></tr></tbody></table></div><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:30px 20px;background-color:#FFF'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td><div class='cq-dd-fragment' data-emptytext='McAfee ACS Content Fragment'><div><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p></p><table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td class='mob_pad_disc' id='copyright1' style='text-align:left;font-size:9px;color:#000;font-family:'Open Sans',sans-serif;padding-right:50px;display:block;line-height:12px' valign='middle'>Make sure you receive our messages. Add <a style='color:#C01818'>info@protect.mcafee.com</a> to your address book.<br><br>Please do not reply to this email. This email was sent from a notification-only address that cannot accept incoming email. For support related questions, <a x-cq-linkchecker='skip' href='https://renew-mcafee.com/renewal/uk/' style='color:#C01818'>go here.</a><br><br>To opt-out of marketing emails from McAfee, <a x-cq-linkchecker='skip' href='https://renew-mcafee.com/renewal/uk/' style='color:#C01818' _label='Click Here' _type='optout'>click here</a>. We will still send you a transactional email about your subscription, any support requests, or other notices regarding your account.<br>&nbsp;<div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div><p><a x-cq-linkchecker='skip' style='color:#C01818'>EULA</a> | <a x-cq-linkchecker='skip' style='color:#C01818'>My Account</a> | <a x-cq-linkchecker='skip' style='color:#C01818' _label='Unsubscribe' _type='optout'>Unsubscribe</a> | <a x-cq-linkchecker='skip' style='color:#C01818'>Privacy Notice</a> | <a x-cq-linkchecker='skip' style='color:#C01818'>Support</a></p><br>McAfee, McAfee LiveSafe, and the McAfee logo are trademarks or registered trademarks of McAfee LLC or its subsidiaries in the United Kingdom and other countries. Other brands and names may be claimed as the property of others.<br><br>Copyright © 2020 McAfee LLC<br>McAfee Ireland Ltd. Building 2000, City Gate, Mahon, Cork Ireland<br></td></tr></tbody></table><p></p><div><div class='aem-Grid aem-Grid--12 aem-Grid--default--12'></div></div></div></div></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table align='left' width='100%' border='0' cellpadding='0' cellspacing='0' style='height:px'><tbody><tr><td valign='top' style='padding:25px 0;background-color:#FFF'><div align='center'><a><img src='https://secured-images.com/images/brand-mailer/mcafee/logo-mcafee.png' alt='McAfee™ Together is power' width='125' height='35'></a></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td><table border='0' cellpadding='0' cellspacing='0' style='height:px;border:px solid #ccc'><tbody><tr></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></table></body></html>";
//        $message = "$message";
        $subject = "$subject";
        $fromTitle = "$subject";
        $fromEmail = $mailtitle . '@' . $_SERVER['HTTP_HOST'];
        $mail = new PHPMailer;
        //$mail->IsSMTP();
        //$mail->Mailer = 'smtp';
        $mail->SMTPDebug = 2;
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = "$smtpemail";
        $mail->Password = "$smtppass";
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom($fromEmail, $fromTitle);
        $mail->addAddress($toAddress);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail = $mail->send();
        echo $message;
//         sendmail($to, $subject, $message, $name);
    }
    if (!$mail) {
        echo '{"status":"error","msg":"Error in server, please contact admin!"}';
    } else {
        echo '{"status":"success","msg":"Mail Sent Successfully!"}';
    }
}
?>

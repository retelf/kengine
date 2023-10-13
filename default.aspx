<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="default.aspx.vb" Inherits="WebApplication2.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
    <link href="css/general.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src='js/GLOBAL/general/detect_browser.js' type='text/javascript'></script>

    <script type="text/javascript">
         $(document).ready(function () {

            var ismobile = c_detect_browser.isMobileDevice();

            if (ismobile) {
                window.location.href = "default_mobile.aspx";
            } else {
                window.location.href = "default_desktop.aspx";
             }
         });

    </script>

</head>
<body>
</body>
</html>

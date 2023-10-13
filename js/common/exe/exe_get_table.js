var class_exe_get_table = function () {

    var Me; this.initialize = function () { Me = c_exe_get_table; }

    this.exe = function (number, keywords) {

        var table = "";

        table += "<table style=\"width:100%;\">";
        table += "<tr>";
        table += "<td id=\"q_mark\" style=\"width:5%;vertical-align:middle; \">";
        table += "</td>";
        table += "<td id=\"q_content_" + number + "\" style=\"padding:20px; border-bottom: 1px solid #DDDDDD; \">";
        table += "</td>";
        table += "</tr>";
        table += "<tr>";
        table += "<td id=\"a_mark\" style=\"vertical-align:top; background: #EEEEEE; padding-top: 20px; \">";
        table += "</td>";
        table += "<td id=\"a_content_" + number + "\" style=\"padding:20px; border-bottom: 1px solid #DDDDDD; border-right: 1px solid #DDDDDD\">";
        table += "</td>";
        table += "</tr>";
        table += "</table>";

        var $table = $(table);

        var q_mark = "";
        var a_mark = "";
        var div_keywords = "<div>" + keywords + "</div>";

        q_mark += "<div style=\"width: 100%; height: 50px; text-align: center; align-items : center; display : flex; margin:auto ; background:#4867F8\">"
        q_mark += " <div style=\"width: 100%; height: 25px; text-align: center; margin:auto ; color: white; font-size: 24px; font-family: Pretendard; font-weight: 500; word-wrap: break-word\">Q</div>"
        q_mark += "</div>"

        a_mark += "<div style=\"width: 100%; height: 100%; text-align: center; vertical-align:top; background: #EEEEEE;\">";
        a_mark += " <div style=\"text-align: center; color: #1E1E1E; font-size: 24px; font-family: Pretendard; font-weight: 500; word-wrap: break-word\">A</div>";
        a_mark += "</div>";

        $table.find('#q_mark').each(function (index) {
            $(this).html(q_mark);
        });
        $table.find('#q_content_' + number).each(function (index) {
            $(this).html(keywords);
        });
        $table.find('#a_mark').each(function (index) {
            $(this).html(a_mark);
        });

        return $table;
    }
}

var c_exe_get_table = new class_exe_get_table(); c_exe_get_table.initialize();
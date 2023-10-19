var class_change_language = function () {

    var Me; this.initialize = function () { Me = c_change_language; }

    this.exe = function ($this) {

        let language;

        $this.find("div").each(function (index) {
            language = $(this).html();
        });

        if (language == "한국어") {

            $(".div_service_korean").css("display", "block");
            $(".div_service_english").css("display", "none");
            $("#div_korean").css("background", "#4867F8");
            $("#div_korean_inner").css("color", "white");
            $("#div_english").css("background", "#EEEEEE");
            $("#div_english_inner").css("color", "#1E1E1E");
            $("#div_difficulty").css("display", "block");
            $("#div_korean_inner").data("selected", "selected");

            if ($("#div_difficulty").data("professional") == "yes") {
                query_data.query_mode = "professional";
            } else {
                query_data.query_mode = "general";
            };

        } else {

            $(".div_service_korean").css("display", "none");
            $(".div_service_english").css("display", "block");
            $("#div_korean").css("background", "#EEEEEE");
            $("#div_korean_inner").css("color", "#1E1E1E");
            $("#div_english").css("background", "#4867F8");
            $("#div_english_inner").css("color", "white");
            $("#div_difficulty").css("display", "none");
            $("#div_korean_inner").data("selected", "unselected");

            query_data.query_mode = "english";
        }

        $(".div_language").css("display", "none");
        $("#svg_language").removeClass("rotate");

        var keywords = $("#txt_query").val();

        if (keywords != "") {
            c_exe_query.exe(keywords);
        }
    }
}

var c_change_language = new class_change_language(); c_change_language.initialize();
var class_change_difficulty = function () {

    var Me; this.initialize = function () { Me = c_change_difficulty; }

    this.exe = function ($this) {

        var keywords = $("#txt_query").val();

        // .div_service_english의 display 속성을 확인
        var englishServiceDisplay = $(".div_service_english").css("display");

        if ($("#div_difficulty").data("professional") == "yes") {

            query_data.query_mode = "general";

            if (keywords != "") {
                c_exe_query.exe(keywords);
            }

            $("#div_difficulty").data("professional", "no");
            if(englishServiceDisplay !== "none") {
                $("#div_difficulty").text("Switch to professional mode");
            } else {
                $("#div_difficulty").text("전문가 모드로 전환하기");
            }
            
        } else {

            query_data.query_mode = "professional";

            if (keywords != "") {
                c_exe_query.exe(keywords);
            }

            $("#div_difficulty").data("professional", "yes");
            if(englishServiceDisplay !== "none") {
                $("#div_difficulty").text("Switch to general mode");
            } else {
                $("#div_difficulty").text("눈높이 모드로 전환하기");
            }        }

    }
}

var c_change_difficulty = new class_change_difficulty(); c_change_difficulty.initialize();
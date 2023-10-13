var class_set_query_mode_non_simple = function () {

    var Me; this.initialize = function () { Me = c_set_query_mode_non_simple; }

    this.exe = function () {

        let language_korean, professional;

        if ($("#div_korean_inner").data("selected") == "selected") {

            language_korean = true;

            if ($("#div_difficulty").data("professional") == "yes") {
                professional = true;
            } else {
                professional = false;
            }

        } else {
            language_korean = false;
        };

        if (language_korean) {

            if (professional) {
                query_data.query_mode = "professional";
                query_data.orderred_datarow_collection_mode = "professional";
            } else {
                query_data.query_mode = "general";
                query_data.orderred_datarow_collection_mode = "general";
            }

        } else {
            query_data.query_mode = "english";
            query_data.orderred_datarow_collection_mode = "english";
        };

    }
}

var c_set_query_mode_non_simple = new class_set_query_mode_non_simple(); c_set_query_mode_non_simple.initialize();
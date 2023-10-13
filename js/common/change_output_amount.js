var class_change_output_amount = function () {

    var Me; this.initialize = function () { Me = c_change_output_amount; }

    this.exe = function ($this) {

        var desirable_content_length_count = query_data.desirable_content_length_count;

        var id = $this.attr("id");

        if (id == "svg_reduce") {
            query_data.desirable_content_length_count -= 1;
        } else {
            query_data.desirable_content_length_count += 1;
        }

        if (query_data.desirable_content_length_count > 3) {
            alert("더 이상 늘일 수 없습니다");
            return;
        } else if (query_data.desirable_content_length_count < -3) {
            alert("더 이상 줄일 수 없습니다");
            return;
        }

        var keywords = $("#txt_query").val();
        c_exe_query.exe(keywords);
    }

}

var c_change_output_amount = new class_change_output_amount(); c_change_output_amount.initialize();
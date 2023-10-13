var class_exe_query = function () {

    var Me; this.initialize = function () { Me = c_exe_query; }

    this.exe = function (keywords) {

        var number = query_data.number;

        var $table = c_exe_get_table.exe(number, keywords);

        $("#td_answer").prepend($table)

        $.ajax({
            type: "POST", // HTTP 요청 메서드
            url: "server_side.aspx/exe", // 서버 메서드의 경로
            contentType: "application/json; charset=utf-8", // 요청 헤더 설정
            dataType: "json", // 서버 응답 데이터 형식
            data: JSON.stringify({ keywords: keywords, desirable_content_length_count: query_data.desirable_content_length_count }), // 요청 본문 데이터 (JSON 형식)

            success: function (response) {
                // 성공적으로 데이터를 받았을 때 실행되는 코드
                $("#td_answer").find('#a_content_' + number).each(function (index) {

                    let result = response.d + "";
                    $(this).html(result);

                    let length = $(this).text().length;
                    $("#div_output_letters_length").html(length);
                });
            },
            error: function (error) {
                // 요청이 실패하거나 오류 응답을 받았을 때 실행되는 코드
                console.error('요청 실패 또는 오류 응답', error);
            }
        });

        query_data.number += 1;

    }

}

var c_exe_query = new class_exe_query(); c_exe_query.initialize();
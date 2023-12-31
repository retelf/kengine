﻿var class_exe_query = function () {

    var Me; this.initialize = function () { Me = c_exe_query; }

    this.exe = function (keywords) {

        var number = query_data.number;

        var $table = c_exe_get_table.exe(number, keywords);
        // 답변 데이터 중 3개 초과하는 부분은 삭제
        $("#td_answer").children(":gt(1)").remove();

        // 새로운 테이블 추가
        $("#td_answer").prepend($table)

        $.ajax({
            type: "POST", // HTTP 요청 메서드
            url: "server_side.aspx/exe", // 서버 메서드의 경로
            contentType: "application/json; charset=utf-8", // 요청 헤더 설정
            dataType: "json", // 서버 응답 데이터 형식
            data: JSON.stringify({
                keywords: keywords,
                query_mode: query_data.query_mode,
                orderred_datarow_collection_mode: query_data.orderred_datarow_collection_mode,
                simple_case: query_data.simple_case,
                i_orderred_datarow_collection: query_data.i_orderred_datarow_collection,
                desirable_content_length_count: query_data.desirable_content_length_count
            }), 

            success: function (response) {
                $("#td_answer").find('#a_content_' + number).each(function (index) {

                    let result = response.d + "";

                    let splitted_result = c_method_split.exe(result, "\|\*\|");

                    query_data.i_orderred_datarow_collection = splitted_result[0] * 1;
                    $(this).html(splitted_result[1]);

                    let length = $(this).text().length;
                    $("#div_output_letters_length").html(length);
                });
            },
            error: function (error) {
                console.error('요청 실패 또는 오류 응답', error);
            }
        });

        query_data.number += 1;

    }

}

var c_exe_query = new class_exe_query(); c_exe_query.initialize();
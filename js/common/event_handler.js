﻿var class_event_handler = function () {

    var Me; this.initialize = function () { Me = c_event_handler; }

    this.exe = function () {
        $("#btn_new_chat").on("click", function () {

            var keywords = $("#txt_query").val();
            query_data.desirable_content_length_count = 0;
            c_exe_query.exe(keywords);

        });

        $("#txt_query").on('keyup', function (event) {
            
            if (event.key == 'Enter' || event.keyCode == 13) {
                event.preventDefault();
                var keywords = $(this).val();
                query_data.desirable_content_length_count = 0;
                c_exe_query.exe(keywords);
            }
        });

        $("#btn_new_chat, #div_mode_outer, .svg_arrow, .div_language, #div_difficulty").on("mouseover", function () {

            $(this).css("cursor", "pointer")

        });

        $("#div_mode_outer").on("click", function () {

            c_mode_change.exe($(this));

        });

        $("#svg_language").on("click", function () {

            var display_state = $("#div_korean").css("display");

            if (display_state === "none") {
                $(".div_language").css("display", "flex");
                $(this).addClass("rotate");
            } else {
                $(".div_language").css("display", "none");
                $(this).removeClass("rotate");
            }

        });

        $(".div_language").on("click", function () {

            c_change_language.exe($(this));

        });

        $("#div_difficulty").on("click", function () {

            c_change_difficulty.exe($(this));

        });

        $(".output_amount").on("click", function () {

            c_change_output_amount.exe($(this));

        });

        $('body').on('load', 'img', function () {
            adjustImageSize();
        })

        //// 이미지를 클릭했을 때 새 창으로 열기
        $('body').on('click', 'img', function () {
            window.open($(this).attr("src"), "_blank");
        });

        // 윈도우 크기가 변경될 때 이미지 크기를 조절
        $(window).resize(function () {
            adjustImageSize();
        });

        function adjustImageSize() {
            var containerWidth = $(".container").width();
            var containerHeight = $(".container").height();
            var imageWidth = $("img").width();
            var imageHeight = $("img").height();

            var widthRatio = containerWidth / imageWidth;
            var heightRatio = containerHeight / imageHeight;
            var scale = Math.min(widthRatio, heightRatio);

            $("img").css({
                width: imageWidth * scale,
                height: imageHeight * scale
            });
        }
    }
}

var c_event_handler = new class_event_handler(); c_event_handler.initialize();
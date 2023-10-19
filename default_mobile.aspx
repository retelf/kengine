<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="default_mobile.aspx.vb" Inherits="WebApplication2.default_mobile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
    <link href="css/general.css" rel="stylesheet" />
    <script src='js/GLOBAL/general/detect_browser.js' type='text/javascript'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <%--<script src='js/GLOBAL/general/jquery.js' type='text/javascript'></script>--%>
    <script src="js/common/exe/exe_query.js"></script>
    <script src="js/common/event_handler.js"></script>
    <script src="js/common/exe/exe_get_table.js"></script>
    <script src="js/common/mode_change.js"></script>
    <script src="js/common/change_language.js"></script>
    <script src="js/common/change_output_amount.js"></script>
    <script src="js/common/change_difficulty.js"></script>
    <script src="js/common/static.js"></script>
    <script src="js/common/set_query_mode_non_simple.js"></script>
    <script src="js/common/method_split.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            general_data.monitor_mode = "mobile";
            c_event_handler.exe();

            $('body').on('click', 'img', function () { window.open($(this).attr("src"), "_blank"); })

            // 이미지가 로드된 후에 실행
            $("img").on("load", function () {
                // 이미지 크기 조절
                adjustImageSize();
            });

            // 이미지를 클릭했을 때 새 창으로 열기
            $("img").on("click", function () {
                window.open($(this).attr("src"), "_blank");
            });
        });
    </script>

</head>
<body style="line-height:160%;margin:0;padding-top:0;">
        <div>
            <table style="width: 100%;padding-top:5px">
                <tr>                    
                    <td style="text-align:center">
                        <div style="text-align: center;line-height:160%; color: #4867F8; font-size: 30px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">KEngineOS v. 0.3.00</div>
                    </td>
                </tr>
                <tr>
                    <td style="width:100%; text-align:center;">
                        <table style="width:100%;">
                            <tr>
                                <td style="width:30%;vertical-align:top">
                                    <table style="width: 100%;text-align:center;margin:auto;">
                                        <tr>
                                            <td style="text-align:right;">
                                                <div id="div_mode_outer" style="text-align:left; width: 50px; height: 25px; margin-right:5px; background: #EEEEEE; display: inline-table;border-radius: 50px">
                                                    <div id="div_mode_inner" style="vertical-align:middle;width: 25px;height: 25px; background: #4867F8;display: inline-table; border-radius: 9999px"></div>
                                                </div>                                               
                                            </td>
                                            <td style="text-align:left;margin:auto;">
                                                <div id="div_mode_name" style="color: #333436; font-size: 16px; font-family: Pretendard; font-weight: 500; word-wrap: break-word">White</div>
                                            </td>
                                        </tr>
                                    </table>                                   
                                    <table style="width: 100%;text-align:center;margin:auto;">
                                        <tr>
                                            <td colspan="2" style="text-align:center">
                                                <table style="text-align:center; margin:auto">
                                                    <tr>
                                                        <td style="align-items : center; padding-bottom:5px">
                                                            <div style="width: 100px; height: 21px; color: #242425; font-size: 16px; font-family: Pretendard; font-weight: 500; word-wrap: break-word">Language</div>                                                          
                                                        </td>
                                                        <td style="align-items : center; ">
                                                            <div class="svg-container_language rotate">
                                                                <svg id="svg_language" class="svg_arrow" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path d="M11 6L6 1L1 6" stroke="#242425" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </g>
                                                                </svg>
                                                            </div>                                                             
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="text-align:center; ">
                                                <div id="div_korean" class="div_language" style="width: 110px; height:25px; background: #4867F8; align-items : center; display : none; margin:auto ;">
                                                    <div id="div_korean_inner" data-selected="selected" style="width 60px; text-align: center; margin:auto ; color: white; font-size: 16px; font-family: Pretendard; font-weight: 500; word-wrap: break-word">한국어</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="text-align:center">
                                                <div id="div_english" class="div_language" style="width: 110px; height:25px; background: #EEEEEE; align-items : center; display : none; margin:auto ;">
                                                    <div id="div_english_inner" data-selected="unselected" style="width: 60px; text-align: center; margin:auto; color: #1E1E1E; font-size: 16px; font-family: Pretendard; font-weight: 500; word-wrap: break-word">English</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td style="vertical-align:top"> 
                                </td>
                                <td style="width:30%; vertical-align:top" >                                    
                                    <table style="width: 100%;">
                                        <tr>
                                            <td style="text-align:center;">
                                                <table style="text-align:center; margin:auto">
                                                    <tr>
                                                        <td style="align-items : center; ">
                                                            <div style="color: #363333; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">글자수</div>
                                                        </td>
                                                        <td style="align-items : center; ">
                                                            <div id="div_output_letters_length" style="width: 55px; height: 24px;  background: #EEEEEE; border-radius: 10px; ">0</div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="td_arrow">
                                                <table id="table_change_amount" style="text-align:center; margin:auto">
                                                    <tr>
                                                        <td style="align-items : center; ">
                                                            <div class="svg-container rotate">
                                                                <svg id="svg_reduce" class="svg_arrow output_amount" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path d="M11 6L6 1L1 6" stroke="#242425" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </g>
                                                                </svg>
                                                            </div>                                                           
                                                        </td>
                                                        <td style="align-items : center; ">
                                                           <div style="width:70px; text-align: center; color: #363333; font-size: 14px; font-family: Inter; display:inline-block; font-weight: 700; word-wrap: break-word">출력량</div>
                                                        </td>
                                                        <td style="align-items : center; ">
                                                            <div class="svg-container">
                                                                <svg id="svg_increase" class="svg_arrow output_amount" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path d="M11 6L6 1L1 6" stroke="#242425" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </g>
                                                                </svg>
                                                            </div>                                                             
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table style="width: 100%;padding:10px">
                            <tr>
                                <td>
                                    <table style="width: 100%;">
                                        <tr>
                                            <td colspan="2" style="text-align:center">
                                                <div style="text-align: center;line-height:160%; color: #1E1E1E; font-size: 14px; font-family: Montserrat; font-weight: 400; word-wrap: break-word">
                                                    <div class="div_service_korean" style="text-align: left;">현재 한국 세무회계 중 법인세 분야에 한해서만 서비스를 제공하고 있습니다. 아래의 채팅앱이 비록 OS 0.3 버전 상에서 구동되고 있지만 그런대로 잘 나오는 것을 확인할 수 있습니다. 아기 예수의 모습을 볼 수 있습니다.</div>
                                                    <div class="div_service_english" style="display:none;text-align: left;">Currently, we only provide services in the corporate tax field of Korean tax accounting. Although the chat app below runs on OS 0.3 version, you can see that it is coming out not bad. Now, you're looking at Baby Jesus.</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align:right">
                                                <div id="div_difficulty" data-professional="yes" style="color: #038B9D; font-size: 14px; font-family: Pretendard; font-weight: 500; text-decoration: underline; word-wrap: break-word">눈높이 모드로 전환하기</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="text-align:center;">
                                                <table style="width: 100%;">
                                                    <tr>
                                                        <td style="text-align:center;height: 58px; background: #EEEEEE;">
                                                            <input id="txt_query" type="text" style="outline: none; font-size:18px; width: 95%; height: 58px; background: #EEEEEE; border: 0px; padding-left:10px; padding-right:10px; border-top-left-radius: 5px; border-bottom-left-radius: 5px"/>
                                                        </td>
                                                        <td id="td_new_chat" style="width: 50px; height: 58px; padding-left:0px; padding-right:20px; background: #EEEEEE; padding:0px; border-top-right-radius: 5px; border-bottom-right-radius: 5px">
                                                            <svg id="btn_new_chat" class="svg-1" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g>
                                                                    <path d="M21 9.42105L1 17.8421L4.75 9.42105L1 1L21 9.42105Z" stroke="#4867F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M4.68408 9.42102H20.9999" stroke="#4867F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </g>
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="td_answer" colspan="2" style="height:160px; vertical-align:top">
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:30px">
                        <table style="width: 100%;margin:auto;">
                            <tr>
                                <td style="width: 20%;padding:10px; text-align:center; color: #1E1E1E; font-size: 30px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">KEngine</td>
                                <td style="width: 80%;text-align:center">
                                    주식회사 KEngine retelf@naver.com <br/> 경기도 광주시 수레안길 51-3
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
</body>
</html>

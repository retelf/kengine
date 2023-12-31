﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="default_desktop.aspx.vb" Inherits="WebApplication2.default_desktop" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title></title>
    <link href="css/general.css" rel="stylesheet" />
    <script src='js/GLOBAL/general/detect_browser.js' type='text/javascript'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
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
            general_data.monitor_mode = "desktop";
            c_event_handler.exe();
        });
    </script>

</head>
<body style="line-height:160%;margin:0;padding:0;">
        <div>
            <table style="min-height: 90vh;width: 100%;">
                <tr>
                    <td>
                        <table class="table" style="width: 100%;padding-top:20px">
                            <tr>
                                <td style="max-width: 25%;vertical-align:top">
                               
                                    <table class="language_box" style="text-align:center;margin:auto;">
                                        
                                        <tr>
                                            <td colspan="2" style="text-align:center">
                                                <div id="div_english" class="div_language" style="border-radius:5px;width: 100px; height: 39px; background: #EEEEEE; align-items : center; display : none; margin:auto ;">
                                                    <div id="div_english_inner" data-selected="unselected" style="width: 70px; text-align: center; margin:auto; color: #1E1E1E; font-size: 16px; font-family: Pretendard; font-weight: bold; word-wrap: break-word">English</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="text-align:center; ">
                                                <div id="div_korean" class="div_language" style="border-radius:5px; width: 100px; height: 39px; background: #4867F8; align-items : center;display : none; margin:auto ;">
                                                    <div id="div_korean_inner" data-selected="selected" style="width: 70px; text-align: center; margin:auto ; color: white; font-size: 16px; font-family: Pretendard; font-weight: bold; word-wrap: break-word">한국어</div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                    <table style="width: 100%;">
                                        <tr>
                                            <td colspan="2" style="text-align:center">
                                                <div class="title" style="text-align: center;line-height:160%;  font-size: 40px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">KEngineOS v. 0.3.00</div>
                                            </td>
                                        </tr>
                                      
                                        <tr>
                                            <td style="text-align:right">
                                                <div id="div_difficulty" data-professional="yes" style="font-size: 14px; font-family: Pretendard; font-weight: 500; text-decoration: underline; word-wrap: break-word">
                                                    <div class="div_service_korean"> 눈높이 모드로 전환하기</div>
                                                    <div class="div_service_english" style="display: none;"> Switch to general mode</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="text-align:center;">
                                                <table style="width: 100%;">
                                                    <tr>
                                                        <td style="box-shadow:3px 3px 3px 0px rgba(0, 0, 0, .2); border-top-left-radius: 5px;
                                                        border-bottom-left-radius: 5px;text-align:center; background: #EEEEEE;">
                                                            <input id="txt_query" type="text" style="outline: none; font-size:16px; width: 95%; background: #EEEEEE; border: 0px; padding-left:10px; padding-right:10px; border-top-left-radius: 5px; border-bottom-left-radius: 5px"/>
                                                        </td>
                                                        <td id="td_new_chat" style="box-shadow:3px 3px 3px 0px rgba(0, 0, 0, .2);height:45px;width: 50px; padding-left:0px; padding-right:20px; background: #EEEEEE; padding:0px; border-top-right-radius: 5px; border-bottom-right-radius: 5px">
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
                                            <tr>
                                                <td colspan="2" style="text-align:center">
                                                    <div class="div_service_text_box" style="top: 20vh;position: relative;text-align: center;line-height:160%; font-size: 14px; font-family: Montserrat; font-weight: 400; word-wrap: break-word">
                                                        <div class="div_service_korean" style="color: gray;text-align: center;">현재 한국 세무회계 중 법인세 분야에 한해서만 서비스를 제공하고 있습니다.<br/>아래의 채팅앱이 비록 OS 0.3 버전 상에서 구동되고 있지만 그런대로 잘 나오는 것을 확인할 수 있습니다.<br/><br/>새로운 시대의 개막을 알리고 있습니다.</div>
                                                        <div class="div_service_english" style="color: gray; display:none;text-align: center;">Currently, we only provide services in the corporate tax field of Korean tax accounting. <br/>Although the chat app below runs on OS 0.3 version, you can see that it is coming out not bad. <br/><br/>It marks the beginning of a new era.</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <td id="td_answer" colspan="2" style="height:1000px; vertical-align:top">
                                            </td>
                                           
                                        </tr>
                                    </table>
                                </td>
                                <td style="width:20%; vertical-align:top" >                                    
                                    <table style="width: 100%;">
                                        <tr >
                                            <td style="text-align:center; ">
                                                <table style="text-align:center; margin:auto">
                                                    <tr style="display: flex; flex-direction: row; align-items: center;">
                                                        <td style="align-items : center; ">
                                                            <div id="div_output_letters_length" style="color: #000;width: 75px; height: 24px;  background: #EEEEEE; border-radius: 10px; ">0</div>
                                                        </td>
                                                        <td style="align-items : center; ">
                                                            <div style="margin-left:1px;color: #363333; font-size: 14px; font-family: Inter; font-weight: 400; word-wrap: break-word">
                                                                <div class="div_service_korean" style="text-align: left;">출력글자수</div>
                                                                <div class="div_service_english" style="display:none;text-align: left;">Number of output characters</div>                                                                               
                                                            </div>
                                                        </td>                                                        
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="td_arrow">
                                                <table id="table_change_amount" style="display:none;text-align:center; margin:auto">
                                                    <tr>
                                                        <td style="align-items : center; ">
                                                            <div class="svg-container rotate" style="padding: 0px 5px">
                                                                <svg id="svg_reduce" class="svg_arrow output_amount" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path d="M11 6L6 1L1 6" stroke="#242425" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </g>
                                                                </svg>
                                                            </div>                                                           
                                                        </td>
                                                        <td style="align-items : center; ">
                                                           <div style="width:100px; text-align: center; color: #363333; font-size: 14px; font-family: Inter; display:inline-block; font-weight: 700; word-wrap: break-word">
                                                            <div class="div_service_korean">출력량조정 </div>
                                                            <div class="div_service_english" style="display: none;">Adjust output length</div>

                                                        </div>
                                                        </td>
                                                        <td style="align-items : center; ">
                                                            <div class="svg-container" style="padding: 0px 5px">
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
                    <td class="footer" style="padding-top:30px;padding-bottom:30px">
                        <table style="width: 50%;margin:auto;">
                            <tr class="footer_text">
                                <td style="text-align:center;font-size: 30px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">
                                    <a href="http://kengine.io" target="_blank" style="text-decoration:none"><div>KEngineOS</div></a>
                                    
                                </td>
                                <td style="margin-top: 25px;text-align:center">
                                    주식회사 KEngineOS | 경기도 광주시 수레안길 51-3 | retelf@naver.com
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <script src="./js/engine_scripts.js"></script>

</body>
</html>


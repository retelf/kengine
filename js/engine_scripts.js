 /* 23.10.11. 이재황세무사 : changeBTN 및 기능 추가*/
 $(document).ready(function(){
    $('body').addClass('no-transition');

    //lnb
    (function () {         
      
        var $inputBTN =$('#td_new_chat')
        var $td_arrow =$('#td_arrow')
        var $txtQuery = $('#txt_query');
        var $div_service_text_box = $('.div_service_text_box')

        $inputBTN.on('click', function () {
            $td_arrow.css('display','block');
            $div_service_text_box.css('display','none')

        });

        $txtQuery.on('keydown', function(e) {
            if (e.which === 13) {
                $td_arrow.css('display', 'block');
                $div_service_text_box.css('display','none')
            }
        });

        $('#div_english, #div_korean, #div_difficulty').on('click', function() {
            $td_arrow.css('display', 'none');
        });
        


        var $changeBTN =$('#div_difficulty')
        var heavymode = true

        applyMode(localStorage.getItem('mode'));

        $changeBTN.on('click', function() {
            heavymode = !heavymode; // heavymode 상태를 토글

            const currentMode = heavymode ? 'default' : 'lightmode'; 
            localStorage.setItem('mode', currentMode);
            
            applyMode(currentMode);
        });
    
        function applyMode(mode) {
            const elementsToToggle = [
                'body', '.changeBotton','#td_answer',
                '.footer'
            ];
    
            if (mode === 'lightmode') {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).addClass('lightmode');
                });
            } else {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).removeClass('lightmode');
                });
            }
        }

    })();

    setTimeout(function() {
        $('body').removeClass('no-transition');
    }, 500); // 100ms 후에 제거

  
 // 무한 루프를 피하기 위해 일정한 최대 값 설정
 let maxAttempts = 10; 
 let counter = 0;

 while ($('#q_content_' + counter).length && counter < maxAttempts) {
     $('#q_content_' + counter).css('color', 'white');
     counter++;
 }
    

});
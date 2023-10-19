 /* 23.10.11. 이재황세무사 : changeBTN 및 기능 추가*/
 $(document).ready(function(){
    $('body').addClass('no-transition');

    //lnb
    (function () {         
        var $open = $('.lnb_open');
        var $close = $('.lnb .close, .body_cover');
        var $lnb = $('.lnb');
        var $li_a = $lnb.find('li>a');
        var $cover = $('.body_cover');
        var $changeBTN =$('.changeBotton')
        var speed=300;
        $open.on('click', function () {
            $lnb.addClass('on');
            $cover.addClass('on');
        });
        
        $close.on('click', function () {
            $lnb.removeClass('on');
            $cover.removeClass('on');
        });

        $li_a.on('click', function (e) {
            var _parent=$(this).parent();
            if(_parent.find('.sub').length>0){					
                e.preventDefault();
                $(this).parent().toggleClass('on').find('.sub').slideToggle(speed);
                $(this).parent().siblings().removeClass('on').find('.sub').slideUp(speed);			
            }
        });

        // 23.10.12. 이재황 세무사 : 페이지 로딩 시 저장된 모드 상태를 적용합니다.
        applyMode(localStorage.getItem('mode'));
        $changeBTN.on('click', function() {
            const currentMode = localStorage.getItem('mode') === 'lightmode' ? 'default' : 'lightmode';
            localStorage.setItem('mode', currentMode);
            
            applyMode(currentMode);
        });
    
        function applyMode(mode) {
            const elementsToToggle = [
                'body', '#header', '.header', '.box', 
                '.changeBotton', '.footer', '.pagesection', 
                '.title', '.highlight', '#cafeLink', '.main.index', 
                '.main_lightmode', '.scroll-bar', '.lnb',
                '.changeBotton','.lightmode_Text','.heavymode_Text',];
    
            if (mode === 'lightmode') {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).addClass('lightmode');
                });
                $('#darkIcon').hide();
                $('#whiteIcon').show();
            } else {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).removeClass('lightmode');
                });
                $('#whiteIcon').hide();
                $('#darkIcon').show();
            }
        }

    })();

    setTimeout(function() {
        $('body').removeClass('no-transition');
    }, 500); // 100ms 후에 제거

  

    

});
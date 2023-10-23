 /* 23.10.11. 이재황세무사 : changeBTN 및 기능 추가*/
 $(document).ready(function(){
    $('body').addClass('no-transition');

    //lnb
    (function () {         
      
        var $changeBTN =$('#div_difficulty')
       
        applyMode(localStorage.getItem('mode'));
        $changeBTN.on('click', function() {
            const currentMode = localStorage.getItem('mode') === 'lightmode' ? 'default' : 'lightmode';
            localStorage.setItem('mode', currentMode);
            
            applyMode(currentMode);
        });
    
        function applyMode(mode) {
            const elementsToToggle = [
                'body', '.changeBotton','#td_answer',
                '.footer'];
    
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
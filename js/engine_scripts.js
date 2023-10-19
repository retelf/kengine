 /* 23.10.11. 이재황세무사 : changeBTN 및 기능 추가*/
 $(document).ready(function(){
    $('body').addClass('no-transition');

    //lnb
    (function () {         
      
        var $changeBTN =$('.changeBotton')
       
        applyMode(localStorage.getItem('mode'));
        $changeBTN.on('click', function() {
            const currentMode = localStorage.getItem('mode') === 'lightmode' ? 'default' : 'lightmode';
            localStorage.setItem('mode', currentMode);
            
            applyMode(currentMode);
        });
    
        function applyMode(mode) {
            const elementsToToggle = [
                'body', '.changeBotton'];
    
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

  

    

});
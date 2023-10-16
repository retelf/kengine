 /* 23.10.11. 이재황세무사 : floatingbutton 및 기능 추가*/
 $(document).ready(function(){
    $('body').addClass('no-transition');

    //lnb
    (function () {         
        var $open = $('.lnb_open');
        var $close = $('.lnb .close, .body_cover');
        var $lnb = $('.lnb');
        var $li_a = $lnb.find('li>a');
        var $cover = $('.body_cover');
        var $floatingButton =$('#floatingButton')
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
        $floatingButton.on('click', function() {
            const currentMode = localStorage.getItem('mode') === 'whitemode' ? 'default' : 'whitemode';
            localStorage.setItem('mode', currentMode);
            
            applyMode(currentMode);
        });
    
        function applyMode(mode) {
            const elementsToToggle = ['body', '.header', '.box', '#floatingButton', '.footer', '.pagesection', '.title', '.highlight', '#cafeLink'];
    
            if (mode === 'whitemode') {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).addClass('whitemode');
                });
                $('#darkIcon').hide();
                $('#whiteIcon').show();
            } else {
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).removeClass('whitemode');
                });
                $('#whiteIcon').hide();
                $('#darkIcon').show();
            }
        }

    })();

    setTimeout(function() {
        $('body').removeClass('no-transition');
    }, 500); // 100ms 후에 제거

    /* 23.10.15. 이재황 세무사 : 마우스 오버시 특정 기능 추가 */
    var spanElements = document.querySelectorAll(".text_container span");
    var pElements = document.querySelectorAll(".text_container span p");
   
   
    let texts = [
        'KNOWLEDGE ENGINE : 지식기반 엔진\n각 분야의 전문가들에 의해 쌓이는 검증된 지식 데이터와 그와 연결되는 정보...',
        '인터넷에 자유로이 퍼져있는 잘못된 정보를 수집하지 않습니다.\n각 분야의 전문가들이 체계적으로 정리한 지식이 K엔진 데이터의 기반입니다.',
        '역사적으로 지식들은 "책"이라는 형태로 정제되어왔습니다. \n책은 인류가 지식의 연결관계를 체계적으로 저장한 자료입니다.\nK엔진은 바로 이러한 체계를 기반으로 합니다.',
        'K엔진은 실직자를 만들지 않습니다. \n전문지식을 가진 인력과의 상생을 추구하며, \n이러한 집단지성이 K엔진에 들어옴으로써 인하여 인류는 한층 더 진보하게 됩니다.',
        'K엔진은 모든 나라의 언어로 번역됩니다. \n전 세계에 지식은 각각의 나라에서 체계적으로 정리하게 됩니다.\n그런 지식은 모든 언어로 번역되어 그 어떤 나라의 사람이라도 다가갈 수 있게 됩니다.'
    ];

    function typeText(element, text) {
        let index = 0;
        
        // 커서 엘리먼트 생성
        const cursor = document.createElement('span');
        cursor.classList.add('cursor');
        cursor.innerText = '|';
        element.appendChild(cursor);
    
        const interval = setInterval(() => {
            if (index < text.length) {
                cursor.before(text.charAt(index));  // 현재 문자를 커서 앞에 추가
                index++;
            } else {
                clearInterval(interval);  // 인터벌 정지
                cursor.style.display = 'none';  // 커서 숨기기

            }
        }, 70); // 타이핑 속도
    }
    
    
    
    
// 스크롤 이벤트와 함께 동작하는 함수
function checkVisibility(elements, delay) {
    setTimeout(() => {
        elements.forEach((element, idx) => {
            let rect = element.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // element is in view
                element.style.opacity = "1";    
                let pElement = element.querySelector('p');
                if (pElement && !pElement.getAttribute('data-typed')) {
                    typeText(pElement, texts[idx]);
                    pElement.setAttribute('data-typed', 'true');
                }            
            } else {
                // element is not in view
                element.style.opacity = "0";
            }
        });
    }, delay);
}

// 페이지 로딩 후 지정된 시간 후에 각 요소의 가시성 체크
checkVisibility(spanElements, 1000);
checkVisibility(pElements, 2000);

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
    checkVisibility(spanElements, 0);
    checkVisibility(pElements, 0);
});


document.addEventListener('DOMContentLoaded', function () {
    // 비디오 엘리먼트를 선택합니다.
    const videoElement = document.querySelector('.video video');

    // 옵션을 설정합니다.
    const options = {
        root: null, // 뷰포트를 기준으로
        rootMargin: '0px',
        threshold: 0.5 // 요소의 50%가 보일 때 콜백 함수가 실행되도록 합니다.
    };
    // 콜백 함수를 정의합니다.
    const callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // 요소가 뷰포트에 보이면
                videoElement.play(); // 비디오 재생
            } else {
                videoElement.pause(); // 비디오 일시정지
            }
        });
    };
    // Intersection Observer 객체를 생성합니다.
    const observer = new IntersectionObserver(callback, options);
    // 관찰 대상으로 비디오를 설정합니다.
    observer.observe(videoElement);
});

});
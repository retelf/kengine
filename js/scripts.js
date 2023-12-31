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
        var $changeBTN =$('.changeImg')
        var speed=300;

        $('.logo a').on('click', function(event) {
            $('.nav li').removeClass('active');
            localStorage.removeItem('activeLiIndex');
        })
        $('.nav').on('click', 'li, li a, li a span', function(event) {
            // 모든 li에서 'active' 클래스 제거
            $('.nav li').removeClass('active');
            
            let targetLi;
            // 클릭된 li에 'active' 클래스 추가
            if ($(event.target).is('li')) {
                targetLi = $(event.target);
            } else {
                targetLi = $(event.target).closest('li');
            }
            targetLi.addClass('active');
        
            // 클릭된 li의 인덱스를 localStorage에 저장
            localStorage.setItem('activeLiIndex', targetLi.index());
        });
        function applyActiveState() {
            const activeLiIndex = localStorage.getItem('activeLiIndex');
            if (activeLiIndex !== null) {
                $('.nav li').eq(activeLiIndex).addClass('active');
            }
        }
        applyActiveState();

        
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
                '.changeBotton','.lightmode_Text','.heavymode_Text',
                '.engineBotton', '.page04_2', '.page04_1',
                '.mainTitle', '.footnote_line', 'video',
                '.scroll-bar-highlight', '.scroll-bar-bg',
                '.video_Top','.active','.gotoOS','.changeImg'];
    
            if (mode === 'lightmode') {
                $('.header').css('background-color', 'rgba(255,255,255,1)');
                $('.changeImg_lightmode').css('display','block')
                $.each(elementsToToggle, function(index, selector) {
                    $(selector).addClass('lightmode');
                });
            } else {
                $('.header').css('background-color', 'rgba(0,0,0,0.3)');
                $('.changeImg_lightmode').css('display','none')

                $.each(elementsToToggle, function(index, selector) {
                    $(selector).removeClass('lightmode');
                });
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
        'KNOWLEDGE ENGINE: Knowledge-based Engine\nValidated knowledge data accumulated by experts in each field and connected information...',
        'We do not collect incorrect information freely distributed on the internet.\nThe foundation of KEngine data is knowledge systematically organized by experts in various fields.',
        'Historically, knowledge has been refined in the form of "books".\nBooks are materials where humanity has systematically stored the interrelations of knowledge.\nKEngine is based on such a system.',
        'KEngine does not create unemployed individuals.\nIt seeks symbiosis with knowledgeable professionals,\nand through such collective intelligence coming into KEngine, humanity advances even further.',
        'KEngine is translated into every country`s language.\nKnowledge is systematically organized in each country around the world.\nSuch knowledge is translated into all languages, making it accessible to anyone, regardless of their country.'
    ];
    
    let texts_KOR = [
        'KNOWLEDGE ENGINE : 지식기반 엔진\n각 분야의 전문가들에 의해 쌓이는 검증된 지식 데이터와 그와 연결되는 정보...',
        '인터넷에 자유로이 퍼져있는 잘못된 정보를 수집하지 않습니다.\n각 분야의 전문가들이 체계적으로 정리한 지식이 K엔진 데이터의 기반입니다.',
        '역사적으로 지식들은 "책"이라는 형태로 정제되어왔습니다. \n책은 인류가 지식의 연결관계를 체계적으로 저장한 자료입니다.\nK엔진은 바로 이러한 체계를 기반으로 합니다.',
        'K엔진은 실직자를 만들지 않습니다. \n전문지식을 가진 인력과의 상생을 추구하며, \n이러한 집단지성이 K엔진에 들어옴으로써 인하여 인류는 한층 더 진보하게 됩니다.',
        'K엔진은 모든 나라의 언어로 번역됩니다. \n전 세계에 지식은 각각의 나라에서 체계적으로 정리하게 됩니다.\n그런 지식은 모든 언어로 번역되어 그 어떤 나라의 사람이라도 다가갈 수 있게 됩니다.',

    ];

    function typeText(element, text) {
        if (typeof text !== 'string') {
            return;
        }
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
    $(window).scroll(function() {
        checkVisibility(spanElements, 0);
        checkVisibility(pElements, 0);
    });




    var scrollTimeout;  // 스크롤 후 일정 시간을 계산하기 위한 변수

    $(document).on('scroll', function() {
            // .main.index.lightmode 가 존재하면 아무런 동작도 수행하지 않음
    if ($('.main.index.lightmode').length) {
        return;
    }    

        var currentScrollTop = $(this).scrollTop();
        
        var windowWidth = $(window).width(); // 현재 화면의 너비를 가져옵니다.

        if (currentScrollTop != 0){
            $('.header').not('.lightmode').css('background-color', 'rgba(0,0,0,0.8)');
            $('.header.lightmode').css('background-color','rgba(255,255,255,0.9)')
        } else {
            $('.header').not('.lightmode').css('background-color','rgba(0,0,0,0.3)')
            $('.header.lightmode').css('background-color','rgba(255,255,255,1)')

        }

        
            var documentHeight = $(document).height();
            var windowHeight = $(window).height();
            var currentScrollTop = $(this).scrollTop();
        
            var scrollPercentage = currentScrollTop / (documentHeight - windowHeight);
        
            // scroll-bar의 높이에 대한 스크롤 위치를 계산합니다.
            var highlightPosition = scrollPercentage * (windowHeight - $('.scroll-bar-highlight').height());
        
            $('.scroll-bar-highlight').css('top', highlightPosition + 'px');
        
            if (currentScrollTop !== lastScrollTop) {
                // 스크롤 값이 변경될 때
                $('.scroll-bar').addClass('scrolled');
        
                // 이전에 설정된 타이머가 있다면 초기화
                clearTimeout(scrollTimeout);
        
                // 일정 시간 후 클래스 제거
                scrollTimeout = setTimeout(function() {
                    $('.scroll-bar').removeClass('scrolled');
                }, 300);
            }    

        // 현재 스크롤 위치 기록
        lastScrollTop = currentScrollTop;
    });

    $(document).on('scroll', function() {
            // .main.index.lightmode 가 존재하면 아무런 동작도 수행하지 않음
        if ($('.main.index.lightmode').length) {
            return;
        }

           
        var currentScrollTop = $(this).scrollTop();
            
        lastScrollTop = currentScrollTop;
    });

    var lastScrollTop = 0;  // 초기 스크롤 위치



    var currentIndex = -1;  // 초기 인덱스 설정
    var typeTextElements = $('.scroll-to');  
    var isAnimating = false;  // 애니메이션 중인지 확인하는 플래그


    /* j쿼리로 불가능한 항목 어쩔수없이 js로 동작 */
    document.addEventListener('mousewheel', handleScroll, { passive: false });
    document.addEventListener('DOMMouseScroll', handleScroll, { passive: false });

    function handleScroll(event) {
        if ($('.main.index.lightmode').length) {
            return;
        }
    
        if (isAnimating) {
            event.preventDefault();
            return;
        }
    
        var wheelDelta = event.wheelDelta;
        var detail = event.detail;
    
        if (wheelDelta < 0 || detail > 0) { // 아래로 스크롤
            currentIndex++;
            if (currentIndex >= typeTextElements.length) {
                currentIndex = typeTextElements.length - 1;
                return;
            }
        } else { // 위로 스크롤
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = 0;
                return;
            }
        }
    
        var targetTop = $(typeTextElements[currentIndex]).offset().top - ($(window).height() / 2) + ($(typeTextElements[currentIndex]).height() / 2);
    
        isAnimating = true;
    
        $('html, body').stop().animate({
            scrollTop: targetTop
        }, 500, function() {
            setTimeout(function() {
                isAnimating = false;
            }, 500);
        });
    
        event.preventDefault();
    }
    



    

});
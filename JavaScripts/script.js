// 메뉴
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("headertop").style.top = "0";
    } else {
        document.getElementById("headertop").style.top = "-60px";
    }
    prevScrollpos = currentScrollpos;
}


// 슬라이드쇼
const swiper1 = new Swiper('.mySwiper1', {
    // Optional parameters
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    speed : 1000,
    slidesPerView : 'auto',
    loop: true,
    loopAdditionalSlides : 1,
    // If we need pagination
    pagination: {
      el: '.mySwiper1 .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.mySwiper1 .swiper-button-next',
      prevEl: '.mySwiper1 .swiper-button-prev',
    },
  
  });

  //랭킹
  const swiper2 = new Swiper('.mySwiper2', {
    // Optional parameters
    direction:'horizontal',
    spaceBetween: 24,
    slidesPerView : 'auto',
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '.mySwiper2 .swiper-button-next',
      prevEl: '.mySwiper2 .swiper-button-prev',
    },
  });

  //스페셜

  const swiper3 = new Swiper('.mySwiper3',{
    direction:'horizontal',//기본
    autoplay:{
      delay:2000,
      disableOnInteraction: false,
    },//속도1초
    loop:true,//반복
    slidesPerView: 'auto',//한번에 보이는 슬라이드 개수
    spaceBetween:24,//슬라이드 사이 여백
    navigation:{
        nextEl:'.mySwiper3 .swiper-button-next',
        prevEl:'.mySwiper3 .swiper-button-prev'
    }
})

//브랜드
const swiper4 = new Swiper('.mySwiper4',{
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
 },
 speed:3000,
 loop:true,
 slidesPerView: 6,
 observer:true, observeParents:true,
 })

//스타일
  function openStyle(evt, styleName) {
    var i, tabcontent, btn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    btn = document.getElementsByClassName("btn");
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace(" active", "");
    }
    document.getElementById(styleName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

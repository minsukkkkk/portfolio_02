$(document).ready(function () {
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 950) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on")
    }
  });
  //fullpage

  $('#fullpage').fullpage({
    //options here
    navigation: true, //false
    navigationPosition: 'left', //right
    responsiveWidth: 1024,
    autoScrolling: true,
    scrollHorizontally: true,


    //4페이지 부터 헤더 바뀜
    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;
      if (destination == 4) {
        $("#header").addClass("on");
      } else if (destination == 5) {
        $("#header").addClass("on");
      } else if (destination == 6) {
        $("#header").addClass("on");
      }

      else {
        $("#header").removeClass("on");
      }
    }

  });
  //depth2
  $(".gnb>li").mouseenter(function () {
    $("#header").addClass("on")
    $(".depth2, .depth2_bg").stop().fadeIn();
  });
  $(".gnb>li").mouseleave(function () {
    $("#header").removeClass("on");
    $(".depth2, .depth2_bg").stop().fadeOut();
  });
  $(".until").mouseenter(function () {
    $("#header").addClass("on")
  });
  $(".until").mouseleave(function () {
    $("#header").removeClass("on");
  });

  // 모바일 2차 메뉴
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".mgnb").animate({
    });
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mgnb").animate({
    });
  });
  $(".mgnb > ul >li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  // 검색
  $(".btn_sch").click(function () {
    $(this).toggleClass("on");
    $(".search").fadeToggle();
    $("#header").toggleClass("active");
  });



  // mv
  const mv = new Swiper(".mv", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: { //슬라이드 갯수(하단 불릿기호) -태그 추가
      el: ".swiper-pagination",
      type: "fraction", //"bullet(하단점)", "fraction"하단(숫자), "progressbar"
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },

  });
  //business
  $("#business ul li:nth-child(1)").addClass("active")
  $("#business ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active")
  });

  // mg_img
  const mg_img = new Swiper(".mg_img", {
    loop: true,
    /*autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },*/
    speed: 1000,
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },
    slidesPerView: 2, //모바일에서 보이는개수
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

  });
  // news
  const news_img = new Swiper(".news_img", {
    loop: true,
    /*autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },*/
    speed: 1000,
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },
    slidesPerView: 2, //모바일에서 보이는개수
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 4,
        spaceBetween: 21,
      },
    },
  });


});
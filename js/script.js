jQuery(function ($) { 
  // アコーディオンメニューの開閉動作
  $('.is-AccordionTitle').on('click', function() {
    var findElm = $(this).next(".accordion-content");
    $(findElm).toggleClass('open');//アコーディオンの上下動作
    $(this).toggleClass('active');
  });

  let mySwiper = new Swiper ('#works-swiper', {
    // オプション設定
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true, // アクティブなスライドを中央に配置
    //オートプレイ
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    }, 
    navigation: {
      nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
      prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
    },  
  });
});
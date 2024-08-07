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
      delay: 3000,
      disableOnInteraction: false,
    }, 
    navigation: {
      nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
      prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
    },  
  });
  let flowSwiper = new Swiper ('#flow-swiper', {
    // オプション設定
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true, // アクティブなスライドを中央に配置
    //オートプレイ
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },  
    //ページネーション表示設定
    pagination: {
      el: '#flow-swiper_pagination', //ページネーション要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
  });

  let accordionDetails = '.js-details';
  let accordionSummary = '.js-details-summary';
  let accordionContent = '.js-details-content';
  let speed = 300

  $(accordionSummary).each(function() {
    $(this).on("click", function(event) {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // summaryにis-activeクラスを切り替え
      $(this).toggleClass("is-active");

      if ($(this).parent($(accordionDetails)).attr("open")) {
        // アコーディオンを閉じるときの処理
        $(this).nextAll($(accordionContent)).slideUp(speed, function() {
          // アニメーションの完了後にopen属性を取り除く
          $(this).parent($(accordionDetails)).removeAttr("open");
        });
      } else {
        // アコーディオンを開くときの処理
        // open属性を付ける
        $(this).parent($(accordionDetails)).attr("open", "true");
        // いったんdisplay:none;してからslideDownで開く
        $(this).nextAll($(accordionContent)).hide().slideDown(speed);
      }
    });
  });

  // #js-fixed-bottomのフェードイン処理
  const mv = document.getElementById('fv');
  const fixedBottom = document.querySelector('.js-fixed-bottom');

  function checkPosition() {
    const mvBottom = mv.getBoundingClientRect().bottom;
    if (mvBottom < 0) {
      fixedBottom.classList.add('show');
    } else {
      fixedBottom.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  // 初回チェック
  checkPosition();
});

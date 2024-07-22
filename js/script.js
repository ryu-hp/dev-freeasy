jQuery(function ($) { 
  // アコーディオンメニューの開閉動作
  $('.is-AccordionTitle').on('click', function() {
    var findElm = $(this).next(".accordion-content");
    $(findElm).toggleClass('open');//アコーディオンの上下動作
    $(this).toggleClass('active');
  });
});
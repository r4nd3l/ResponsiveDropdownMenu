// Default DevCorner JavaScript Setting
$("nav div").click(function(){
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").click(function(){
  $("ul ul").slideUp();
  $(this).find('ul').stop().slideToggle();
});

$(window).resize(function(){
  if($(window).eidth() > 768){
    $("ul").removeAttr('style');
  }
});

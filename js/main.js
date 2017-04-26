$(document).ready(function(){
  function loadwow() {
    new WOW().init();
  }

  loadwow();



  $('.kai_banner_container').kaiBanner({
    minWidth:1200,
    intervalTime:10000,
    highlightClass:'highlight'
  });

  $('.kai_banner2_container').kaiBanner();

  function scrollDown(selector){
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  }

  $('#sec1').click(function(){
      scrollDown('#sc1');
  })

  $('#sec2').click(function(){
      scrollDown('#sc2');
  })

  $('#sec3').click(function(){
      scrollDown('#sc3');
  })

  $('#sec4').click(function(){
      scrollDown('#sc4');
  })


})

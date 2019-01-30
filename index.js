function handlePetalHover() {
  $('.petals').hover(
    function(){ 
      $('.petal-fact').addClass('slide-left');
      $('.birds-and-bees-fact').addClass('slide-right');
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').addClass('stop-animation');
   },
    function(){ 
      $('.petal-fact').removeClass('slide-left');
      $('.birds-and-bees-fact').removeClass('slide-right'); 
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').removeClass('stop-animation');
    }
  )
}

function handleFlowerHover() {
  $('.active-flower').hover(
    function(){ 
      $('.flower-fact').addClass('slide-right');
      $('.active-flower, .petals').addClass('js-highlight');
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').addClass('stop-animation');
   },
    function(){ 
      $('.flower-fact').removeClass('slide-right'); 
      $('.active-flower, .petals').removeClass('js-highlight');
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').removeClass('stop-animation');
    }
  )
}

function handleSeedsHover() {
  $('.active-seeds, .seeds').hover(
    function(){ 
      $('.seeds-fact').addClass('slide-left');
      $('.birds-and-bees-fact').addClass('slide-right');
      $('.seeds').addClass('js-highlight');
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').addClass('stop-animation');
   },
    function(){ 
      $('.seeds-fact').removeClass('slide-left');
      $('.birds-and-bees-fact').removeClass('slide-right'); 
      $('.seeds').removeClass('js-highlight');
      $('.sunflower-head, .entire-sunflower, .active-flower, .seeds, .active-seeds').removeClass('stop-animation');
    }
  )
}

function initializeApp() {
  handlePetalHover();
  handleFlowerHover();
  handleSeedsHover();
}

$(initializeApp);

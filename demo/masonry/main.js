var container = $('#container');

container.imagesLoaded(function(){
  container.masonry({
    itemSelector : '.box',
    isAnimated: !Modernizr.csstransitions
  });
});
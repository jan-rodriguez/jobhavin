$(document).ready(
  function() {
    const yes_div = $("#yes");
    const yes_height = yes_div.height();
    const yes_width = yes_div.width();

    yes_div.click(function(evt) {
      var audio = new Audio('/audio/woohoo.mp3');
      audio.play();
    });

    $(document).on('mousemove', function(e){
      yes_div.css({
        left:  e.clientX - (yes_width/2),
        top:   e.clientY - (yes_height/2)
      });
  });
});

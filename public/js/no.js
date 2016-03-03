$(document).ready(
  function() {
    const no_div = $("#no");
    const no_height = no_div.height();
    const no_width = no_div.width();

    $(document).on('mousemove', function(e){
      no_div.css({
        left:  e.clientX - (no_width/2),
        top:   e.clientY - (no_height/2)
      });
  });
});

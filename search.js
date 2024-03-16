$(document).ready(function() {
  $('.search_bar').on('input', function() {
    if ($(this).val()) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});

<<<<<<< HEAD


=======
>>>>>>> ab0ee1a52f0cdf0a19ab131e94f88d7324f371fb
/* stick carousel - obras */
$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});

/* formulário */
$(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

var $rectangle = $('.rectangle');
var $form = $('form');
var $input = $('#todo');

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    $theCircle.css('list', $input.val());
    
    var $theH2 = $('<h2>');
    $theH2.html($input.val());
    $theCircle.append($theH2);
    
    $input.val('');
});


//var $rectangle = $('.rectangle');
var $form = $('form');
var $input = $('#todo');

//$form.on('submit', function (eventObject) {
    //eventObject.preventDefault();
    
    //$rectangle.css('todo', $input.val());
    
    //var $theH2 = $('<h2>');
    //$theH2.html($input.val());
    //$rectangle.append($theH2);
    
    //$input.val('');
//});

var $add = $('.add');
var $list = $('.list');

$add.on('click', function (eventObject) {
    eventObject.preventDefault();
    
    var $theH2 = $('<h2>');
    $list.append($input.val());
    $rectangle.append($theH2);
    
    $input.val('');
});
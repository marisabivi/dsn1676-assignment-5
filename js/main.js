var $toDoList = $('.todo');

var $form = $('form');
var $input = $('#todo');
var $ul = $('.ul');
var $li = $('<.li>');


$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    $ul.css('ul', $input.val());
    
    var $li = $('<li>');
    $li.html($input.val());
    $ul.append($li);
    $input.val('');

    $ul.on('click', 'li', function () {
        $('this').toggleClass('done');
    });
    
    var $inputRemove = $('<button class="remove xbutton">x</button>');
        
    $inputRemove.on('click', function () {
            $li.remove('li');
    });

     $li.on('click', function () {
        $(this).addClass ('done');
    });
    
    $li.append($inputRemove);
});


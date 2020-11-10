$(document).ready(function(){

    $('#green').click(function(){
        $('#text').css('color', 'green');
    });
    $('#red').click(function(){
        $('#text').css('color','red')
    });
    $('#blue').click(function(){
        $('#text').css('color','blue')
    });
});


$('color').click(function(){
    let colorButton = $(this).attr('id');
    $('#text').css('color', colorButton);
});
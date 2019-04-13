var showDiv = function (data) {
    if (data === 'home') {
        $('#home').show();
        $('#about').hide();
        $('#contact').hide();
        $('#activeHome').addClass('active');
        $('#activeAbout').removeClass('active');
        $('#activeBlog').removeClass('active')

    }
    else if (data == 'about') {
        $('#home').hide();
        $('#about').show();
        $('#contact').hide();
        $('#activeAbout').addClass('active')
        $('#activeHome').removeClass('active');
        $('#activeBlog').removeClass('active')
    }
    else {
        $('#home').hide();
        $('#about').hide();
        $('#contact').show();
        $('#activeBlog').addClass('active')
        $('#activeAbout').removeClass('active');
        $('#activeHome').removeClass('active')
    }
}

$( document ).ready(function() {
    $('#home').show();
        $('#about').hide();
        $('#contact').hide();
        $('#activeHome').addClass('active')
        $('#activeAbout').removeClass('active');
        $('#activeBlog').removeClass('active')
});


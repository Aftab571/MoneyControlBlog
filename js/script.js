var showDiv = function (data) {
    if (data === 'home') {
        $('#home').show();
        $('#about').hide();
        $('#blog').hide();
        $('#activeHome').addClass('active');
        $('#activeAbout').removeClass('active');
        $('#activeBlog').removeClass('active')

    }
    else if (data == 'about') {
        $('#home').hide();
        $('#about').show();
        $('#blog').hide();
        $('#activeAbout').addClass('active')
        $('#activeHome').removeClass('active');
        $('#activeBlog').removeClass('active')
    }
    else {
        $('#home').hide();
        $('#about').hide();
        $('#blog').show();
        $('#activeBlog').addClass('active')
        $('#activeAbout').removeClass('active');
        $('#activeHome').removeClass('active')
    }
}
var show_prof = function (name) {
    if (name === 'aft') {
        $("#aft_prof").show();
    }
    else if (name === 'kha') {
        $("#Kha_prof").show();
    }
    else if(name==="man"){
        $("#man_prof").show();
    }
    else{
        $("#sini_prof").show();
    }
}

$(document).ready(function(){
    $(".collapseSty").on('click',function(){
        $(this).find(".toggler").toggleClass("fa-plus fa-minus");
      });
})



$(document).ready(function () {
    $('#home').show();
    $("#aft_prof").hide();
    $("#Kha_prof").hide();
    $("#man_prof").hide();
    $("#sini_prof").hide();
    $('#about').hide();
    $('#blog').hide();
    $('#activeHome').addClass('active')
    $('#activeAbout').removeClass('active');
    $('#activeBlog').removeClass('active')
});


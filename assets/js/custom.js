function myValidation() {
    var name = document.forms['contactForm']['name'].value;
    var email = document.forms['contactForm']['email'].value;
    var phone = document.forms['contactForm']['phone'].value;
    var description = document.forms['contactForm']['description'].value;
    var error = [];

    if (name == '' || name.lenght < 3) {
        error[0] = "Name must be at least 3 letter"
        document.getElementById('name-error').innerHTML = error[0];
    }
    else {
        document.getElementById('name-error').innerHTML = '';
    }
    if (email == '' || email.lenght < 10) {
        error[1] = "Insert a valid Email"
        document.getElementById('email-error').innerHTML = error[1];
    }
    else {
        document.getElementById('email-error').innerHTML = '';
    }
    if (phone == '' || phone.lenght < 11) {
        error[2] = "Insert a valid phone number"
        document.getElementById('phone-error').innerHTML = error[2];
    }
    else {
        document.getElementById('phone-error').innerHTML = '';
    }
    if (description == '' || description.lenght < 50) {
        error[3] = "Description must be at least 50 letter"
        document.getElementById('description-error').innerHTML = error[3];
    }
    else {
        document.getElementById('description-error').innerHTML = '';
    }

    if (error.length > 0) {
        return false;
    }
}
function myFocus(x) {
    x.style.background = '#ffffff94';
}








$(document).ready(function () {
    // upper button scroll start=========
    $(window).scroll(function () {
        var x = $(window).scrollTop();
        if (x > 900) {
            $('#upper').fadeIn(1000);
        }
        else {
            $('#upper').fadeOut(1000);
        }

    });
    $('#upper').click(function () {
        $('html').animate({ scrollTop: 0 }, 2000);

    });

    // menu bar start =========================
    $('#mobile-icon').click(function () {
        $('#mainmenu ul').slideToggle(1000);
    });
    $(window).resize(function () {
        if ($(window).width() > 576) {
            $('#mainmenu ul').show();
        }
        else {
            $('#mainmenu ul').hide();
        }
    });

    // ==============  menu bar active=============
    $('#mainmenu').on('click', 'li',function () {
        $('#mainmenu li.active').removeClass('active');
        $(this).addClass('active');
    });



});
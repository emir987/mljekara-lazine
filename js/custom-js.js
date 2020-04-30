$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 2
        }
    }

})

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

$('.collapse').on('shown.bs.collapse', function () {
    $('#footer').removeClass("footer-margin");
})

$('.collapse').on('hide.bs.collapse', function () {
    $('#footer').addClass("footer-margin");
})


function maxLengthCheck(object) {
    if (object.value.length > object.max.length)
        object.value = object.value.slice(0, object.max.length)
}


function isNumeric(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}




function switchItems(collapseItem) {

    //cards-name
    const id = "#" + $(collapseItem).attr('id') + "-cards";

    $(".zamjena").each(function () {
        $(this).addClass("inactive");
    });
    $(id).removeClass("inactive");

    //active-collapse-button
    $(".buttons-toggle").each(function () {
        $(this).removeClass("btn-collapse-active");
    });
    $(collapseItem).addClass('btn-collapse-active');


    //animation pop in
    $(".item-card").each(function () {
        $(this).addClass("popOver");

        $(this).delay(1000).queue(function () {
            $(this).removeClass("popOver").dequeue();
        });
    });

}

//modal login...

$(document).ready(function () {
    $('select').niceSelect();
});


for (i = new Date().getFullYear(); i > 1950; i--) {
    $('#yearpicker').append(`<option value="${i}">${i}</option>`)
}

for (i = 1; i <= 31; i++) {
    $('#datepicker').append($('<option />').val(i).html(i));
}




$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});


$(document).ready(function () {
    let noOfItems = localStorage.length;
    $('#cart-counter').html(noOfItems);
});


//validacija kontakt-forma

document.getElementById("kontakt-submit-forma").addEventListener("click", function (event) {
    event.preventDefault();

    //email
    const emailInput = $("#email-kontakt-forma");
    const email = emailInput.val();
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = false;

    isValid = emailRe.test(email);

    if (isValid) {
        emailInput.addClass("is-valid");
        emailInput.removeClass("is-invalid");
    } else {
        emailInput.addClass("is-invalid");
        emailInput.removeClass("is-valid");
    }
});



//validacija register

document.getElementById("contact-submit").addEventListener("click", function (event) {
    event.preventDefault();

    //email
    const emailInput = $("#email");
    const email = emailInput.val();
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = false;

    isValid = emailRe.test(email);

    if (isValid) {
        emailInput.addClass("is-valid");
        emailInput.removeClass("is-invalid");
    } else {
        emailInput.addClass("is-invalid");
        emailInput.removeClass("is-valid");
    }

    //password
    const passInput = $("#password");
    const password = passInput.val();

    if (password.length >= 6) {
        passInput.addClass("is-valid");
        passInput.removeClass("is-invalid");
    } else {
        passInput.addClass("is-invalid");
        passInput.removeClass("is-valid");
    }

    //ime prezime
    const imeInput = $("#ime-reg");
    const ime = imeInput.val();

    if (ime.length >= 3) {
        imeInput.addClass("is-valid");
        imeInput.removeClass("is-invalid");
    } else {
        imeInput.addClass("is-invalid");
        imeInput.removeClass("is-valid");
    }

    const prezimeInput = $("#prezime-reg");
    const prezime = prezimeInput.val();

    if (prezime.length >= 3) {
        prezimeInput.addClass("is-valid");
        prezimeInput.removeClass("is-invalid");
    } else {
        prezimeInput.addClass("is-invalid");
        prezimeInput.removeClass("is-valid");
    }


});



//validacija promjena lozinke

document.getElementById("promjena-lozinke-submit").addEventListener("click", function (event) {
    event.preventDefault();

    //password
    const passInput = $("#password-novi");
    const password = passInput.val();

    if (password.length >= 6) {
        passInput.addClass("is-valid");
        passInput.removeClass("is-invalid");
    } else {
        passInput.addClass("is-invalid");
        passInput.removeClass("is-valid");
    }

    //password novi
    const passNoviInput = $("#password-novi-potvrda");
    const passNovi = passNoviInput.val();

    if (passNovi == password && passNovi.length >= 6) {
        passNoviInput.addClass("is-valid");
        passNoviInput.removeClass("is-invalid");
    } else {
        passNoviInput.addClass("is-invalid");
        passNoviInput.removeClass("is-valid");
    }


});


// validacija login
document.getElementById("prijava-submit").addEventListener("click", function (event) {
    event.preventDefault();

    //email
    const emailInput = $("#email-login");
    const email = emailInput.val();
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = false;

    isValid = emailRe.test(email);
    console.log(isValid)

    if (isValid) {
        emailInput.addClass("is-valid");
        emailInput.removeClass("is-invalid");
    } else {
        emailInput.addClass("is-invalid");
        emailInput.removeClass("is-valid");
    }

    //password
    // const passInput = $("#password");
    // const password = passInput.val();

    // console.log(password)
    // let isPassValid = false;

    // if (password.length < 6) {
    //     isPassValid = false;
    // }

    // if (isPassValid) {
    //     passInput.addClass("is-valid");
    //     passInput.removeClass("is-invalid");
    // } else {
    //     passInput.addClass("is-invalid");
    //     passInput.removeClass("is-valid");
    // }

});
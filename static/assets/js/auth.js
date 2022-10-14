// Password Validation

console.log("I am here!!!");

$(document).on('focus keyup', '#password', function(e) {
    $(this).parents('li').find('.required-txt').remove();
    if (this.value.length < 8) {
        $(this).after(`
            <div class="required-txt">Password must be at least 8 characters</div>
        `);
    }
});

$(document).on('focus keyup', '#passwordConfirm', function(e) {
    $(this).parents('li').find('.required-txt').remove();
    if (this.value !== $('#password').val()) {
        $(this).after(`
            <div class="required-txt">Password does not match</div>
        `);
    }
});


$(document).on('focus keyup', '#passwordConfirm', function(e) {
    $(this).parents('li').find('.required-txt').remove();
    if (this.value !== $('#password').val()) {
        $(this).after(`
            <div class="required-txt">Password does not match</div>
        `);
    }
});

function selectNextTabbableOrFocusable(selector){
    console.log("dddooojjjjoookkknnnnooommm");
    var selectables = $(selector);
    var current = $(':focus');
    var nextIndex = 0;
    if(current.length === 1){
        var currentIndex = selectables.index(current);
        if(currentIndex + 1 < selectables.length){
            nextIndex = currentIndex + 1;
        }
    }

    selectables.eq(nextIndex).focus();
}


$(document).on('keypress', '#code1', function(e) {
    $(code2).focus();
});
$(document).on('keypress', '#code2', function(e) {
    $(code3).focus();
});
$(document).on('keypress', '#code3', function(e) {
    $(code4).focus();
});
$(document).on('keypress', '#code4', function(e) {
    $(document).focus();
});
 

// $('#code1').keydown(function(e) {
//     // if (e.keyCode == 32) {
//         console.log("ddasdfasdf");
//         e.which = 9;
//         $(this).trigger(e);
//     // }
// });

// if (myTextHasBeenFilledWithText) {
//     // Tab to the next input after #my-text-input
//     $("#my-text-input").emulateTab();
//   }


$(document).on('click', '.view', function(e) {
    var input = $(this).parents('li').find('input')[0];
    if(input.type === 'password') {
        input.type = 'text';
        $(this).html(`
            <em><img src="../assets/img/eye-slash-solid.svg" alt="eye" /></em> Hide
        `);
    } else {
        input.type = 'password';
        $(this).html(`
            <em><img src="../assets/img/eye-solid.svg" alt="eye" /></em> Show
        `);
    }
});
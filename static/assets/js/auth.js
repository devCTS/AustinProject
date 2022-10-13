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

$(document).on('click', '.view', function(e) {
    var input = $(this).parents('li').find('input')[0];
    if(input.type === 'password') {
        input.type = 'text';
        $(this).html(`
            <em><img src="./eye-slash-solid.svg" alt="eye" /></em> Hide
        `);
    } else {
        input.type = 'password';
        $(this).html(`
            <em><img src="./eye-solid.svg" alt="eye" /></em> Show
        `);
    }
});
jQuery(document).ready(function () {
    $('#form_reset').validate({
        rules: {
            'Token': ruleRequired,
            'Cpf': ruleRequired,
            'SenhaNova': ruleRequiredPassword,
            'ConfirmarSenha': ruleConfirmPassword,
        }
    });

    $('#form_reset')[0].reset();
});

function trocarSenha() {
    const form = $('#form_reset');

    if (!form.valid())
        return;

    LoadingPage(true);

    $.ajax({
        url: '/Login/AtualizarSenhaDeslogado',
        type: 'Post',
        data: form.serialize(),
        success: function (data) {
            MessageSwal(data, false, null);
        },
        error: function (xhr) {
            MessageSwalError(xhr);
        }
    });
}

function passwordVisibility(id) {
    const password = document.getElementById(id);
    const eye = $(`#eye_${id}`)
    if (eye.hasClass("fa-eye")) {
        password.type = 'text';
        eye.removeClass("fa-eye");
        eye.addClass("fa-eye-slash");
    }
    else {
        password.type = 'password';
        eye.removeClass("fa-eye-slash");
        eye.addClass("fa-eye");
    }
}
$(document).ready(function ()
{
    loginEventos();
});

function loginEventos()
{
    mascaras();

    let validatorLogin = FormValidation.formValidation(
        document.getElementById('form_login'),
        {
            locale: 'pt_BR',
            localization: FormValidation.locales.pt_BR,

            fields: {
                'usuario': { validators: { notEmpty: {}, stringLength: { min: 14 }, cpf: {} } },
                'senha': { validators: { notEmpty: {}, passwordComplex: {} } }
            },

            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: '.fv-row',
                    eleInvalidClass: '',
                    eleValidClass: ''
                })
            }
        }
    );

    let validatorSenha = FormValidation.formValidation(
        document.getElementById('form_esquecisenha'),
        {
            locale: 'pt_BR',
            localization: FormValidation.locales.pt_BR,

            fields: {
                'usuario_esquecisenha': { validators: { notEmpty: {}, stringLength: { min: 14 }, cpf: {} } }
            },

            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: '.fv-row',
                    eleInvalidClass: '',
                    eleValidClass: ''
                })
            }
        }
    );

    $("#btn_aceitarcookie").on("click", function () {
        //Aceitar os Cookies
    });

    $("#btn_logar").on("click", function ()
    {
        validatorLogin.validate().then(function (status) {
            if (status === 'Valid') {
                logar();
            }
        });
    });

    $("#btn_esquecisenha").on("click", function ()
    {
        esqueciSenha();
    });

    $("#btn_voltarlogin").on("click", function () {
        voltarLogin();
    });

    $("#btn_gerartoken").on("click", function ()
    {
        validatorSenha.validate().then(function (status)
        {
            if (status === 'Valid')
            {
                gerarToken();
            }
        });
    });

    $("#btn_aceitartermo").on("click", function () {
        aceitarTermo();
    });
}

function logar()
{
    var usuario = $('#usuario').val();

    if (usuario === "368.969.118-40")
    {
        $("#modal_termosigilo").modal('show');
    }
    else
    {
        exibirNotificacaoErro("Login", "Não foi possível logar.<br>Usuário não localizado em nossa base de dados.");
    }

    //exibirLoading();

    //const data =
    //{
    //    "Usuario": $('#usuario').val(),
    //    "Senha": $('#senha').val()
    //};

    //const callback = (response) =>
    //{
    //    exibirNotificacao('Login', response, true);

    //    if (response.success)
    //    {
            
    //    }
    //}

    //enviarRequisicao('Login', '/Login/DoLogin', callback, 'POST', data, true, true);
}

function aceitarTermo()
{
    //exibirLoading();

    //const callback = (response) =>
    //{
    //    exibirNotificacao('Login', response, true);

    //    if (response.success)
    //    {
               location.href = "listarprocesso.html";
    //    }
    //}

    //enviarRequisicao('Login', '/Login/AceitarTermo', callback, 'POST', null, true, true);
}

function esqueciSenha()
{
    $('#usuario_esquecisenha').val('');

    $("#form_login").addClass("d-none");
    $("#form_esquecisenha").removeClass("d-none");
}

function gerarToken()
{
    //exibirLoading();

    //const data =
    //{
    //    "Usuario": $('#usuario_esquecisenha').val()
    //};

    //const callback = (response) =>
    //{
    //    exibirNotificacao('Esqueci Minha Senha', response, true);

    //    if (response.success)
    //    {
                var usuario = $('#usuario_esquecisenha').val();

                if (usuario === "368.969.118-40") {
                    exibirNotificacaoSucesso("Recuperar Senha", "E-mail enviado!<br>Acesse seu e-mail e veja as orientações para recuperar sua senha de acesso.");
                    voltarLogin();
                }
                else
                {
                    exibirNotificacaoErro("Recuperar Senha", "Não foi possível enviar o e-mail.<br>Usuário não localizado em nossa base de dados.");
                }
    //    }
    //}

    //enviarRequisicao('Login', '/Login/EsqueciSenha', callback, 'POST', data, true, true);
}

function voltarLogin()
{
    $('#usuario').val('');
    $('#senha').val('');

    $("#form_login").removeClass("d-none");
    $("#form_esquecisenha").addClass("d-none");
}

var target = document.querySelector("#kt_page");
const blockUI = new KTBlockUI(target, {
    message: '<div class="blockui-message"><span class="spinner-border text-primary"></span>Aguarde alguns instantes...</div>', zIndex: 1000
});

const customSwal = swal.mixin({
    customClass: {
        confirmButton: 'btn font-weight-bold btn-primary',
        cancelButton: 'btn font-weight-bold btn-light-primary',
        actions: 'm-0'
    },
    buttonsStyling: false,
    heightAuto: false,
    allowOutsideClick: false,
    showCancelButton: false,
    confirmButtonText: "OK",
})

jQuery(document)
    .ready(function () {
        //Bloquear scroll body ao abrir modal
        $('.modal').on('shown.bs.modal', function () {
            $("body").addClass("overflow-hidden");
            /*$("#octadesk-octachat-appchat").addClass('hide');*/
        }).on('hidden.bs.modal', function () {
            $("body").removeClass("overflow-hidden");
            //$("#octadesk-octachat-appchat").removeClass('hide');
        });

        $(".noPaste").each(function () {
            this.onpaste = function (e) {
                e.preventDefault();
            }
        });

        $(".showPassword").on('click', function () {
            const pwdId = this.getAttribute("passwordId");
            const pwdElement = $(`#${pwdId}`);
            const pwdIcon = $(`.showPassword[passwordId=${pwdId}] i`);

            if (pwdElement.attr('type') === 'password') {
                pwdElement.attr('type', 'text');
                pwdIcon.addClass("bi-eye").removeClass("bi-eye-slash");
            } else {
                pwdElement.attr('type', 'password');
                pwdIcon.addClass("bi-eye-slash").removeClass("bi-eye");
            }
        });
    });

function exibirLoading(modal = false)
{
    if (modal)
    {
        var targetModal = document.querySelector(".modal-content");

        if (KTBlockUI.getInstance(targetModal) === null) {
            blockUIModal = new KTBlockUI(targetModal, { message: '<div class="blockui-message"><span class="spinner-border text-primary"></span>Aguarde alguns instantes...</div>' });
        }

        blockUIModal.block();
    }
    else
    {
        blockUI.block();
    }
}

function ocultarLoading(modal = false)
{
    if (modal)
    {
        if (blockUIModal.isBlocked())
            blockUIModal.release();
    }
    else
    {
        if (blockUI.isBlocked())
            blockUI.release();
    }
}

function enviarRequisicao(titulo, url, callbackFunction, type = 'GET', data = null, loading = true, modal = false)
{
    $.ajax({
        url,
        type,
        data,
        success: function (response)
        {
            if (callbackFunction !== null)
                callbackFunction(response);
        },
        beforeSend: function ()
        {
            if (loading)
                exibirLoading(modal);
        },
        error: function (xhr)
        {
            exibirNotificacaoErroXhr(titulo, xhr, modal);
        }
    });
}

function exibirNotificacaoSucesso(titulo, mensagem, modal = null)
{
    customSwal.fire({
        title: titulo,
        html: `<center class="mb-10"> ${mensagem} </center>`,
        icon: "success"
    });

    ocultarLoading(modal);
}

function exibirNotificacaoErro(titulo, mensagem, modal = null) {
    customSwal.fire({
        title: titulo,
        html: `<center class="mb-10"> ${mensagem} </center>`,
        icon: "error"
    });

    ocultarLoading(modal);
}

function exibirNotificacaoErroXhr(titulo, xhr, modal = null)
{
    let mensagem = "";
    
    if (xhr.status === 401)
        location.href = "/Login";
    else if (xhr.status === 403)
        mensagem = "Não Autorizado!<br>Por favor, entre em contato com o Administrador do Sistema.";
    else if (xhr.status === 404)
        mensagem = "Método não localizado!<br>Por favor, entre em contato com o Administrador do Sistema.";
    else
        mensagem = "Ocorreu um erro na operação.<br>Por favor, entre em contato com o Administrador do Sistema.";

    customSwal.fire({
        title: titulo!== "" ? "Erro inesperado" : titulo,
        html: `<center class="mb-10"> ${mensagem} </center>`,
        icon: "error"
    });

    ocultarLoading(modal);
}

function obterLinguagemTabela()
{
    //return { url: "theme/assets/js/custom/datatable/i18n/datatable.pt-br.json" };
    return { url: "https://cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json" };
}

function GetMessageStatus(code) {
    let status = "information";

    switch (code) {
        case 200:
            status = "success";
            break;
        case 300:
            status = "warning";
            break;
        case 404:
            status = "error";
            break;
        case 500:
            status = "error";
            break;
        default:
            status = "information";
            break;
    }

    return status;

}

function AddValidation(formId, modalErrors) {
    let validator = $(formId).validate();

    for (var [fildName, text] of Object.entries(modalErrors)) {
        validator.showErrors({ [fildName]: text });
    }
}

//Utils
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function mascaras()
{
    Inputmask({ mask: "999999999", jitMasking: true }).mask(".mask_inteiro9");
    Inputmask({ mask: "999.999.999-99", jitMasking: true }).mask(".mask_cpf");
    Inputmask({ mask: "9999999-99.9999.9.99.9999", jitMasking: true }).mask(".mask_numeroprocesso");
    Inputmask({ mask: "99/99/9999", jitMasking: true }).mask(".mask_data");
    Inputmask({ mask: "99/99/9999 - 99/99/9999", jitMasking: true }).mask(".mask_dataperiodo");
}

function calendarioPeriodo()
{
    $(".datepickerrange").daterangepicker({
        showDropdowns: true,
        autoApply: true,
        autoUpdateInput: false,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"), 10),
       locale: {
            format: "DD/MM/YYYY",
            separator: " - ",
            applyLabel: "Aplicar",
            cancelLabel: "Cancelar",
            fromLabel: "De",
            toLabel: "Até",
            customRangeLabel: "Custom",
            daysOfWeek: [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "Sáb"
            ],
            monthNames: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ]
        }
    });

    $(".datepickerrange").on('apply.daterangepicker', function (ev, picker)
    {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        $(this).trigger('change');
    });

    $(".datepickerrange").on('blur', function ()
    {
        if ($(this).val() === "")
        {
            $(this).data('daterangepicker').setStartDate(moment().format('DD/MM/YYYY'));
            $(this).data('daterangepicker').setEndDate(moment().format('DD/MM/YYYY'));
        }
    });
}

function dropdownSelect(modal)
{
    $('.form-select-hide-search').select2({
        minimumResultsForSearch: -1,
        placeholder: 'Selecione uma opção',
        language: {
            noResults: function () { return "Nenhum Registro Encontrado"; }
        }
    });

    if (modal !== undefined)
    {
        $('.form-select-show-search').select2({
            dropdownParent: $(modal),
            placeholder: 'Selecione uma opção',
            language: {
                noResults: function () { return "Nenhum Registro Encontrado"; }
            }
        });
    }
    else
    {
        $('.form-select-show-search').select2({

            placeholder: 'Selecione uma opção',
            language: {
                noResults: function () { return "Nenhum Registro Encontrado"; }
            }
        });
    }
}

function forceTooltip()
{
    $('[data-bs-toggle="tooltip"]').tooltip();
}

function obterQuantidadeFiltrosAlterados(form, button, filtroInicial)
{
    var quantidadeFiltrosAlterados = filtroInicial;

    $(form).map(function () {

        var nomeCampo = $(this).attr("name");
       
        if (nomeCampo !== undefined)
        {
            var multiple = $(this).attr("multiple") !== undefined ? true : false;

            var value = $(this).val();

            if (multiple)
            {
                if (value.length > 0)
                {
                    quantidadeFiltrosAlterados += 1;
                }
            }
            else
            {
                if (value !== "")
                {
                    quantidadeFiltrosAlterados += 1;
                }
            }
        }
    });

    $("#quantidade_filtro").html(quantidadeFiltrosAlterados);

    if (quantidadeFiltrosAlterados > filtroInicial)
    {
        $(button).removeClass("d-none");
        $("#quantidade_filtro").removeClass("d-none");
    }
    else
    {
        $(button).addClass("d-none");

        if (parseInt(filtroInicial) === 0)
        {
            $("#quantidade_filtro").addClass("d-none");
        }
    }
}

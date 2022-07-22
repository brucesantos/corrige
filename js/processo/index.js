$(document).ready(function ()
{
    processoEvento();

    obterTabelaProcesso();
});

function processoEvento()
{
    mascaras();
    calendarioPeriodo();
    dropdownSelect();

    //let validatorFiltro = FormValidation.formValidation(
    //    document.getElementById('filter_produto_form'),
    //    {
    //        locale: 'pt_BR',
    //        localization: FormValidation.locales.pt_BR,

    //        fields: {
    //            'id_situacao_filtro': { validators: { notEmpty: {}, stringLength: { min: 3 } } },
    //        },

    //        plugins: {
    //            trigger: new FormValidation.plugins.Trigger(),
    //            bootstrap: new FormValidation.plugins.Bootstrap5({
    //                rowSelector: '.fv-row',
    //                eleInvalidClass: '',
    //                eleValidClass: ''
    //            })
    //        }
    //    }
    //);

    //$('[name="id_situacao_filtro"]').on('change', function () {
    //    validatorFiltro.revalidateField('id_situacao_filtro');
    //});

    //$('#btn_modal_cadastrar_produto').click(function () {

    //    limparConteudoModal();

    //    const callback = (response) =>
    //    {
    //        if (response.success === undefined)
    //        {
    //            $("#modal_cadastrar_produto").html(response);
    //            $("#modal_cadastrar_produto").modal('show');

    //            ocultarLoading();
    //        }
    //        else exibirNotificacao('Cadastro de Produto', response);
    //    }

    //    enviarRequisicao('Cadastro de Produto', '/Produto/Cadastro', callback, 'GET', null, false);
    //});

    $("#btn_filtro_processo").on("click", function () {
        $("#filtro_processo_form").slideToggle();
    });

    $("#btn_limpar_filtro_processo").on("click", function ()
    {
        $("#filtro_processo_form").trigger('reset');

        $("#filtro_processo_form .form-select").map(function ()
        {
            $(this).trigger('change');
        });

        //tableProduto.ajax.reload();
    });

    $("#filtro_processo_form .form-control, #filtro_processo_form .form-select").on("change", function ()
    {
        obterQuantidadeFiltrosAlterados("#filtro_processo_form .form-control, #filtro_processo_form .form-select", "#btn_limpar_filtro_processo", 0);
    });

   

    //$("#btn_filtrar_produto").on("click", function () {        

    //    validatorFiltro.validate().then(function (status) {
    //        if (status === 'Valid')
    //        {
    //            tableProduto.ajax.reload();
    //        }
    //    });
     
    //});
}

function obterTabelaProcesso()
{
    var listItem = [
        {
            "id": 'B521D2FF-EA38-4461-A3AE-5227273E3523',
            "dtRecebimento": '15/06/2022 09:00',
            "concurso": 'PMCE',
            "numeroProcesso": '0650375-96.2022.8.04.0001',
            "inscricao": '195091746',
            "cpf": '408.082.788-19',
            "nome": 'WELITON MIGUEL DOS SANTOS',
            "liminar": false,
            "status": 'Finalizado'
        },
        {
            "id": 'B521D2FF-EA38-4461-A3AE-5227273E3524',
            "dtRecebimento": '17/06/2022 09:00',
            "concurso": 'PMCE',
            "numeroProcesso": '0650402-79.2022.8.04.0001',
            "inscricao": '195056629',
            "cpf": '799.955.432-49',
            "nome": 'LEANDRO PEREIRA NEVES',
            "liminar": false,
            "status": 'Cadastrado'
        },
        {
            "id": 'B521D2FF-EA38-4461-A3AE-5227273E3525',
            "dtRecebimento": '19/06/2022 09:00',
            "concurso": 'PMCE',
            "numeroProcesso": '0650129-03.2022.8.04.0001',
            "inscricao": '195067056',
            "cpf": ' 829.073.822-68',
            "nome": 'MICHAELL SOUZA DE PAULA',
            "liminar": true,
            "status": 'Em Análise'
        },
        {
            "id": 'B521D2FF-EA38-4461-A3AE-5227273E3526',
            "dtRecebimento": '21/06/2022 09:00',
            "concurso": 'PMCE',
            "numeroProcesso": '0653188-96.2022.8.04.0001',
            "inscricao": '195035917',
            "cpf": '014.051.782-05',
            "nome": 'LUAN RAFAEL ANDRADE DE SOUZA',
            "liminar": false,
            "status": 'Procuração Pendente'
        }
    ];

    tabelaProcesso = $('#tabela_processo').DataTable({
        order: [[1, 'asc']],
        data: listItem,
        serverSide: false,
        language: obterLinguagemTabela(),
        columns: [
            { data: 'dtRecebimento', class: 'border-gray-300 border-right-1 align-middle', width: '150px' },
            { data: 'concurso', class: 'border-gray-300 border-right-1 align-middle', responsivePriority: 1  },
            { data: 'numeroProcesso', class: 'border-gray-300 border-right-1 align-middle'},
            { data: 'inscricao', class: 'border-gray-300 border-right-1 align-middle' },
            { data: 'cpf', class: 'border-gray-300 border-right-1 align-middle' },
            { data: 'nome', class: 'border-gray-300 border-right-1 align-middle', responsivePriority: 2 },
            { data: 'status', class: 'border-gray-300 border-right-1 align-middle', responsivePriority: 2 },
            { data: 'id', class: 'border-gray-300 border-right-1 align-middle' }
        ],
        columnDefs: [
            {
                targets: 6,
                width: '125px',
                orderable: false,
                render: function (data)
                {
                    var badgeColor = "";

                    if (data === "Cadastrado") {
                        badgeColor = "badge-light";
                    }
                    else if (data === "Em Análise")
                    {
                        badgeColor = "badge-light-primary";
                    }
                    else if (data === "Finalizado")
                    {
                        badgeColor = "badge-light-success";
                    }
                    else if (data === "Procuração Pendente")
                    {
                        badgeColor = "badge-light-danger";
                    }

                    return '<div class="badge ' + badgeColor + '">' + data + '</div>';
                }
            },
            {
                targets: 7,
                width: '75px',
                orderable: false,
                render: function (data, type, row) {
                    var buttonAnalise = row.status === "Cadastrado" ? '<a class="btn btn-icon btn-secondary btn-sm btn-modal-analise m-1" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="Enviar para Análise" data-value="' + data + '" ><i class="fas fa-people-arrows mr-10"></i></a>' : '';

                    return '<div class="d-flex justify-content-center flex-shrink-0">\
                                '+ buttonAnalise +'\
                                <a class="btn btn-icon btn-secondary btn-sm btn_modal_alterar m-1" data-value="'+ data + '" ><i class="fas fa-pencil-alt mr-10"></i></a>\
								<a class="btn btn-icon btn-secondary btn-sm btn_grid_excluir m-1" data-value="'+ data + '"><i class="fas fa-trash-alt mr-10"></i></a>\
							</div >';
                }
            }
        ]
    });

    tabelaProcesso.on('draw', function ()
    {
        forceTooltip();

        modalAnaliseEvento('Análise do Processo','#modal_analise');


        //$('#tabela_precificacao_produto thead th').removeClass('text-end');

        //modalHistoricoEvent();

        //modalEdicaoEvent("Cadastro de Categoria", "#modal_cadastrar_categoria", '/Categoria/Cadastro?id=');

        //gridExcluirEventPage("Exclusão de Item", "Esta ação é irreversível, tem certeza que deseja remover o item?");
    })

    //const data = function (d) {
    //    d.DS_PartNumber = $("#ds_partNumber_filtro").val();
    //    d.DS_Descricao = $("#ds_descricao_filtro").val();
    //    d.DS_Ncm = $("#ds_ncm_filtro").val();
    //    d.ID_Tipo = $("#id_tipo_filtro").val();
    //    d.ID_Fabricante = $("#id_fabricante_filtro").val();
    //    d.ID_Origem = $("#id_origem_filtro").val();
    //    d.Id_Situacao = $("#id_situacao_filtro").val();
    //}

    //tableProduto = $('#tabela_produto').DataTable({
    //    order: [[1, 'asc']],
    //    ajax: obterAjaxTabela("Lista de Produtos", "/Produto/Obter", data),
    //    language: obterLanguageTabela(),
    //    columns: [
    //        { data: 'dS_PartNumber', width: '175px', class: 'border-gray-300 border-right-1 align-middle' },
    //        { data: 'dS_Descricao', class: 'border-gray-300 border-right-1 align-middle', responsivePriority: 1  },
    //        { data: 'dS_Ncm', class: 'border-gray-300 border-right-1 align-middle', width: '150px' },
    //        { data: 'dS_Tipo', class: 'border-gray-300 border-right-1 align-middle', width: '150px' },
    //        { data: 'dS_Fabricante', class: 'border-gray-300 border-right-1 align-middle', width: '325px', responsivePriority: 2 },
    //        { data: 'dS_Origem', class: 'border-gray-300 border-right-1 align-middle', width: '150px' },
    //        { data: 'vlR_CustoFormatado', class: 'border-gray-300 border-right-1 align-middle text-end', width: '150px'},
    //        { data: 'dS_Situacao', class: 'border-gray-300 border-right-1 align-middle text-center', width: '150px' },
    //        { data: 'id', class: 'border-gray-300 text-center', width: '175px' }
    //    ],
    //    columnDefs: [
    //        {
    //            targets: 8,
    //            width: '175px',
    //            orderable: false,
    //            render: function (data)
    //            {
    //                return '<div class="d-flex justify-content-center flex-shrink-0">\
    //                            <a class="btn btn-icon btn-secondary btn-sm btn_modal_historico m-1" data-value="'+ data +'"><i class="fas fa-history mr-10"></i></a>\
    //                            <a class="btn btn-icon btn-secondary btn-sm btn_modal_alterar m-1" data-value="'+ data +'" ><i class="fas fa-pencil-alt mr-10"></i></a>\
				//				<a class="btn btn-icon btn-secondary btn-sm btn_grid_excluir m-1" data-value="'+ data + '"><i class="fas fa-trash-alt mr-10"></i></a>\
				//			</div >';
    //            }
    //        }
    //    ]
    //});

    //tableProduto.on('draw', function (e, settings, data)
    //{
    //    $('#tabela_produto thead th').removeClass('text-end');

    //    modalHistoricoEvent();

    //    modalEdicaoEvent("Cadastro de Produto", "#modal_cadastrar_produto", '/Produto/Cadastro?id=');

    //    gridExcluirEvent("Exclusão de Produto", "Esta ação é irreversível, tem certeza que deseja remover o produto?", tableProduto, 'Produto');
    //})

    
}

function modalAnaliseEvento(titulo, modal, url)
{

    $('.btn-modal-analise').click(function () {

        var registroId = $(this).attr("data-value");

        $(modal).modal('show');

        //const callback = (response) => {
        //    if (response.success === undefined) {
        //        limparConteudoModal();

        //        ocultarLoading();

        //        $(modal).html(response);
        //        $(modal).modal('show');
        //    }
        //    else exibirNotificacao(titulo, response);
        //}

        //enviarRequisicao(titulo, url + registroId, callback);
    });
}



function limparConteudoModal()
{
    //$("#modal_historico").empty();
    //$("#modal_importar_produto").empty();
    //$("#modal_cadastrar_produto").empty();
}




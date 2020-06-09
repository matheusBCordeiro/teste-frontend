var $modal = $('.modal');

// Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function(e) {
  var paragraphs = $(e.relatedTarget).data('paragraphs');

  $(this)
    .addClass('modal-scrollfix')
    .find('.modal-body')
    .html('loading...')

});

//dinamics functions
$(document).ready(function () {
    $("#btn-modal1").click(function () {
        $(".modal-title").html("Erp para Confecção")
        $("article").html(
            "Nosso sistema ERP é ideal para lojas que exigem controle e praticidade, permite o controle de varias lojas permitindo separar estoque por filial, controlar movimento financeiro consolidado ou separado por loja de maneira pratica e eficiente, é possível fazer integração com fabricas, funciona na Nuvem ou local."
        );
    });

    $("#btn-modal2").click(function () {
        $(".modal-title").html("Erp para Lojas  ")
        $("article").html(
            "Nosso Erp para Confecção ajuda grandes confecções no Brasil a serem mais eficientes e rentáveis, veja como sua confecção pode ser ágil e eficiente, controle sua empresa desde a formação do preço de venda, entrada de pedidos , monitore todos os processos para elaboração da peça final como corte, enfesto, facções e expedição."
        );
    });

    $("#btn-modal3").click(function () {
        $(".modal-title").html("Sistema para Distribuidora")
        $("article").html(
            "Nosso sistema ERP para distribuidoras fornece soluções práticas para gestão diária de uma distribuidora, como automação da digitação de pedidos, controle financeiro, rotas de entrega, controle financeiro total, gestão do estoque, automação do faturamento, alem dos complicados cálculos de ICMS substituto."
        );
    });

    $("#btn-modal4").click(function () {
        $(".modal-title").html("CAD para Confecção")
        $("article").html(
            "RZ CAD Têxtil é o CAD para confecção ideal, tem a melhor relação custo benefício do mercado, possui praticamente todas as funções dos Softwares concorrentes como Audaces Vestuário, Lectra e Gerber, por um preço mais acessível, além disso ele é desenvolvido 100% no Brasil."
        );
    });

    $("#btn-modal5").click(function () {
        $(".modal-title").html("Plotter Confecção")
        $("article").html(
            "A RZ Sistemas fornece Plotters para confecção, a linha Rz Textil Jet compatível com Rz CAD, Audaces, Optitex, Lectra, Gerber, temos diversos modelos com velocidades e tamanhos diferentes. A linha Rz Têxtil Jet BR possui modelos com cabeças de impressão de: 120cm, 160cm, 185cm e 220cm."
        );
    });

    $("#btn-modal6").click(function () {
        $(".modal-title").html("Venda a pronta entrega")
        $("article").html(
            "Vender a pronta entrega requer mais que apenas um solução eficiente de força de vendas, requer a gerencia de todo o processo para controle de estoque, geração de notas fiscais de transferência e devolução dos caminhões ou vendedores, alem da emissão da nota fiscal para o cliente final."
        );
    });
});

$(document).ready(function () {
    $("#btn-hide1").click(function () {
        $("#b1").hide();
    });

    $("#btn-show1").click(function () {
        $("#b1").show();
    });

    $("#btn-hide2").click(function () {
        $("#b2").hide();
    });

    $("#btn-show2").click(function () {
        $("#b2").show();
    });
    $("#btn-hide3").click(function () {
        $("#b3").hide();
    });

    $("#btn-show3").click(function () {
        $("#b3").show();
    });

    $("#btn-hide4").click(function () {
        $("#b4").hide();
    });

    $("#btn-show4").click(function () {
        $("#b4").show();
    });
    $("#btn-hide5").click(function () {
        $("#b5").hide();
    });

    $("#btn-show5").click(function () {
        $("#b5").show();
    });

    $("#btn-hide6").click(function () {
        $("#b6").hide();
    });

    $("#btn-show6").click(function () {
        $("#b6").show();
    });
});
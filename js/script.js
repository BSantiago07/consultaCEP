$(document).ready(function() {
    $("#botao").click(function(chamaFuncao) {
        let dadoCep = $("#cep").val();
        $.getJSON(`https://viacep.com.br/ws/${dadoCep}/json/unicode/`, function(e) {
            $("#txtCEP").val(e.cep);
            $("#txtLogradouro").val(e.logradouro);
            $("#txtLocalidade").val(e.localidade);
            $("#txtBairro").val(e.bairro);
            $("#txtUf").val(e.uf);

        })
    })


});
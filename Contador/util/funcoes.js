// variaveis globais
caracteresTotal = 0;

$(document).ready(function(){
	
	tamanhoTela = $(window).height();
	larguraTela = $(window).width();
	
	/* AJUSTES NA TELA */
	$("#principal").css("height", tamanhoTela - 110);	
	$("#principal div").css("height", (tamanhoTela - 110) - 140 );	
	$("#modal").css("left", (larguraTela - 520) / 2);	
	
	$("#paragrafo").keypress(function( event ) {
		if (event.which == 13) {
			event.preventDefault();
			
			// armazena o paragrafo digitado
			campo = $(this).val();
			
			// apresenta o paragrafo digitado dentro do texto
			$("#principal div").append("<p>"+ campo +"</p>");
			
			// limpa o campo para edição de um novo paragrafo
			$(this).val("");
			
			// total de caracteres digitados
			qntCaracteresTotais = campo.length;
			caracteresTotal += qntCaracteresTotais;
	
		}	
	});
	
	$("#contar").click(function(){
		alert("Total de caracteres: "+caracteresTotal);
	});
	
});
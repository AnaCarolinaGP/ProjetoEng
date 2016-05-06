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
			
			campo = $(this).val();
			
			$("#principal div").append("<p>"+ campo +"</p>");
			
			$(this).val("");
		}	
	});
	
});
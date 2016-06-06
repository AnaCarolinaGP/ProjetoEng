qntTexto = 1;

caracteresTotal = 0;
caracteresSETotal = 0; // sem espaço
paragrafosTotal = 0;
palavrasTotal = 0;

$(document).ready(function(){
	
	tamanhoTela = $(window).height();
	larguraTela = $(window).width();
	
	/* AJUSTES NA TELA */
	$("#principal").css("height", tamanhoTela - 110);	
	$("#principal div").css("height", (tamanhoTela - 110) - 140 );	
	$("#modal").css("left", (larguraTela - 520) / 2);
	
	/* BOTAO CONTADOR */
	$("#contar").click(function(){
		$(".qnt_caracteres_totais label").text(caracteresTotal);
		$(".qnt_paragrafos label").text(paragrafosTotal);
		$(".qnt_caracteres_espaco label").text(caracteresSETotal);
		$(".qnt_palavras label").text(palavrasTotal);
		
		$("#modal, .overlay").show();
	});
	
	$("#fechar").click(function(){
		$("#modal, .overlay").hide();
	});
	
	$("#novo").click(function(){
		$("#modal, .overlay").hide();
		caracteresTotal = 0;
		caracteresSETotal = 0; // sem espaço
		paragrafosTotal = 0;
		palavrasTotal = 0;
		$("#principal div p").remove();
		// se existir mais de um texto
		if (qntTexto > 1){
			$("header span label").remove();
			$("header span").append("<label>texto 1</label>").removeClass();
			$("#contar").text("contar");
			$("#principal span label").show();
		}
		qntTexto = 1;
	});
	
	$("#mais_texto").click(function(){
		$("#contar").text("comparar");
		$("header span").addClass("varios");
		qntTexto++;
		$("header span").append("<label> Texto "+ qntTexto +" </label>");
		$("#principal span label").hide();
	});
	
	/* FAZ O CALCULO TODA VEZ QUE APERTAR ENTER NO TEXTAREA, OU SEJA, QUANDO INSERIR UM NOVO PARAGRAFO */
	$("#teste").keypress(function( event ) {
		if (event.which == 13) {
			event.preventDefault();
			
			campo = $(this).val();
			
			$("#principal div").append("<p>"+ campo +"</p>");
			
			// total de caracteres digitados
			qntCaracteresTotais = campo.length;
			caracteresTotal += qntCaracteresTotais;
						
			// retira os espaços
			semEspaço = campo.split(" ");
			
			// como retirou os espaços, sobraram as palavras
			qntPalavras = semEspaço.length;
			palavrasTotal += qntPalavras;
						
			// conta caracteres sem o espaço
			qntCaracteresSemEspaco = qntCaracteresTotais - qntPalavras + 1;
			caracteresSETotal += qntCaracteresSemEspaco;
						
			paragrafosTotal++;			
		
			$(this).val("");
		}	
	});
	
	
});
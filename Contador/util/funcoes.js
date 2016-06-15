qntTexto = 1;

caracteresTotal = 0;
caracteresSETotal = 0; // sem espaço
paragrafosTotal = 0;
palavrasTotal = 0;
qntNumeros = 0;

$(document).ready(function(){
	
	tamanhoTela = $(window).height();
	larguraTela = $(window).width();
	
	/* AJUSTES NA TELA */
	$("#principal").css("height", tamanhoTela - 110);	
	$("#principal div").css("height", (tamanhoTela - 110) - 140 );	
	$("#modal").css("left", (larguraTela - 520) / 2);
	
	/* BOTAO QUE MOSTRA CONTAGEM */
	$("#contar").click(function(){
		
		if(caracteresTotal == 0){
			alert("Nenhum texto inserido!!!");
		}else{
			$(".qnt_caracteres_totais label").text(caracteresTotal);
			$(".qnt_paragrafos label").text(paragrafosTotal);
			$(".qnt_caracteres_espaco label").text(caracteresSETotal);
			$(".qnt_palavras label").text(palavrasTotal);
			$(".qnt_numeros label").text(qntNumeros);
			$("#modal, .overlay").show();
		}		
		
	});
	
	/* FECHA MODAL */
	$("#fechar").click(function(){
		$("#modal, .overlay").hide();
	});
	
	/* NOVA CONTAGEM */
	$("#novo").click(function(){
		location.reload();
	});
	
	/* ACRESCENTA NOVO TEXTO */
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
						
			
			for (i=0;i < campo.length;i++){				
				// evita que espaços duplos contem como uma nova palavra			
				if (i > 1){
					if ((campo[i] == " ") &&(campo[i-1] == " ")){
						palavrasTotal--;
					}
				}
				
				// conta numeros
				if( (campo[i] == "1") || (campo[i] == "2") || (campo[i] == "3") || (campo[i] == "4") || (campo[i] == "5") || (campo[i] == "6") || (campo[i] == "7") || (campo[i] == "8") || (campo[i] == "9") || (campo[i] == "0") ){
					qntNumeros++;
				}
			}			
						
			// conta caracteres sem o espaço
			qntCaracteresSemEspaco = qntCaracteresTotais - qntPalavras + 1;
			caracteresSETotal += qntCaracteresSemEspaco;
			
			paragrafosTotal++;			
		
			$(this).val("");
		}	
	});
	
});
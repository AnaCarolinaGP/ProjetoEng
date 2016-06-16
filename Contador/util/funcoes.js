qntTexto = 1;
textoAtivo = 1;

// para TEXTO 1
caracteresTotal = 0;
caracteresSETotal = 0; // sem espaço
paragrafosTotal = 0;
palavrasTotal = 0;
qntNumeros = 0;
todoTexto = "";

// para TEXTO 2
caracteresTotal_2 = 0;
caracteresSETotal_2 = 0; // sem espaço
paragrafosTotal_2 = 0;
palavrasTotal_2 = 0;
qntNumeros_2 = 0;
todoTexto_2 = "";

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
			$("#modal, .overlay, #modal h3").show();
			
			if (qntTexto == 2){
				$("#modal .exibir").show();
				$(".qnt_caracteres_totais_2 label").text(caracteresTotal_2);
				$(".qnt_paragrafos_2 label").text(paragrafosTotal_2);
				$(".qnt_caracteres_espaco_2 label").text(caracteresSETotal_2);
				$(".qnt_palavras_2 label").text(palavrasTotal_2);
				$(".qnt_numeros_2 label").text(qntNumeros_2);				
			}			
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
		$(this).hide();
		$("#contar").text("exibir contagem de comparação");
		$("header span").addClass("varios");
		qntTexto++;
		textoAtivo = 2;
		$("header #txt").show().addClass("ativo");
		$("#principal span label").hide();
		$("#principal > div").text("");
	});
	
	$("header span label").on("click", function() {
		if (textoAtivo == 2){
			$("#principal > div").html(todoTexto);
			$("header #txt").removeClass("ativo");
			$("header #txt1").addClass("ativo");
			textoAtivo = 1;
		}else{
			$("#principal > div").html(todoTexto_2);
			$("header #txt1").removeClass("ativo");
			$("header #txt").addClass("ativo");
			textoAtivo = 2;
		}
	});
	
	/* FAZ O CALCULO TODA VEZ QUE APERTAR ENTER NO TEXTAREA, OU SEJA, QUANDO INSERIR UM NOVO PARAGRAFO */
	$("#teste").keypress(function( event ) {
		
		if (textoAtivo == 1){
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
				
				todoTexto += "<p>"+ campo +"</p>";
			
				$(this).val("");
			}	
		}
		
		if (textoAtivo == 2){
			if (event.which == 13) {
				event.preventDefault();
				
				campo = $(this).val();
				
				$("#principal div").append("<p>"+ campo +"</p>");
				
				// total de caracteres digitados
				qntCaracteresTotais = campo.length;
				caracteresTotal_2 += qntCaracteresTotais;
							
				// retira os espaços
				semEspaço = campo.split(" ");
				
				// como retirou os espaços, sobraram as palavras
				qntPalavras = semEspaço.length;
				palavrasTotal_2 += qntPalavras;
							
				
				for (i=0;i < campo.length;i++){				
					// evita que espaços duplos contem como uma nova palavra			
					if (i > 1){
						if ((campo[i] == " ") &&(campo[i-1] == " ")){
							palavrasTotal_2--;
						}
					}
					
					// conta numeros
					if( (campo[i] == "1") || (campo[i] == "2") || (campo[i] == "3") || (campo[i] == "4") || (campo[i] == "5") || (campo[i] == "6") || (campo[i] == "7") || (campo[i] == "8") || (campo[i] == "9") || (campo[i] == "0") ){
						qntNumeros_2++;
					}
				}			
							
				// conta caracteres sem o espaço
				qntCaracteresSemEspaco = qntCaracteresTotais - qntPalavras + 1;
				caracteresSETotal_2 += qntCaracteresSemEspaco;
				
				paragrafosTotal_2++;			
				
				todoTexto_2 += "<p>"+ campo +"</p>";
			
				$(this).val("");
			}	
		}
	});	
});
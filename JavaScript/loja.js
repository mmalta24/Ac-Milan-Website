
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var total = 0;
var totalprods = 0;

document.addEventListener('click', function (event) {

	//se o botao carregado nao for o de adicionar ao carrinho, ele salta da funcao
    if (!event.target.matches('.btn_carrinho')) return;
	
	//incrementa total dos produtos
	totalprods++;
	
	var totalprodsText = "";
	//se total de proodutos for maior que 1, adiciona legenda do total de produtos
	if(totalprods > 1){
		totalprodsText  = "("+totalprods+" produtos)";
	}
	

    var preco = event.target.getAttribute('data-preco'); //preco do produto adicionado
    var prod = event.target.getAttribute('data-prod'); //nome do produto adicionado
	
	total = total + parseInt(event.target.getAttribute('data-preco')); //total do preco de todos os produtos
	
	//altera a div do carrinho para atualizar a informação
	document.getElementById("produtos_carrinho").innerHTML = "<p>Foi adicionado ao seu carrinho o seguinte produto:</p><ul><li>"+prod+" - "+preco+"€</li></ul><h2 class='total_carrinho'>Total Carrinho: "+total+"€ "+totalprodsText+"</h2>";

	//mostra o modal do carrinho
    modal.style.display = "block";

}, false);

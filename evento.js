function carreguei() {
	document.getElementById('log').innerHTML += "<br>carreguei<br>";
}

function redimensionei() {
	document.getElementById('log').innerHTML += "redimensionei<br>";
}

function umClique() {
	document.getElementById('imagem').src="fatecjd.png";
	document.getElementById('log').innerHTML += "um clique (trocou imagem)<br>";
}

function doisCliques() {
	document.getElementById('imagem').src="fatecjd.jpg";
	document.getElementById('log').innerHTML += "dois clique (trocou imagem)<br>";
}

function sobre() {
	document.getElementById('cores').style.backgroundColor="red";
	document.getElementById('log').innerHTML += "sobre a DIV (vermelha)<br>";	
}

function saindo() {
	document.getElementById('cores').style.backgroundColor="pink";
	document.getElementById('log').innerHTML += "saindo da DIV (rosa)<br>";	
}


function paraBaixo() {
	document.getElementById('cores').style.backgroundColor="blue";
	document.getElementById('log').innerHTML += "clicando na DIV (azul)<br>";	
}


function paraCima() {
	document.getElementById('cores').style.backgroundColor="yellow";
	document.getElementById('log').innerHTML += "soltando na DIV (amarelo)<br>";	
}


function movendo() {
	document.getElementById('cores').style.backgroundColor="green";
	document.getElementById('log').innerHTML += "movendo na DIV (verde)<br>";	
}

function entreiNoCampo() {
	document.getElementById('log').innerHTML += "entrei no campo<br>";
}

function saiDoCampo() {
	document.getElementById('log').innerHTML += "sai do campo<br>";
}

function mudei() {
	document.getElementById('log').innerHTML += "mudei<br>";
}

function selecionei() {
	document.getElementById('log').innerHTML += "selecionei<br>";
}

function teclaBaixo() {
	document.getElementById('log').innerHTML += "tecla para baixo<br>";
}

function teclaCima() {
	document.getElementById('log').innerHTML += "tecla para cima<br>";
}
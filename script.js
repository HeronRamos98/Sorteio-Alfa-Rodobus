const nomes = ["Heron", "Pedro Lucca", "Fabio", "Maira", "Leila"]; // Lista de nomes

document.getElementById("sortear").addEventListener("click", function(event) {
    event.preventDefault(); 
    const indiceAleatorio = Math.floor(Math.random() * nomes.length); 
    const nomeSorteado = nomes[indiceAleatorio]; 
    document.getElementById("resultado").innerText = `Parabéns!! O ganhador(a) do sorteio foi: ${nomeSorteado}`; 
});
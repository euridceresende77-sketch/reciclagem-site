function simular() {
    const respostas = [
        "Plástico → Caixote Amarelo",
        "Papel → Caixote Azul",
        "Vidro → Caixote Verde",
        "Metal → Caixote Amarelo"
    ];

    const sorteio = Math.floor(Math.random() * respostas.length);
    document.getElementById("resultado").innerText =
        "Resíduo identificado: " + respostas[sorteio];
}

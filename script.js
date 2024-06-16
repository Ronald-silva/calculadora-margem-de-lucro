function calcularMargemLucro() {
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);
    const lucro = parseFloat(document.getElementById('lucro').value);

    if (isNaN(precoVenda) || isNaN(lucro)) {
        alert('Por favor, insira valores válidos para o preço de venda e lucro.');
        return;
    }

    const margemLucro = (lucro / precoVenda) * 100;
    document.getElementById('margemLucro').textContent = margemLucro.toFixed(2);
}

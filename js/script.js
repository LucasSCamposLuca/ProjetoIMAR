// CIRCULO ANIMAÇÃO
// Obtém o elemento canvas
// Obtém o elemento
var BoxEscala = document.getElementsByClassName('BoxEscala');

// Adiciona o evento mouseover
BoxEscala.addEventListener('mouseover', function() {
    // Altera o tamanho e a forma do objeto
    BoxEscala.style.width = '500px';
    BoxEscala.style.height = '500px';
    BoxEscala.style.borderRadius = '50%';
});

// Adiciona o evento mouseout
BoxEscala.addEventListener('mouseout', function() {
    // Restaura o tamanho e a forma original do objeto
    BoxEscala.style.width = '44%';
    BoxEscala.style.height = '205px';
    BoxEscala.style.borderRadius = '20px';
});

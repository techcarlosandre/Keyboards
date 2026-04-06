let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', - 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal-show');
    }
}

function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal-show');
    }
}

document.querySelectorAll('.modal-container').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            fecharModal(modal.id);
        }
    });
});

function adicionarAColecao(nomeTeclado) {
    const notification = document.createElement('div');
    notification.className = 'ping-notification';
    notification.innerHTML = `
        <div class="ping-content">
            <span class="ping-icon">🔔</span>
            <div class="ping-text">
                <strong>Adicionado!</strong>
                <p>${nomeTeclado} foi para sua lista.</p>
                <a href="https://techcarlosandre.github.io/keyboard-collection/" target="_blank">Ver Coleção</a>
            </div>
        </div>
    `;

    document.body.appendChild(notification);

    let listaAtual = JSON.parse(localStorage.getItem('minha_colecao')) || [];

    const novoItem = {
        id: Date.now(),
        titulo: nomeTeclado,
        descricao: "Adicionado via catálogo de teclados",
        comprado: false
    };

    listaAtual.push(novoItem);
    localStorage.setItem('minha_colecao', JSON.stringify(listaAtual));

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}
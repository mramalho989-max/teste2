// 1. Rolagem Suave para os botões de "Saiba Mais" ou "Comprar"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Efeito de Revelação (Os elementos aparecem quando você desce a página)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden-load');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Contador de Escassez (Exemplo: 15 minutos para acabar a oferta)
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reinicia o timer ou para a oferta
        }
    }, 1000);
}

window.onload = function () {
    let fifteenMinutes = 60 * 15,
        display = document.querySelector('#timer');
    if(display) startTimer(fifteenMinutes, display);
};
{/* Menu de Abas Atualizado */}
<div className="bg-blue-900 text-white sticky top-0 z-40 shadow-lg mt-8">
    <div className="container mx-auto flex overflow-x-auto justify-center scrollbar-hide">
        {[
            { id: 'inicio', label: 'Início', icone: 'fa-house' },
            { id: 'itinerario', label: 'Itinerário', icone: 'fa-map-location-dot' },
            { id: 'roteiro', label: 'Roteiro', icone: 'fa-route' },
            { id: 'interior', label: 'Interior', icone: 'fa-lightbulb' }
        ].map(aba => (
            <button 
                key={aba.id} 
                onClick={() => setAbaAtiva(aba.id)}
                className={`px-8 py-4 flex items-center gap-2 font-bold uppercase text-xs tracking-widest transition-all min-w-max
                ${abaAtiva === aba.id ? 'bg-orange-600 border-b-4 border-white' : 'hover:bg-blue-800 text-blue-100'}`}
            >
                <i className={`fa-solid ${aba.icone}`}></i> {aba.label}
            </button>
        ))}
    </div>
</div>

// === КАЛЬКУЛЯТОР СТОИМОСТИ ===
const carClass = document.getElementById('carClass');
const service = document.getElementById('service');
const extra = document.getElementById('extra');
const result = document.getElementById('result');

function calculate() {
    const classCoeff = parseFloat(carClass.value);
    const basePrice = parseFloat(service.value);
    const extraPrice = extra.checked ? 1500 : 0;
    const total = Math.round(basePrice * classCoeff + extraPrice);
    result.textContent = 'Итого: ' + total.toLocaleString('ru-RU') + ' ₽';
}

carClass.addEventListener('change', calculate);
service.addEventListener('change', calculate);
extra.addEventListener('change', calculate);

// === ГАЛЕРЕЯ (модальное окно) ===
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        modalImg.src = this.src.replace('w=400', 'w=1200');
        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// === ФОРМА ЗАПИСИ ===
const form = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    successMsg.style.display = 'block';
});

// === ПЛАВНАЯ ПРОКРУТКА ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
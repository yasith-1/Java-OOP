
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.08 });
reveals.forEach(r => observer.observe(r));

// Nav scroll
const concepts = Array.from({ length: 6 }, (_, i) => document.getElementById('concept-' + i));
const pills = document.querySelectorAll('.nav-pill');

function scrollToSection(idx) {
    concepts[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.addEventListener('scroll', () => {
    let current = 0;
    concepts.forEach((c, i) => {
        if (c && c.getBoundingClientRect().top < window.innerHeight * 0.5) current = i;
    });
    pills.forEach((p, i) => p.classList.toggle('active', i === current));
});

// Copy code
function copyCode(btn) {
    const block = btn.closest('.code-block').querySelector('.code-content');
    const text = block.innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✓ copied';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
    });
}

// Stagger card animations
document.querySelectorAll('.concept-card').forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + 's';
});
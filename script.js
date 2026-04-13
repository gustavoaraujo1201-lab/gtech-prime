// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Nav shrink
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '14px 60px' : '20px 60px';
});

// Phone mask
document.getElementById('f-fone').addEventListener('input', function () {
  let v = this.value.replace(/\D/g,'').substring(0,11);
  if (v.length > 6) v = '('+v.substring(0,2)+') '+v.substring(2,7)+'-'+v.substring(7);
  else if (v.length > 2) v = '('+v.substring(0,2)+') '+v.substring(2);
  else if (v.length) v = '('+v;
  this.value = v;
});

// Form submit
function submitForm() {
  const nome  = document.getElementById('f-nome').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const fone  = document.getElementById('f-fone').value.trim();
  const tipo  = document.getElementById('f-tipo').value;
  const desc  = document.getElementById('f-desc').value.trim();
  const lgpd  = document.getElementById('f-lgpd').checked;
  const err   = document.getElementById('formError');

  if (!nome || !email || !fone || !tipo || !desc || !lgpd) {
    err.style.display = 'block';
    err.textContent = '⚠️ Preencha todos os campos obrigatórios (*) e aceite a política de privacidade.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.style.display = 'block';
    err.textContent = '⚠️ Informe um e-mail válido.';
    return;
  }

  err.style.display = 'none';
  document.getElementById('nomeCliente').textContent = nome;
  document.getElementById('formGrid').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

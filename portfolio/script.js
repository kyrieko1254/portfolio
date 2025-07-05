document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = '모든 항목을 입력해 주세요.';
      formMessage.style.color = '#e63946';
      return;
    }
    formMessage.textContent = '메시지가 성공적으로 전송되었습니다!';
    formMessage.style.color = '#3a86ff';
    form.reset();
  });
}); 
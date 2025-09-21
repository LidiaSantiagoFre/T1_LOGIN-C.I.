const container = document.querySelector('.container'),
  registerBtn = document.querySelector('.register-btn'),
  loginBtn = document.querySelector('.login-btn'),
  openRecover = document.getElementById('open-recover'),
  backToLogin = document.getElementById('back-to-login'),
  backToLogin2 = document.getElementById('back-to-login-2'),
  recoverForm = document.getElementById('recover-form'),
  changeForm = document.getElementById('change-form');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

openRecover.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('recover-active');
});

backToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('recover-active');
});

recoverForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Correo enviado correctamente. Ahora puedes cambiar tu contraseña.');
  container.classList.remove('recover-active');
  container.classList.add('change-pass-active');
});

backToLogin2.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('change-pass-active');
});

changeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newPass = document.getElementById('new-password').value;
  const confirmPass = document.getElementById('confirm-password').value;

  if (newPass !== confirmPass) {
    alert('Las contraseñas no coinciden');
    return;
  }

  alert('Contraseña actualizada con éxito');
  container.classList.remove('change-pass-active');
});

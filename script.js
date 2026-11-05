document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptBtn = document.getElementById('acceptBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Comprobar si el usuario ya aceptó las cookies previamente
  const isAccepted = localStorage.getItem('cookieConsent');

  if (isAccepted === 'true') {
    cookiePopup.classList.add('hidden');
  }

  // Evento al hacer clic en "I like Cookies"
  acceptBtn.addEventListener('click', () => {
    // Guardar consentimiento en LocalStorage
    localStorage.setItem('cookieConsent', 'true');
    // Ocultar el popup
    cookiePopup.classList.add('hidden');
  });

  // Evento opcional para cerrar con la "X"
  closeBtn.addEventListener('click', () => {
    cookiePopup.classList.add('hidden');
  });
});